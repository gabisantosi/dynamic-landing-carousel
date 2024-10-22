import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NossosServicos from '../components/NossosServicos';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import ClientLogos from '../components/ClientLogos';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main>
        <Hero />
        <NossosServicos />
        <Features />
        <ClientLogos />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;