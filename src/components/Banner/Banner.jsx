import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative w-full flex flex-col items-center h-[1061px]">
      <div className="pt-20 mb-64 bg-[#9538E2] w-full md:w-3/4 lg:w-11/12  h-[694px] relative z-10 flex flex-col items-center text-center rounded-b-2xl">
        <h1 className="mb-9 text-4xl md:text-5xl font-bold text-white">
          Upgrade Your Tech Accessories with Gadget Heaven
        </h1>
        <p className="mb-8 w-3/4 text-lg md:text-xl text-white">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link to='/dashboard'>
          <button className="btn bg-white text-purple-700 font-bold rounded-full px-8 py-3 hover:bg-purple-200 transition duration-300">
            Shop Now
          </button>
        </Link>
      </div>

      <div className="absolute top-[65%] -translate-y-1/2 z-20 rounded-[30px] p-[20px] bg-white bg-opacity-40 border-2 border-white backdrop-blur-lg shadow-lg">
        <img
          className="w-[1062px] h-[563px] rounded-[20px]"
          src="https://i.ibb.co/YbzwgGG/banner.jpg"
          alt="Gadget Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
