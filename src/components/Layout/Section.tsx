import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className = '' }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen py-24 lg:py-32 relative ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {children}
      </motion.div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
    </section>
  );
};

export default Section;