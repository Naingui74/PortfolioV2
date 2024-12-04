import React from 'react';
import { Code2, Database, Globe, Terminal, Workflow, Cloud } from 'lucide-react';
import SkillCard from './SkillCard';
import TechLogo from './TechLogo';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const SkillsGrid = () => {
  const { t } = useLanguage();

  const skills = [
    {
      title: t('skills.languages'),
      icon: Code2,
      description: t('skills.languages.desc'),
    },
    {
      title: t('skills.web'),
      icon: Globe,
      description: t('skills.web.desc'),
    },
    {
      title: t('skills.systems'),
      icon: Terminal,
      description: t('skills.systems.desc'),
    },
    {
      title: t('skills.database'),
      icon: Database,
      description: t('skills.database.desc'),
    },
    {
      title: t('skills.architecture'),
      icon: Workflow,
      description: t('skills.architecture.desc'),
    },
    {
      title: t('skills.devops'),
      icon: Cloud,
      description: t('skills.devops.desc'),
    },
  ];

  const techLogos = [
    // Languages
    { name: 'C', icon: 'c-plain' },
    { name: 'C++', icon: 'cplusplus-plain' },
    { name: 'JavaScript', icon: 'javascript-plain' },
    { name: 'TypeScript', icon: 'typescript-plain' },
    { name: 'Python', icon: 'python-plain' },
    
    // Frontend
    { name: 'React', icon: 'react-original' },
    { name: 'Vue', icon: 'vuejs-plain' },
    { name: 'TailwindCSS', icon: 'tailwindcss-plain' },
    
    // Backend
    { name: 'Node.js', icon: 'nodejs-plain' },
    { name: 'Express', icon: 'express-original' },
    
    // Databases
    { name: 'MongoDB', icon: 'mongodb-plain' },
    { name: 'PostgreSQL', icon: 'postgresql-plain' },
    
    // DevOps
    { name: 'Docker', icon: 'docker-plain' },
    { name: 'AWS', icon: 'amazonwebservices-original' },
    
    // Tools
    { name: 'Git', icon: 'git-plain' },
    { name: 'VSCode', icon: 'vscode-plain' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="space-y-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} index={index} />
        ))}
      </motion.div>
      
      <div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-8 text-center animated-gradient-text"
        >
          {t('skills.tech')}
        </motion.h3>
        <motion.div 
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techLogos.map((tech, index) => (
            <TechLogo key={index} {...tech} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsGrid;