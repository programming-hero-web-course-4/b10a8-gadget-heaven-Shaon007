import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList } from '../../../dist/assets/utility/addToDb';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const storedList = getStoredCartList();
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => {
        const filteredGadgets = data.filter(item => storedList.includes(item.product_id));
        setGadgets(filteredGadgets);

      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div>
      {/* Header Section */}
      <div className="bg-purple-500 text-center py-10">
        <h2 className="text-white text-3xl font-bold mb-2">Dashboard</h2>
        <p className="text-white mb-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to
          the coolest accessories, we have it all!
        </p>
      </div>

      {/* Tabs and Content Section */}
      <div className="bg-gray-100 pt-4 pb-10">
        <Tabs>
          {/* Tab Navigation */}
          <TabList className="flex justify-center gap-4 mb-8">
            <Tab className="px-4 py-2 font-semibold rounded-full cursor-pointer bg-purple-500 text-white">
              Cart
            </Tab>
            <Tab className="px-4 py-2 font-semibold rounded-full cursor-pointer text-purple-500 border border-purple-500">
              Wishlist
            </Tab>
          </TabList>

          {/* Cart Tab Panel */}
          <TabPanel>
            <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Cart</h3>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold">Total cost: 0.00</span>
                  <button className="px-4 py-1 bg-transparent text-purple-500 border border-purple-500 rounded-full">
                    Sort by Price
                  </button>
                  <button className="px-4 py-1 bg-purple-500 text-white rounded-full">Purchase</button>
                </div>
              </div>

              {/* Cart Items */}
              <div className="space-y-4">
                <div className="p-4 space-y-4">
                  {gadgets.map(gadget => (
                    <div
                      key={gadget.product_id}
                      className="flex items-center justify-between bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      {/* Image Placeholder */}
                      <div className="w-20 h-20 bg-gray-300 rounded-md overflow-hidden">
                        <img
                          src={gadget.product_image}
                          alt={gadget.product_title}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 ml-4">
                        <h2 className="text-lg font-semibold text-gray-800">{gadget.product_title}</h2>
                        <p className="text-sm text-gray-500">{gadget.description}</p>
                        <p className="text-base font-bold text-gray-800 mt-2">Price: ${gadget.price}</p>
                      </div>

                      {/* Close Button */}
                      <button className="text-red-500 text-lg hover:text-red-700 transition-colors">
                        &times;
                      </button>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </TabPanel>

          {/* Wishlist  */}
          <TabPanel>
            <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Wishlist</h3>
              <p>wishlist items</p>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
