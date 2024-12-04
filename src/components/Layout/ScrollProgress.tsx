import React from 'react';
import { motion, useSpring } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const ScrollProgress = () => {
  const progress = useScrollProgress();
  const scaleX = useSpring(progress / 100, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;