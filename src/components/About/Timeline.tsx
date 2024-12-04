import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2022',
    title: 'Epitech',
    description: 'Started studying at Epitech - European Institute of Technology',
  },
  {
    year: '2023',
    title: 'Second Year',
    description: 'Advanced programming and project development',
  },
];

const Timeline = () => {
  return (
    <div className="relative container mx-auto px-6 flex flex-col space-y-8">
      <div className="absolute z-0 w-2 h-full bg-white/20 left-17 md:mx-auto md:left-0 md:right-0"></div>
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative z-10"
        >
          <div className="timeline-container">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl">
              <span className="font-bold text-xl text-white">{item.year}</span>
              <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;