import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Download } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const CVDownload = () => {
  const { t } = useLanguage();
  const [format, setFormat] = useState('pdf');

  const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormat(event.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12 flex flex-col items-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000" />
        <a
          href={`/cv.${format}`}
          download={`cv.${format}`}
          className="relative flex items-center gap-3 px-8 py-4 glass-effect rounded-xl hover:bg-white/5 transition-colors duration-300"
        >
          <Trophy className="w-6 h-6 text-yellow-400" />
          <span className="text-lg font-medium">
            {t('about.download')}
          </span>
          <motion.div
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Download className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
      <div className="mt-4">
        <label htmlFor="format" className="mr-2">{t('about.selectFormat')}</label>
        <select id="format" value={format} onChange={handleFormatChange} className="p-2 rounded-md border">
          <option value="pdf">PDF</option>
          <option value="svg">SVG</option>
        </select>
      </div>
    </motion.div>
  );
};

export default CVDownload;