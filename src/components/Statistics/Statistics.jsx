import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Smartphone',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'SmartWatch',
    A: 98,
    B: 130,
    fullMark: 100,
  },
  {
    subject: 'Laptop',
    A: 86,
    B: 130,
    fullMark: 120,
  },
  {
    subject: 'Macbook',
    A: 99,
    B: 80,
    fullMark: 80,
  },
  {
    subject: 'Watches',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Headphone',
    A: 65,
    B: 85,
    fullMark: 130,
  },
];

const Statistics = () => {
  return (
    <div className=" px-6 ">
      <div className='bg-[#9538E2] max-w-[1440px] h-[250px] text-center text-white mx-auto p-10'>
        <h2 className='text-3xl font-bold py-4'>Statistics</h2>
        <p className='mx-auto text-xl font-light w-2/3'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      <h2 className="text-2xl font-bold pl-36 my-6">Statistics</h2>
      <div className='mx-auto'>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
