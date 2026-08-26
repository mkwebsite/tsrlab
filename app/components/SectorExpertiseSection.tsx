'use client';

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const capabilities = [
  { number: '01', title: 'Research & Insights' },
  { number: '02', title: 'Strategy & Transformation' },
  { number: '03', title: 'AI & Digital Products' },
  { number: '04', title: 'Monitoring & Evaluation' },
] as const;

export default function SectorExpertiseSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="sector-expertise"
      className="bg-[#FCFFF7] py-16 md:py-20 lg:py-24"
    >
      <div className="container-custom">
        {/* Top: intro + brochure CTA */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-stretch mb-14 md:mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="lg:col-span-7 xl:col-span-8 space-y-6 md:space-y-7">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-[#FFE900] shrink-0" aria-hidden />
              <p className="text-[11px] md:text-xs font-medium tracking-[0.14em] uppercase text-[#6B7280]">
                Sector-Focused Consulting + Technology
              </p>
            </div>

            <h2 className="heading-section max-w-3xl">
              TSR Lab: International consultants with deep sector expertise
            </h2>

            <div className="h-px w-full bg-[#D1E5E5]" />

            <div className="space-y-5 text-sm md:text-base lg:text-lg text-[#4B5563] leading-relaxed max-w-3xl">
              <p>
                At TSR Lab, we help businesses and organizations across agri-food, smart mobility,
                and international development build the right evidence, make confident strategic
                choices, develop future-ready technology solutions, and measure long-term impact.
              </p>
              <p>
                By combining deep sector expertise with advanced analytics and AI-enabled products,
                our multidisciplinary team delivers strategies and solutions tailored to each
                client&apos;s unique priorities. Across sectors and economies, TSR Lab enables
                frontier transitions.
              </p>
            </div>
          </div>

          {/* Brochure CTA card */}
          <div className="lg:col-span-5 xl:col-span-4 h-full">
            <div className="relative overflow-hidden rounded-2xl bg-[#046865] shadow-xl shadow-[#046865]/20 p-6 md:p-7 h-full min-h-[240px] flex flex-col">
              <div
                className="pointer-events-none absolute -top-16 -left-10 w-48 h-48 rounded-full bg-[#21A0A0]/45 blur-3xl"
                aria-hidden
              />

              <div className="relative z-10 flex gap-4 items-stretch flex-1">
                <div className="flex-1 min-w-0 flex flex-col">
                  <p className="text-[10px] md:text-[11px] font-medium tracking-[0.16em] uppercase text-white/70">
                    TSR Lab — Company Profile
                  </p>
                  <h3 className="mt-4 text-xl md:text-2xl font-bold text-[#FFE900] leading-snug">
                    Want to know more?
                  </h3>
                  <p className="mt-4 text-xs md:text-sm text-white/80 leading-relaxed flex-1">
                    Download our brochure to explore our sector expertise, consulting capabilities,
                    and technology-led approach.
                  </p>
                  <a
                    href="/brochure.pdf"
                    download
                    className="mt-6 inline-flex items-center gap-2.5 text-sm font-semibold text-[#FFE900] hover:text-white transition-colors group"
                  >
                    <span className="underline underline-offset-4 decoration-[#FFE900]/70 group-hover:decoration-white">
                      Download brochure
                    </span>
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#FFE900]/80 text-[#FFE900] group-hover:border-white group-hover:text-white transition-colors">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </span>
                  </a>
                </div>

                {/* Brochure mock cover */}
                <div
                  className="hidden sm:flex shrink-0 w-[88px] md:w-[100px] self-end"
                  aria-hidden
                >
                  <div className="relative w-full aspect-[3/4] bg-white rounded-md shadow-lg rotate-[8deg] origin-bottom-right overflow-hidden border border-white/40">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#FFE900] via-[#21A0A0] to-[#21A0A0]" />
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                      <p className="text-[8px] font-bold tracking-wider text-[#046865]">TSR LAB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: four capability columns */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {capabilities.map((item, index) => (
            <div
              key={item.number}
              className={`py-6 sm:py-8 lg:py-2 flex flex-col justify-between min-h-[120px] md:min-h-[140px] px-0 sm:px-6 lg:px-8 ${
                index === 0 ? 'sm:pl-0 lg:pl-0' : ''
              } ${index === 3 ? 'lg:pr-0' : ''} ${
                index > 0 ? 'border-t sm:border-t-0 border-[#D1E5E5]' : ''
              } ${index % 2 === 1 ? 'sm:border-l border-[#D1E5E5]' : ''} ${
                index >= 2 ? 'sm:border-t lg:border-t-0 border-[#D1E5E5]' : ''
              } ${index > 0 ? 'lg:border-l border-[#D1E5E5]' : ''}`}
            >
              <div className="flex items-start justify-between mb-8 md:mb-10">
                <span className="text-sm text-[#9CA3AF] font-medium tracking-wide">
                  {item.number}
                </span>
                <span className="block w-2 h-2 bg-[#FFE900]" aria-hidden />
              </div>
              <h3 className="heading-card leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
