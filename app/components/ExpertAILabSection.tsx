'use client';

import React from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const principles = [
  { number: '01', title: 'Rigorous, reliable evidence' },
  { number: '02', title: 'AI-enabled speed' },
  { number: '03', title: 'Client co-creation' },
] as const;

export default function ExpertAILabSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="expert-ai-lab"
      className="bg-[#FCFFF7] py-16 md:py-20 lg:py-24"
    >
      <div className="container-custom">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-stretch mb-14 md:mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col space-y-6 md:space-y-7">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-[#FFE900] shrink-0" aria-hidden />
              <p className="text-[11px] md:text-xs font-medium tracking-[0.14em] uppercase text-[#6B7280]">
                Expert-Led · AI-Enabled · Client-Centred
              </p>
            </div>

            <h2 className="heading-section max-w-3xl">
              Engage with our sector experts and in-house AI Lab
            </h2>

            <div className="h-px w-full bg-[#D1E5E5]" />

            <p className="text-sm md:text-base lg:text-lg text-[#4B5563] leading-relaxed max-w-3xl">
              Our sector specialists work hand-in-hand with Electro AI Lab to design and build
              digital products that solve real client challenges. From research to prototype to
              product, we stay close to the problem — and to you.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#046865] text-white pl-6 pr-2 py-2 font-semibold text-sm hover:bg-[#21A0A0] transition-colors"
              >
                Contact us
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#FFE900] text-[#046865]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.25}
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Innovation unit card — full height of left column */}
          <div className="lg:col-span-5 xl:col-span-4 h-full">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#046865] via-[#0A7A76] to-[#21A0A0] shadow-xl shadow-[#046865]/25 p-6 md:p-7 h-full min-h-[280px] flex flex-col">
              <div
                className="pointer-events-none absolute -top-20 -right-16 w-56 h-56 rounded-full bg-[#21A0A0]/35 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#046865]/80 to-transparent"
                aria-hidden
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[10px] md:text-[11px] font-medium tracking-[0.16em] uppercase text-white/75">
                    TSR Lab — Innovation Unit
                  </p>
                  <p className="inline-flex items-center gap-1.5 text-[10px] md:text-[11px] font-medium tracking-[0.14em] uppercase text-white/80 shrink-0">
                    <span className="block w-1.5 h-1.5 rounded-full bg-[#FFE900]" aria-hidden />
                    Active
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-center py-8 md:py-10">
                  <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm px-5 py-6 md:px-6 md:py-7">
                    <p className="text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase text-[#FFE900] mb-2">
                      Introducing
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      Electro AI Lab
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 mt-auto">
                  <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                    TSR Lab&apos;s in-house AI Lab for sector-specific digital product innovation
                  </p>
                  <p className="text-[10px] md:text-[11px] font-medium tracking-[0.16em] uppercase text-white/55">
                    Research — Prototype — Product
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {principles.map((item, index) => (
            <div
              key={item.number}
              className={`py-6 md:py-8 lg:py-2 flex flex-col justify-between min-h-[120px] md:min-h-[140px] px-0 md:px-6 lg:px-8 ${
                index === 0 ? 'md:pl-0 lg:pl-0' : ''
              } ${index === 2 ? 'md:pr-0 lg:pr-0' : ''} ${
                index > 0 ? 'border-t md:border-t-0 md:border-l border-[#D1E5E5]' : ''
              }`}
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
