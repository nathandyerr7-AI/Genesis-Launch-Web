import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { BackgroundPaths } from './components/ui/background-paths';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import TechnologiesSection from './components/sections/TechnologiesSection';
import ContactSection from './components/sections/ContactSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ChatWidget from './components/widgets/ChatWidget';
import CookiesPolicy from './components/pages/CookiesPolicy';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import CookieConsent from './components/widgets/CookieConsent';

function HomePage() {
  return (
    <>
      <BackgroundPaths title="Practical AI Solutions That Solve Real Business Problems" />
      <ServicesSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setShowCookieConsent(true);
    }
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
      <div className="min-h-screen flex flex-col relative">
        {/* Glass morphism background overlay */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Main glass layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-background-primary/95 via-background-secondary/90 to-background-tertiary/95 backdrop-blur-sm"></div>
          
          {/* Floating glass orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-t from-secondary-500/6 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Glass texture overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ2xhc3MiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnbGFzcykiLz48L3N2Zz4=')] opacity-50"></div>
          </div>
        </div>
        
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
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