import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import NavLink from '../NavLink';
import LanguageSwitcher from '../LanguageSwitcher';
import MobileMenu from './MobileMenu';
import SocialLinks from './SocialLinks';

const Navigation = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/10 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white font-bold text-xl"
          >
            AG
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
          
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <div className="hidden md:block">
              <SocialLinks />
            </div>
            <MobileMenu
              isOpen={isMobileMenuOpen}
              setIsOpen={setIsMobileMenuOpen}
              navItems={navItems}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;