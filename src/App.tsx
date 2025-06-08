import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { BackgroundPaths } from './components/ui/background-paths';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import TechnologiesSection from './components/sections/TechnologiesSection';
import ContactSection from './components/sections/ContactSection';
import ChatWidget from './components/widgets/ChatWidget';
import CookiesPolicy from './components/pages/CookiesPolicy';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import CookieConsent from './components/widgets/CookieConsent';
import PortfolioSection from './components/sections/PortfolioSection';

function HomePage() {
  return (
    <>
      <BackgroundPaths title="Practical AI Solutions That Solve Real Business Problems" />
      <ServicesSection />
      <TechnologiesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

function App() {
  const [showWidget, setShowWidget] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 3000);
    
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setShowCookieConsent(true);
    }
    
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieConsent(false);
  };

  const handleCloseCookieConsent = () => {
    setShowCookieConsent(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        {showWidget && <ChatWidget />}
        {showCookieConsent && (
          <CookieConsent
            onAccept={handleAcceptCookies}
            onClose={handleCloseCookieConsent}
          />
        )}
      </div>
    </Router>
  );
}

export default App;