import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import AboutSection from './components/AboutSection';
import EpisodesSection from './components/EpisodesSection';
import GallerySection from './components/GallerySection';
import PartnerSection from './components/PartnerSection';
import GuestSection from './components/GuestSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <StatsStrip />
        <AboutSection />
        <EpisodesSection />
        <GallerySection />
        <PartnerSection onShowToast={showToast} />
        <GuestSection onShowToast={showToast} />
        <FaqSection />
      </main>
      <Footer />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
