import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Naingui74',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:aaron.groux@epitech.eu',
    label: 'Email',
  },
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={href}
          whileHover={{ scale: 1.1 }}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-white hover:text-gray-300 transition-colors relative group"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;