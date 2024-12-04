import React from 'react';
import { motion } from 'framer-motion';

interface TechItemProps {
  name: string;
  icon: string;
  color: string;
  index: number;
}

const TechItem = ({ name, icon, color, index }: TechItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-2"
    >
      <div 
        className={`w-12 h-12 rounded-lg flex items-center justify-center ${color} glass-effect`}
      >
        <i className={`devicon-${icon} text-xl`}></i>
      </div>
      <span className="text-xs text-gray-300 text-center">{name}</span>
    </motion.div>
  );
};

export default TechItem;