import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import SkillIcon from './SkillIcon';

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  index: number;
}

const SkillCard = ({ title, icon: Icon, description, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="glass-effect rounded-xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-center mb-4 lg:mb-6">
        <SkillIcon Icon={Icon} />
        <h3 className="ml-4 text-xl lg:text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-300 lg:text-lg">{description}</p>
    </motion.div>
  );
};

export default SkillCard;