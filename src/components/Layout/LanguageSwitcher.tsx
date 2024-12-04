import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageFlag from './LanguageFlag';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const flags = [
    {
      code: 'en',
      colors: 'bg-gradient-to-br from-blue-900 to-red-600',
    },
    {
      code: 'fr',
      colors: 'bg-gradient-to-br from-blue-600 via-white to-red-600',
    },
  ];

  return (
    <div className="flex space-x-2">
      {flags.map((flag) => (
        <LanguageFlag
          key={flag.code}
          code={flag.code}
          isActive={language === flag.code}
          onClick={() => setLanguage(flag.code as 'en' | 'fr')}
          colors={flag.colors}
        />
      ))}
    </div>
  );
};

export default LanguageSwitcher;