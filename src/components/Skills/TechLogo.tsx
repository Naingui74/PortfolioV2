import React from 'react';
import { motion } from 'framer-motion';

interface TechLogoProps {
  name: string;
  icon: string;
  index: number;
}

const TechLogo = ({ name, icon, index }: TechLogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="flex flex-col items-center gap-2 p-4"
    >
      <div className="w-16 h-16 flex items-center justify-center glass-effect rounded-xl p-3 hover:bg-white/10 transition-colors duration-300">
        <i className={`devicon-${icon} colored text-3xl`}></i>
      </div>
      <span className="text-sm text-gray-300">{name}</span>
    </motion.div>
  );
};

export default TechLogo;