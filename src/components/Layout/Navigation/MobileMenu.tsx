import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: Array<{ href: string; label: string }>;
}

const MobileMenu = ({ isOpen, setIsOpen, navItems }: MobileMenuProps) => {
  const handleNavigation = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:text-gray-300 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    whileHover={{ x: 10 }}
                    className="py-2"
                  >
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="text-white hover:text-gray-300 transition-colors w-full text-left"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;