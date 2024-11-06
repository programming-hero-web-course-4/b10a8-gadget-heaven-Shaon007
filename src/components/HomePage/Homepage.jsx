import React from 'react';
import Banner from '../Banner/Banner';
import Gadgets from '../Gadgets/Gadgets';

const Homepage = () => {
  return (
    <div className="flex flex-col items-center mb-12 bg-gray-100 max-w-[1440px] mx-auto">
      {/* Banner */}
      <Banner />

      {/* Heading */}
      <div className="mt-12">
        <h2 className="text-4xl">Explore Cutting-Edge Gadgets</h2>
      </div>
      {/* Gadgets */}
      <div className='w-10/12 '><Gadgets /></div>

    </div>
  );
};

export default Homepage;
