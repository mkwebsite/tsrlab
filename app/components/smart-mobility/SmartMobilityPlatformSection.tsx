'use client';

import React from 'react';
import Link from 'next/link';

const liveCapabilities = [
  {
    title: 'Market Pulse',
    description: 'A real-time view of the forces shaping commercialization, capital and policy.',
  },
  {
    title: 'Latest Signals',
    description: 'Curated strategic developments across the autonomous mobility value chain.',
  },
  {
    title: 'Weekly Intelligence',
    description: 'Executive-oriented analysis of consequential developments.',
  },
  {
    title: 'Ask the Autonomous Mobility Analyst',
    description:
      'AI-powered analysis of companies, commercialization strategies, regulation and emerging mobility questions.',
  },
] as const;

export default function SmartMobilityPlatformSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#FCFFF7]">
      <div className="container-custom">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <div className="flex items-center gap-3">
            <span className="block w-8 h-[2px] bg-[#FFE900] shrink-0" aria-hidden />
            <p className="text-[11px] md:text-xs font-medium tracking-[0.14em] uppercase text-[#6B7280]">
              Our AI Native Mobility Intelligence Platform
            </p>
          </div>

          <h2 className="heading-section">
            Autonomous mobility intelligence for faster commercial decisions
          </h2>

          <p className="text-base md:text-lg text-[#4B5563] leading-relaxed max-w-3xl">
            Our AI-native Autonomous Mobility Intelligence platform tracks the signals shaping
            autonomous mobility and helps decision-makers understand what happened, why it matters
            and what to watch next.
          </p>
        </div>

        <div className="mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start">
          {/* Left — 04 Capabilities */}
          <div className="lg:col-span-7 space-y-4 md:space-y-5">
            <p className="text-[10px] md:text-[11px] font-medium tracking-[0.14em] uppercase text-[#9CA3AF]">
              04 Capabilities
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {liveCapabilities.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-5 md:p-6 shadow-sm h-full"
                >
                  <p className="text-[10px] md:text-[11px] font-medium tracking-[0.14em] uppercase text-[#9CA3AF]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-lg md:text-xl font-bold text-[#046865] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Live MVP */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#046865] via-[#0A7A76] to-[#21A0A0] p-8 md:p-9 lg:p-10 shadow-xl shadow-[#046865]/20 lg:sticky lg:top-28 h-full min-h-[420px] flex flex-col">
              <div
                className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-[#FFE900]/15 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-[#21A0A0]/40 blur-3xl"
                aria-hidden
              />

              <div className="relative z-10 flex flex-col flex-1">
                <p className="text-[11px] md:text-xs font-medium tracking-[0.16em] uppercase text-white/75">
                  Live MVP
                </p>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white leading-tight">
                  These four capabilities are live on the current MVP
                </h3>
                <p className="mt-4 text-sm md:text-base text-white/82 leading-relaxed flex-1">
                  Explore our autonomous mobility intelligence product to see Market Pulse, Latest
                  Signals, Weekly Intelligence and the Autonomous Mobility Analyst in action.
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href="https://mobility.electroailab.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-[#FFE900] text-[#0B1F33] hover:bg-white transition-colors"
                  >
                    Open platform
                    <span aria-hidden>→</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-transparent text-white border border-white/70 hover:border-white hover:bg-white/10 transition-colors"
                  >
                    Talk to our team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
