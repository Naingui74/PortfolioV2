import React from 'react';
import { motion } from 'framer-motion';
import CVDownload from './CVDownload';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutContent = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      <motion.p variants={itemVariants} className="text-lg text-gray-300">
        {t('about.intro')}
      </motion.p>
      <motion.p variants={itemVariants} className="text-lg text-gray-300">
        {t('about.journey')}
      </motion.p>
      <motion.p variants={itemVariants} className="text-lg text-gray-300">
        {t('about.current')}
      </motion.p>
      <motion.div variants={itemVariants}>
        <CVDownload />
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;