import React from 'react';
import { motion } from 'framer-motion';

interface LanguageFlagProps {
  code: string;
  isActive: boolean;
  onClick: () => void;
  colors: string;
}

const LanguageFlag = ({ code, isActive, onClick, colors }: LanguageFlagProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative w-8 h-8 rounded-full overflow-hidden transition-all duration-300 ${
        isActive ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-black' : ''
      }`}
    >
      <div className={`absolute inset-0 ${colors}`}>
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
          {code.toUpperCase()}
        </span>
      </div>
    </motion.button>
  );
};

export default LanguageFlag;