'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Button from './Button';
import DotIcon from './icons/dot.svg';

const slides = [
  {
    badge: 'TSR Lab',
    title: 'Reliable. Valid.',
    highlight: 'AI Speed Research',
    titleEnd: '',
    description: 'Insight That Keeps Your Organization Ahead',
    image: '/images/2151003701.jpg',
    imageAlt: 'Red circuit board with binary code and glowing connections',
  },
  {
    badge: 'TSR Lab',
    title: 'Intelligence Meets',
    highlight: 'Clarity',
    titleEnd: 'at TSR Lab',
    description: 'Explore our range of market research, advisory, and digital solution services',
    image: '/images/about/business-team.jpg',
    imageAlt: 'Business team collaboration',
  },
  {
    badge: 'TSR Lab',
    title: 'Digital Transformation &',
    highlight: 'AI Workflows',
    titleEnd: '',
    description: 'Turning Insight into Execution',
    image: '/images/DigitalTransformation.jpg',
    imageAlt: 'Business team collaboration',
  },
]; 
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="relative pt-40 md:pt-48 lg:pt-56 pb-20 md:pb-40 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/27472514_1334.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85" />
      </div>

      {/* Gradient Blurs */}
      <div className="absolute top-20 left-4 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#ff3333]/10 to-[#fed7aa]/20 rounded-full blur-[64px] z-[1]" />
      <div className="absolute top-40 right-4 md:right-24 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#dbeafe]/40 to-[#f3e8ff]/30 rounded-full blur-[64px] z-[1]" />
      <div className="absolute bottom-32 left-20 md:left-96 w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-[#ffedd5]/30 to-[#fee2e2]/20 rounded-full blur-[64px] z-[1]" />
      <div className="absolute top-1/2 right-10 md:right-1/4 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#f3e8ff]/20 to-[#fce7f3]/30 rounded-full blur-[40px] z-[1]" />

      <div className="container-custom relative z-10">
        {/* Slider Container */}
        <div className="relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center transition-all duration-700 ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full absolute inset-0 pointer-events-none' 
                    : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none'
              }`}
            >
              {/* Left Content */}
              <div className="flex flex-col justify-center">
                <div className="space-y-6 md:space-y-8 lg:space-y-10">
                  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-[#ffedd5]/50 border border-[#fed7aa]/50 w-fit">
                    <DotIcon className="w-2 h-2" style={{ color: '#ff3333' }} />
                    <span className="text-xs font-bold tracking-wider text-[#ff3333] uppercase">
                      {slide.badge}
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold leading-tight text-[#1e2345]">
                    {slide.title}{' '}
                    <span className="text-[#ff3333]">{slide.highlight}</span>{' '}
                    {slide.titleEnd}
                  </h1>

                  <p className="text-base md:text-lg lg:text-xl text-[#4b5563] leading-relaxed max-w-lg">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-4">
                    <a href="/contact">
                      <Button variant="primary">Get in Touch</Button>
                    </a>
                    <a href="/research-services" className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 bg-transparent text-[#1f2937] border-2 border-[#1f2937] hover:text-[#ff3333] hover:border-[#ff3333] hover:scale-105 w-full sm:w-auto">
                      Explore Services
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex items-center justify-center mt-8 lg:mt-0">
                <div className="relative w-full aspect-[620/511]">
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt || slide.title}
                    fill
                    className="object-cover rounded-2xl md:rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12 md:mt-16">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-12 h-3 bg-[#ff3333]' 
                  : 'w-3 h-3 bg-[#d1d5db] hover:bg-[#9ca3af]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}