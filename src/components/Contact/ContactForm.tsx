import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClasses = "w-full px-4 py-3 lg:py-4 glass-effect rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white lg:text-lg";
  const labelClasses = "block text-sm lg:text-base font-medium text-gray-300 mb-2";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6 lg:space-y-8"
    >
      <div>
        <label htmlFor="name" className={labelClasses}>
          {t('contact.name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder={t('contact.name.placeholder')}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          {t('contact.email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder={t('contact.email.placeholder')}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          {t('contact.message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 lg:py-4 glass-effect rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white lg:text-lg resize-none"
          placeholder={t('contact.message.placeholder')}
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className={`
          w-full py-4 lg:py-5 px-6 
          bg-gradient-to-r from-blue-500 to-purple-600 
          text-white rounded-full font-medium 
          flex items-center justify-center space-x-2 
          hover:from-blue-600 hover:to-purple-700 
          transition-all duration-200 text-lg
          disabled:opacity-50 disabled:cursor-not-allowed
          group relative overflow-hidden
        `}
      >
        <span className="relative z-10 flex items-center gap-2">
          <span>{isSubmitting ? t('contact.sending') : t('contact.send')}</span>
          <Send className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;