import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import TechCategory from './TechCategory';
import { techCategories } from './techData';

const TechShowcase = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold animated-gradient-text">
          {t('techShowcase.title')}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {t('techShowcase.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((category, index) => (
          <TechCategory
            key={category.id}
            {...category}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TechShowcase;