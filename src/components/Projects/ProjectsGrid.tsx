import React from 'react';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const ProjectsGrid = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: '42sh',
      description: t('projects.42sh'),
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1200',
      technologies: ['C', 'Unix', 'Shell Scripting', 'Parsing', 'Lexer Parser'],
      githubUrl: 'https://github.com/Naingui74/42sh',
    },
    {
      title: 'N4S',
      description: t('projects.n4s'),
      image: '/iavoiture.jpeg',
      technologies: ['AI', 'C', 'Autonomous Systems'],
      githubUrl: 'https://github.com/Naingui74/N4S-IA',
    },
    {
      title: 'CV Generator',
      description: t('projects.cv'),
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Naingui74/Cv-Generator',
    },
    {
      title: 'Baby Health Assistant',
      description: t('projects.babyHealth'),
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1200',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Express.js'],
    },
    {
      title: 'MEV Bot',
      description: t('projects.mev'),
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200',
      technologies: ['Solana', 'Blockchain', 'Trading', 'QuickNode API', 'telegram client'],
      private: true
    },
    {
      title: 'Artisan Showcase',
      description: t('projects.artisan'),
      image: '/vitrine.jpg',
      technologies: ['Web Development', 'UI/UX', 'CMS', 'SEO', 'Planity API'],
      private: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </motion.div>
  );
};

export default ProjectsGrid;