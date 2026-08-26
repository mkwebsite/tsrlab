'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function GuidanceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/project-1.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority={false}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#046865]/95 to-[#21A0A0]/90"></div>
      </div>

      <div className="container-custom relative z-10">
        <div 
          className={`flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Heading */}
          <h2 className="heading-section-light text-center md:text-left flex-1">
            Scale your strategic decisions with TSR Lab
          </h2>

          {/* Button */}
          <div className="flex-shrink-0">
            <Button variant="primary">
              Request Quotes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}