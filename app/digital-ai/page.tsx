import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DigitalHero from '../components/digital-ai/DigitalHero';
import DigitalIntro from '../components/digital-ai/DigitalIntro';
import DigitalServicesSection from '../components/digital-ai/DigitalServicesSection';
import DigitalProcessSection from '../components/digital-ai/DigitalProcessSection';
import DigitalCTA from '../components/digital-ai/DigitalCTA';

export default function DigitalAIPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <DigitalHero />
      <DigitalIntro />
      <DigitalServicesSection />
      <DigitalProcessSection />
      <DigitalCTA />
      <Footer />
    </main>
  );
}
