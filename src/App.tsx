import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { BackgroundPaths } from './components/ui/background-paths';
import ChatWidget from './components/widgets/ChatWidget';
import CookiesPolicy from './components/pages/CookiesPolicy';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import CookieConsent from './components/widgets/CookieConsent';
import { SectionSkeletonLoader } from './components/ui/LoadingSpinner'; // Import the skeleton loader

// Lazy load sections
const AboutSection = lazy(() => import('./components/sections/AboutSection'));
const ServicesSection = lazy(() => import('./components/sections/ServicesSection'));
const TechnologiesSection = lazy(() => import('./components/sections/TechnologiesSection'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));
const TestimonialsSection = lazy(() => import('./components/sections/TestimonialsSection'));


function HomePage() {
  return (
    <>
      <BackgroundPaths title="Practical AI Solutions That Solve Real Business Problems" />
      <Suspense fallback={<SectionSkeletonLoader />}>
        <ServicesSection />
        <TechnologiesSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </Suspense>
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