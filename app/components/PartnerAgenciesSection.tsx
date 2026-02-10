'use client';

import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const partners = [
  {
    name: 'Electro IT Solutions',
    logo: '/images/electro-it-logo.png',
    url: 'https://www.electroitsolutions.com/',
  },
  {
    name: 'Pixel Pop',
    logo: '/images/pixelpop.jpeg',
  },
  {
    name: 'Saarthi Associates',
    logo: '/images/pixelpop.jpeg',
  },
];

export default function PartnerAgenciesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gray-50 border-y border-gray-200">
      <div className="container-custom">
        <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-xl md:text-2xl font-bold text-[#1e2345] mb-2">
            Our Partner Agencies
          </h2>
        </div>

        {/* Partners Strip */}
        <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {partners.map((partner, index) => {
            const PartnerContent = (
              <>
                {partner.logo && (
                  <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <span className="text-base md:text-lg lg:text-xl font-semibold text-[#4b5563] hover:text-[#ff3333] transition-colors text-center">
                  {partner.name}
                </span>
              </>
            );

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {partner.url ? (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 cursor-pointer"
                  >
                    {PartnerContent}
                  </a>
                ) : (
                  PartnerContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
