const Banner = () => {
  return (
    <div>
      <div className='flex flex-col items-center h-[1061px]'>
      <div className="pt-20 mb-64 bg-[#9538E2] rounded-2xl w-full md:w-3/4 lg:w-11/12 mt-2 relative z-10 h-[694px]">
        <div className="bg-opacity-60 rounded-2xl"></div>
        <div className="text-neutral-content text-center">
          <div className="w-3/4 mx-auto">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold text-white">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="mb-5 text-lg md:text-xl text-white">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn bg-white text-purple-700 font-bold rounded-full px-8 py-3 hover:bg-purple-200 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-[65%] transform -translate-y-1/2 z-20 rounded-[30px] p-[20px] bg-white bg-opacity-40 border-2 border-white backdrop-blur-lg shadow-lg">
        <img
          className="w-[1062px] h-[563px] rounded-[20px]"
          src="https://i.ibb.co/YbzwgGG/banner.jpg"
          alt="Gadget Banner"
        />
      </div>

    </div>
    </div>
  );
};

export default Banner;