import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { LampDemo } from './components/ui/lamp';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import TechnologiesSection from './components/sections/TechnologiesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ContactSection from './components/sections/ContactSection';
import NewsletterSection from './components/sections/NewsletterSection';
import ChatWidget from './components/widgets/ChatWidget';

function App() {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    // Add a slight delay before showing chat widget to improve perceived performance
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <LampDemo />
        <ServicesSection />
        <TechnologiesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      {showWidget && <ChatWidget />}
    </div>
  );
}

export default App;