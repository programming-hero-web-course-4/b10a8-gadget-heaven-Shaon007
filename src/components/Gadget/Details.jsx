import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { addToStoredCartList, addToStoredWishList, getStoredCartList, getStoredWishList } from '../../assets/utility/addToDb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleCart = (id) => {
    addToStoredCartList(id);
    setIsInCart(true);
    toast.success("Product added to cart!");
  };

  const handleWishlist = (id) => {
    addToStoredWishList(id);
    setIsInWishlist(true);
    toast.success("Product added to wishlist!");
  };

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const foundProduct = data.find(item => item.product_id.toString() === product_id);
        if (foundProduct) {
          setProduct(foundProduct);
          setRating(foundProduct.rating || 0);
        }
      });

    const storedCartList = getStoredCartList();
    const storedWishList = getStoredWishList();
    setIsInCart(storedCartList.includes(product_id));
    setIsInWishlist(storedWishList.includes(product_id));
  }, [product_id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="relative w-full flex flex-col items-center h-[880px] bg-gray-200">
      <ToastContainer />
      <div className="pt-5 mb-64 bg-[#9538E2] w-full mt-2 h-[463px] relative z-10 flex flex-col items-center text-center">
        <h1 className="mb-5 text-2xl md:text-5xl font-bold text-white">Product Details</h1>
        <p className="mb-5 text-lg md:text-xl text-white w-3/4">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="flex gap-8 p-8 bg-white absolute top-[200px] z-10 w-[1170px] h-[480px] rounded-2xl">
        <div>
          <img className="w-[424px] h-[420px] object-contain rounded-lg" src={product.product_image} alt="Product" />
        </div>

        <div className="flex flex-col space-y-1">
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.product_title}</h2>
            <h3 className="text-xl text-gray-700 mb-2">Price: ${product.price}</h3>
            <button className="border-2 border-green-700 rounded-full bg-green-100 text-green-700 px-6 py-1 mb-2">In Stock</button>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <h4 className="text-lg font-semibold mb-1">Specifications:</h4>
            <ol className="list-decimal pl-5 space-y-1 text-gray-700">
              {product.specification.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="flex items-center">
            <h2 className="text-lg font-semibold mr-2">Rating:</h2>
            <ReactStars
              count={5}
              value={rating}
              size={24}
              isHalf={true}
              onChange={ratingChanged}
              activeColor="#ffd700"
            />
            <button className="ml-2 text-gray-700 font-semibold p-1 px-2 bg-gray-300 rounded-2xl">{rating}</button>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => handleCart(product.product_id)}
              disabled={isInCart}
              className={`rounded-full px-4 py-2 flex items-center ${isInCart ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-violet-500 text-white'
                }`}
            >
              {isInCart ? 'In Cart' : 'Add To Cart'} <i className="fa-solid fa-cart-shopping ml-2"></i>
            </button>
            <button
              onClick={() => handleWishlist(product.product_id)}
              disabled={isInWishlist}
              className={`bg-white border rounded-full border-gray-400 text-gray-700 p-2 h-10 w-10 flex items-center justify-center ${isInWishlist ? 'cursor-not-allowed' : ''
                }`}
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
