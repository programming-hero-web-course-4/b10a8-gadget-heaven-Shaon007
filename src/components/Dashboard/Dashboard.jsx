import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredCartList, getStoredWishList, addToStoredCartList } from '../../assets/utility/addToDb';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const storedCartList = getStoredCartList();
  const storedWishList = getStoredWishList();
  const [gadgets, setGadgets] = useState([]);
  const [wishlistedGadgets, setWishlistedGadgets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const totalCost = gadgets.reduce((sum, gadget) => sum + gadget.price, 0);

  const handleAddToCart = (id) => {
    addToStoredCartList(id);
    setWishlistedGadgets((prev) => prev.filter((gadget) => gadget.product_id !== id));
    toast.success("Product added to cart!");
  };

  const handleRemoveFromCart = (id) => {
    const updatedCartList = storedCartList.filter((item) => item !== id);
    localStorage.setItem('cart-list', JSON.stringify(updatedCartList));
    setGadgets((prev) => prev.filter((gadget) => gadget.product_id !== id));
    toast.info("Product removed from cart!");
  };

  const handleRemoveFromWishlist = (id) => {
    const updatedWishList = storedWishList.filter((item) => item !== id);
    localStorage.setItem('wish-list', JSON.stringify(updatedWishList));
    setWishlistedGadgets((prev) => prev.filter((gadget) => gadget.product_id !== id));
    toast.info("Product removed from wishlist!");
  };

  useEffect(() => {
    fetch('./products.json')
      .then((res) => res.json())
      .then((data) => {
        const filteredGadgets = data.filter((item) => storedCartList.includes(item.product_id));
        setGadgets(filteredGadgets);

        const filteredWishlistGadgets = data.filter((item) => storedWishList.includes(item.product_id));
        setWishlistedGadgets(filteredWishlistGadgets);
      })
      .catch((err) => console.error(err));
  }, []);

  const sortGadgets = () => {
    const sortedGadgets = [...gadgets].sort((a, b) => b.price - a.price);
    setGadgets(sortedGadgets);
  };

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const confirmPurchase = () => {
    localStorage.removeItem('cart-list');
    setGadgets([]);
    setIsModalOpen(false);
    toast.success("Purchase successful!");
    navigate('/');
  };

  return (
    <div>
      <ToastContainer />

      <div className="bg-purple-500 text-center py-10">
        <h2 className="text-white text-3xl font-bold mb-2">Dashboard</h2>
        <p className="text-white mb-6">
          Explore the latest gadgets that will take your experience to the next level.
        </p>
      </div>

      <div className="bg-gray-100 pt-4 pb-10">
        <Tabs>
          <TabList className="flex justify-center gap-4 mb-8">
            <Tab className="px-4 py-2 font-semibold rounded-full  bg-purple-500 text-white">
              Cart
            </Tab>
            <Tab className="px-4 py-2 font-semibold rounded-full  text-purple-500 border border-purple-500">
              Wishlist
            </Tab>
          </TabList>

          <TabPanel>
            <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Cart</h3>
                <div className="flex items-center space-x-4">
                  <p className="text-lg font-bold">Total cost: ${totalCost.toFixed(2)}</p>
                  <button onClick={sortGadgets} className="px-4 py-2 border border-purple-500 text-purple-500 rounded-full">
                    Sort by Price
                  </button>
                  <button
                    onClick={handlePurchase}
                    disabled={gadgets.length === 0}
                    className={`px-4 py-2 rounded-full ${gadgets.length > 0 ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                  >
                    Purchase
                  </button>
                </div>
              </div>
              {gadgets.length > 0 ? (
                <div className="space-y-4">
                  {gadgets.map((gadget) => (
                    <div key={gadget.product_id} className="flex items-center justify-between bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-20 h-20 bg-gray-300 rounded-md overflow-hidden">
                        <img src={gadget.product_image} alt={gadget.product_title} className="object-cover w-full h-full" />
                      </div>
                      <div className="flex-1 ml-4">
                        <h2 className="text-lg font-semibold text-gray-800">{gadget.product_title}</h2>
                        <p className="text-sm text-gray-500">{gadget.description}</p>
                        <p className="text-base font-bold text-gray-800 mt-2">Price: ${gadget.price}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(gadget.product_id)}
                        className="text-red-500 text-lg hover:text-red-700 transition-colors"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Your cart is empty.</p>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Wishlist</h3>
              <div className="space-y-4">
                {wishlistedGadgets.map((gadget) => (
                  <div key={gadget.product_id} className="flex items-center justify-between bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 bg-gray-300 rounded-md overflow-hidden">
                      <img src={gadget.product_image} alt={gadget.product_title} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1 ml-4">
                      <h2 className="text-lg font-semibold text-gray-800">{gadget.product_title}</h2>
                      <p className="text-sm text-gray-500">{gadget.description}</p>
                      <p className="text-base font-bold text-gray-800 mt-2">Price: ${gadget.price}</p>
                      <button
                        onClick={() => handleAddToCart(gadget.product_id)}
                        className="mt-2 rounded-full bg-violet-500 text-white px-4 py-2 flex items-center"
                      >
                        Add To Cart <i className="fa-solid fa-cart-shopping ml-2"></i>
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveFromWishlist(gadget.product_id)}
                      className="text-red-500 text-lg hover:text-red-700 transition-colors"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96 text-center">
            <span className='text-center'><i class="fa-solid fa-circle-check fa-2xl pb-6"></i></span>
            <h2 className="text-xl font-semibold mb-4 pb-4  border-b-2">Payment Successful</h2>
            <p className="mb-2">Thanks for purchasing.</p>
            <p className="mb-4">Total: ${totalCost.toFixed(2)}</p>
            <button
              onClick={confirmPurchase}
              className="px-32 py-2 bg-gray-300 text-gray-900 font-bold rounded-full mr-4"
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
