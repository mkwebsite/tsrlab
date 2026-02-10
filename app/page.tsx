import React from 'react';
import PageWrapper from './components/PageWrapper';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import PartnerAgenciesSection from './components/PartnerAgenciesSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
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
        <FeaturesSection />
        <AboutSection />
        <PartnerAgenciesSection />
        <StatsSection />
       
        <ServicesSection />
        <ProjectsSection />
        <GuidanceSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </PageWrapper>
  );
}