import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Layout/Navigation';
import Section from './components/Layout/Section';
import ScrollProgress from './components/Layout/ScrollProgress';
import HeroText from './components/Home/HeroText';
import AboutContent from './components/About/AboutContent';
import Timeline from './components/About/Timeline';
import SkillsGrid from './components/Skills/SkillsGrid';
import ProjectsGrid from './components/Projects/ProjectsGrid';
import ContactForm from './components/Contact/ContactForm';
import StarParticles from './components/Background/StarParticles';
import AnimatedBackground from './components/Background/AnimatedBackground';
import SplashScreen from './components/Splash/SplashScreen';
import CustomCursor from './components/Cursor/CustomCursor';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';

const AppContent = () => {
  const { t } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);
  
  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <div className="relative min-h-screen text-white">
        <AnimatedBackground />
        <StarParticles />
        <ScrollProgress />
        <Navigation />
        
        <Section id="home" className="flex items-center justify-center">
          <HeroText />
        </Section>

        <Section id="about">
          <h2 className="text-4xl font-bold text-center mb-12 animated-gradient-text">
            {t('about.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AboutContent />
            <Timeline />
          </div>
        </Section>

        <Section id="skills">
          <h2 className="text-4xl font-bold text-center mb-12 animated-gradient-text">
            {t('skills.title')}
          </h2>
          <SkillsGrid />
        </Section>

        <Section id="projects">
          <h2 className="text-4xl font-bold text-center mb-12 animated-gradient-text">
            {t('projects.title')}
          </h2>
          <ProjectsGrid />
        </Section>

        <Section id="contact">
          <h2 className="text-4xl font-bold text-center mb-12 animated-gradient-text">
            {t('contact.title')}
          </h2>
          <ContactForm />
        </Section>
      </div>
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;