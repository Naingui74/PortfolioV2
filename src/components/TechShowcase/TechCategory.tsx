import React from 'react';
import { motion } from 'framer-motion';
import TechItem from './TechItem';

interface TechCategoryProps {
  id: string;
  title: string;
  description: string;
  technologies: Array<{
    name: string;
    icon: string;
    color: string;
  }>;
  index: number;
}

const TechCategory = ({ title, description, technologies, index }: TechCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-effect rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 mb-6 text-sm">{description}</p>
      
      <div className="grid grid-cols-3 gap-4">
        {technologies.map((tech, techIndex) => (
          <TechItem
            key={tech.name}
            {...tech}
            index={techIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TechCategory;