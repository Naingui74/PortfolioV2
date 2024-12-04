import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    'hero.title': 'Software Engineering Student at Epitech',
    'hero.discover': 'Discover More',
    'hero.contact': 'Get in Touch',
    
    'about.title': 'About Me',
    'about.intro': 'I\'m Aaron Groux, a passionate second-year student at Epitech, dedicated to mastering the art of software development and creating innovative solutions that push the boundaries of technology.',
    'about.journey': 'My journey in tech is driven by curiosity and a desire to build impactful applications that solve real-world problems. With a strong foundation in both low-level and high-level programming, I strive to create efficient and elegant solutions.',
    'about.current': 'Currently pursuing my Bachelor\'s degree in Computer Science at Epitech, I\'m constantly expanding my knowledge and skills through hands-on projects and collaborative development.',
    'about.download': 'Download My CV',
    'about.selectFormat': 'Select Format',
    
    'skills.title': 'Skills',
    'skills.tech': 'Technologies I Work With',
    'skills.languages': 'Languages',
    'skills.languages.desc': 'C, C++, JavaScript, TypeScript, Python, and Shell scripting for versatile development.',
    'skills.web': 'Web Development',
    'skills.web.desc': 'React, Node.js, Express, and modern web technologies for full-stack applications.',
    'skills.systems': 'Systems Programming',
    'skills.systems.desc': 'Unix systems, kernel programming, and low-level optimization.',
    'skills.database': 'Database & Backend',
    'skills.database.desc': 'MongoDB, SQL, RESTful APIs, and server architecture.',
    'skills.architecture': 'Software Architecture',
    'skills.architecture.desc': 'Design patterns, system architecture, and scalable solutions.',
    'skills.devops': 'DevOps & Cloud',
    'skills.devops.desc': 'CI/CD, Docker, and cloud deployment strategies.',
    
    'projects.title': 'Projects',
    'projects.babyHealth': 'A comprehensive mobile application designed to help parents track and monitor their baby\'s health, including growth, vaccinations, and developmental milestones.',
    'projects.42sh': 'A Unix shell implementation with advanced features and command interpretation capabilities.',
    'projects.n4s': 'AI-powered virtual miniature car navigation system using advanced algorithms for autonomous driving.',
    'projects.cv': 'Web application for creating professional CVs with customizable templates and export options.',
    'projects.mev': 'Advanced trading bot for the Solana blockchain, optimizing for Maximum Extractable Value opportunities.',
    'projects.artisan': 'Website platform for showcasing artisans and healthcare professionals with custom portfolios.',
    
    'contact.title': 'Get in Touch',
    'contact.name': 'Name',
    'contact.name.placeholder': 'Enter your name',
    'contact.email': 'Email',
    'contact.email.placeholder': 'Enter your email',
    'contact.message': 'Message',
    'contact.message.placeholder': 'Write your message here...',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    'hero.title': 'Étudiant en Ingénierie Logicielle à Epitech',
    'hero.discover': 'En Savoir Plus',
    'hero.contact': 'Me Contacter',
    
    'about.title': 'À Propos de Moi',
    'about.intro': 'Je suis Aaron Groux, un étudiant passionné en deuxième année à Epitech, dévoué à maîtriser l\'art du développement logiciel et à créer des solutions innovantes qui repoussent les limites de la technologie.',
    'about.journey': 'Mon parcours dans la technologie est motivé par la curiosité et le désir de créer des applications impactantes qui résolvent des problèmes concrets. Avec une solide base en programmation bas niveau et haut niveau, je m\'efforce de créer des solutions efficaces et élégantes.',
    'about.current': 'Actuellement en formation pour mon Bachelor en Informatique à Epitech, j\'enrichis constamment mes connaissances et compétences à travers des projets pratiques et le développement collaboratif.',
    'about.download': 'Télécharger Mon CV',
    'about.selectFormat': 'Sélectionner le Format',
    
    'skills.title': 'Compétences',
    'skills.tech': 'Technologies Utilisées',
    'skills.languages': 'Langages',
    'skills.languages.desc': 'C, C++, JavaScript, TypeScript, Python et Shell scripting pour un développement polyvalent.',
    'skills.web': 'Développement Web',
    'skills.web.desc': 'React, Node.js, Express et technologies web modernes pour des applications full-stack.',
    'skills.systems': 'Programmation Système',
    'skills.systems.desc': 'Systèmes Unix, programmation noyau et optimisation bas niveau.',
    'skills.database': 'Base de Données & Backend',
    'skills.database.desc': 'MongoDB, SQL, APIs RESTful et architecture serveur.',
    'skills.architecture': 'Architecture Logicielle',
    'skills.architecture.desc': 'Patterns de conception, architecture système et solutions évolutives.',
    'skills.devops': 'DevOps & Cloud',
    'skills.devops.desc': 'CI/CD, Docker et stratégies de déploiement cloud.',
    
    'projects.title': 'Projets',
    'projects.babyHealth': 'Une application mobile complète conçue pour aider les parents à suivre et surveiller la santé de leur bébé, y compris la croissance, les vaccinations et les étapes du développement.',
    'projects.42sh': 'Une implémentation de shell Unix avec des fonctionnalités avancées et des capacités d\'interprétation de commandes.',
    'projects.n4s': 'Système de navigation de voiture miniature virtuelle alimenté par l\'IA utilisant des algorithmes avancés pour la conduite autonome.',
    'projects.cv': 'Application web pour créer des CV professionnels avec des modèles personnalisables et des options d\'exportation.',
    'projects.mev': 'Bot de trading avancé pour la blockchain Solana, optimisant les opportunités de Maximum Extractable Value.',
    'projects.artisan': 'Plateforme web pour mettre en valeur les artisans et les professionnels de santé avec des portfolios personnalisés.',
    
    'contact.title': 'Me Contacter',
    'contact.name': 'Nom',
    'contact.name.placeholder': 'Entrez votre nom',
    'contact.email': 'Email',
    'contact.email.placeholder': 'Entrez votre email',
    'contact.message': 'Message',
    'contact.message.placeholder': 'Écrivez votre message ici...',
    'contact.send': 'Envoyer le Message',
    'contact.sending': 'Envoi en cours...',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};