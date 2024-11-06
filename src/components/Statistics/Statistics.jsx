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
    B: 100,
    fullMark: 110,
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
    <div className=" p-6">
      <div>
        <h2>Statistics</h2>
      </div>
      <h2 className="text-2xl font-bold pl-36 mb-6">Statistics</h2>
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
