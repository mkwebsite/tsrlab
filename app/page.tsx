import React from 'react';
import PageWrapper from './components/PageWrapper';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SectorExpertiseSection from './components/SectorExpertiseSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import LeveragePointsSection from './components/LeveragePointsSection';
import ExpertAILabSection from './components/ExpertAILabSection';
import StatsSection from './components/StatsSection';
import PartnerAgenciesSection from './components/PartnerAgenciesSection';
import GuidanceSection from './components/GuidanceSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <PageWrapper>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <SectorExpertiseSection />
        <LeveragePointsSection />
        <ExpertAILabSection />
        <PartnerAgenciesSection />
        <SuccessStoriesSection />
        <StatsSection />
        <GuidanceSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </PageWrapper>
  );
}
