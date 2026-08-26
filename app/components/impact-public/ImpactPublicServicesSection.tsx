'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type ServiceItem = {
  abbr: string;
  title: string;
  description: string;
  tags: string;
  color: string;
};

type Capability = {
  id: string;
  number: string;
  title: string;
  cardColor: string;
  subtitle: string;
  heading: string;
  description: string;
  ctaLabel: string;
  services: ServiceItem[];
};

const capabilities: Capability[] = [
  {
    id: 'frugal-ai',
    number: '01',
    title: 'Frugal AI for Development',
    cardColor: '#FFE900',
    subtitle: 'FRUGAL AI FOR DEVELOPMENT',
    heading:
      'Accessible digital and AI-enabled solutions that respond to real development challenges.',
    description:
      'We design accessible digital and AI-enabled solutions that respond to real development challenges. Our approach prioritizes affordability, user centricity and measurable public value.',
    ctaLabel: 'Explore frugal AI',
    services: [
      {
        abbr: 'FA',
        title: 'Frugal AI',
        description:
          'Build cost-effective AI capabilities tailored to development and public-sector constraints.',
        tags: 'AFFORDABLE · PRACTICAL · SCALABLE',
        color: '#FFF9CC',
      },
      {
        abbr: 'DP',
        title: 'Digital Public Solutions',
        description:
          'Design digital tools that strengthen institutional delivery and citizen-facing services.',
        tags: 'PUBLIC SERVICES · DELIVERY · ACCESS',
        color: '#D0EEEE',
      },
      {
        abbr: 'DS',
        title: 'Decision-Support Tools',
        description:
          'Create tools that help institutions convert evidence into clearer operational decisions.',
        tags: 'DECISIONS · EVIDENCE · OPERATIONS',
        color: '#E8EEF2',
      },
      {
        abbr: 'IT',
        title: 'Inclusive Technology',
        description:
          'Prioritise solutions that work for underserved users and low-resource environments.',
        tags: 'INCLUSIVE · ACCESSIBLE · EQUITABLE',
        color: '#FDE8E0',
      },
      {
        abbr: 'HD',
        title: 'Human-Centred Design',
        description:
          'Ground product and service design in real user needs, field evidence and usability.',
        tags: 'USERS · FIELD EVIDENCE · USABILITY',
        color: '#B2DFDB',
      },
    ],
  },
  {
    id: 'policy-research',
    number: '02',
    title: 'Public Policy and Innovation Research',
    cardColor: '#D0EEEE',
    subtitle: 'PUBLIC POLICY AND INNOVATION RESEARCH',
    heading:
      'Applied research that helps institutions understand emerging technologies, evaluate policy choices and develop pathways for responsible innovation.',
    description:
      'We produce applied research that helps institutions understand emerging technologies, evaluate policy choices and develop pathways for responsible innovation.',
    ctaLabel: 'Explore policy research',
    services: [
      {
        abbr: 'PR',
        title: 'Policy Research',
        description:
          'Generate evidence that clarifies policy options, trade-offs and institutional implications.',
        tags: 'EVIDENCE · OPTIONS · TRADE-OFFS',
        color: '#FFF9CC',
      },
      {
        abbr: 'IS',
        title: 'Innovation Systems',
        description:
          'Map how institutions, markets and capabilities interact to enable responsible innovation.',
        tags: 'SYSTEMS · CAPABILITIES · INNOVATION',
        color: '#D0EEEE',
      },
      {
        abbr: 'RA',
        title: 'Regulatory Analysis',
        description:
          'Assess regulatory frameworks shaping technology adoption and public-sector reform.',
        tags: 'REGULATION · COMPLIANCE · REFORM',
        color: '#E8EEF2',
      },
      {
        abbr: 'WP',
        title: 'Whitepapers',
        description:
          'Publish authoritative briefs that translate complex evidence into decision-ready insight.',
        tags: 'BRIEFS · INSIGHT · COMMUNICATION',
        color: '#FDE8E0',
      },
      {
        abbr: 'RM',
        title: 'Policy Roadmaps',
        description:
          'Develop sequenced pathways for responsible innovation and institutional change.',
        tags: 'ROADMAPS · SEQUENCING · CHANGE',
        color: '#B2DFDB',
      },
    ],
  },
  {
    id: 'scheme-eval',
    number: '03',
    title: 'Policy & Scheme Analysis and Evaluation',
    cardColor: '#E0F2F1',
    subtitle: 'POLICY & SCHEME ANALYSIS AND EVALUATION',
    heading:
      'Assess public policies and government schemes from design through implementation and outcomes.',
    description:
      'We assess public policies and government schemes from design through implementation and outcomes. Combining institutional analysis, programme data and field evidence, we identify delivery gaps, evaluate effectiveness and generate actionable recommendations for policy improvement.',
    ctaLabel: 'Explore evaluation',
    services: [
      {
        abbr: 'PE',
        title: 'Policy Evaluation',
        description:
          'Evaluate whether policy design and delivery are producing intended public outcomes.',
        tags: 'DESIGN · DELIVERY · OUTCOMES',
        color: '#FFF9CC',
      },
      {
        abbr: 'SA',
        title: 'Scheme Assessment',
        description:
          'Assess government schemes for relevance, reach, effectiveness and improvement levers.',
        tags: 'REACH · EFFECTIVENESS · IMPROVEMENT',
        color: '#D0EEEE',
      },
      {
        abbr: 'IA',
        title: 'Implementation Analysis',
        description:
          'Identify delivery gaps across institutions, processes and frontline operating realities.',
        tags: 'GAPS · PROCESSES · FRONTLINE',
        color: '#E8EEF2',
      },
      {
        abbr: 'OE',
        title: 'Process and Outcome Evaluation',
        description:
          'Combine process and outcome evidence to explain what works, where and why.',
        tags: 'PROCESS · OUTCOMES · LEARNING',
        color: '#FDE8E0',
      },
      {
        abbr: 'ML',
        title: 'Monitoring and Learning',
        description:
          'Convert evaluation findings into adaptive management and practical recommendations.',
        tags: 'MONITORING · ADAPTATION · ACTION',
        color: '#B2DFDB',
      },
    ],
  },
  {
    id: 'platforms',
    number: '04',
    title: 'Public Intelligence Platforms',
    cardColor: '#B2DFDB',
    subtitle: 'PUBLIC INTELLIGENCE PLATFORMS',
    heading:
      'Interactive platforms that organize fragmented public information and make government policies, programmes and initiatives easier to track, compare and understand.',
    description:
      'We build interactive platforms that organize fragmented public information and make government policies, programmes and initiatives easier to track, compare and understand.',
    ctaLabel: 'Explore platforms',
    services: [
      {
        abbr: 'PI',
        title: 'Policy Intelligence',
        description:
          'Structure policy information so institutions can compare commitments and responses.',
        tags: 'POLICY · COMPARISON · INSIGHT',
        color: '#FFF9CC',
      },
      {
        abbr: 'GT',
        title: 'Government Initiative Tracking',
        description:
          'Track programmes and initiatives across agencies to surface progress and gaps.',
        tags: 'TRACKING · PROGRAMMES · PROGRESS',
        color: '#D0EEEE',
      },
      {
        abbr: 'DP',
        title: 'Data Platforms',
        description:
          'Organize fragmented public data into usable platforms for analysis and coordination.',
        tags: 'DATA · STRUCTURE · USABILITY',
        color: '#E8EEF2',
      },
      {
        abbr: 'ID',
        title: 'Interactive Dashboards',
        description:
          'Visualise policy and programme intelligence for faster institutional decision-making.',
        tags: 'DASHBOARDS · VISUALISATION · DECISIONS',
        color: '#FDE8E0',
      },
      {
        abbr: 'PA',
        title: 'Public-Sector Analytics',
        description:
          'Apply analytics that strengthen accountability, targeting and operational clarity.',
        tags: 'ANALYTICS · ACCOUNTABILITY · CLARITY',
        color: '#B2DFDB',
      },
    ],
  },
];

function ChevronDownIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function ImpactPublicServicesSection() {
  const [activeId, setActiveId] = useState(capabilities[0].id);
  const active = capabilities.find((c) => c.id === activeId) ?? capabilities[0];

  return (
    <section className="bg-white">
      <div className="py-16 md:py-20 lg:py-24">
        <div className="container-custom">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-[#046865] shrink-0" aria-hidden />
              <p className="text-[11px] md:text-xs font-medium tracking-[0.14em] uppercase text-[#6B7280]">
                Our Impact and Public Systems Services
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-[#0B1F33] leading-[1.12] tracking-tight">
              Mission-oriented action for the world’s grand challenges.
            </h2>

            <p className="text-base md:text-lg text-[#4B5563] leading-relaxed max-w-3xl">
              Grand challenges—from climate change and food security to public welfare—demand
              mission-oriented action across policy, technology and institutions. TSR Lab helps
              partners find leverage points that unlock lasting impact across markets and communities.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
            {capabilities.map((cap) => {
              const isActive = cap.id === activeId;
              return (
                <button
                  key={cap.id}
                  type="button"
                  onClick={() => setActiveId(cap.id)}
                  className={`group relative min-h-[160px] md:min-h-[180px] rounded-lg p-5 md:p-6 text-left transition-all duration-300 ${
                    isActive
                      ? 'ring-2 ring-[#0B1F33] ring-offset-2 shadow-lg scale-[1.02]'
                      : 'hover:shadow-md hover:scale-[1.01]'
                  }`}
                  style={{ backgroundColor: cap.cardColor }}
                  aria-pressed={isActive}
                  aria-label={`Explore ${cap.title}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-[#0B1F33]/70">{cap.number}</span>
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#0B1F33]/20 bg-white/50 transition-transform duration-300 ${
                        isActive ? 'rotate-180' : 'group-hover:translate-y-0.5'
                      }`}
                    >
                      <ChevronDownIcon className="text-[#0B1F33]" />
                    </span>
                  </div>
                  <h3 className="mt-8 md:mt-10 text-lg md:text-xl font-bold text-[#0B1F33] leading-snug max-w-[180px]">
                    {cap.title}
                  </h3>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] md:text-[11px] font-medium tracking-[0.12em] uppercase text-[#9CA3AF]">
            <span>TSR Lab — Impact & Public Systems Practice</span>
            <span>Click a capability to explore</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F3EE] py-16 md:py-20 lg:py-24 border-t border-[#E5E7EB]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <span className="block w-8 h-[2px] bg-[#046865] shrink-0" aria-hidden />
                <p className="text-[11px] md:text-xs font-medium tracking-[0.14em] uppercase text-[#6B7280]">
                  {active.subtitle}
                </p>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F33] leading-[1.15] tracking-tight">
                {active.heading}
              </h3>

              <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
                {active.description}
              </p>

              <div className="pt-4 border-t border-[#D6D3CD]">
                <p className="text-[10px] md:text-[11px] font-medium tracking-[0.14em] uppercase text-[#9CA3AF] mb-4">
                  From evidence to action
                </p>
                <Link href="/contact" className="inline-flex items-center gap-3 group">
                  <span className="text-sm md:text-base font-semibold text-[#0B1F33] underline underline-offset-4 decoration-[#046865]/40 group-hover:decoration-[#046865] transition-colors">
                    {active.ctaLabel}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1F33] text-white group-hover:bg-[#046865] transition-colors">
                    <ArrowRightIcon />
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 auto-rows-fr">
              {active.services.map((service, idx) => {
                const isLastOfFive = active.services.length === 5 && idx === 4;
                return (
                  <div
                    key={service.abbr + service.title}
                    className={`flex flex-col min-h-[220px] rounded-lg p-5 md:p-6 transition-shadow duration-300 hover:shadow-md ${
                      isLastOfFive ? 'sm:col-span-2 xl:col-span-2' : ''
                    }`}
                    style={{ backgroundColor: service.color }}
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#0B1F33] text-[10px] font-bold text-white tracking-wide">
                      {service.abbr}
                    </span>
                    <h4 className="mt-4 text-base md:text-lg font-bold text-[#0B1F33] leading-snug">
                      {service.title}
                    </h4>
                    <p className="mt-3 flex-1 text-xs md:text-sm text-[#374151] leading-relaxed">
                      {service.description}
                    </p>
                    <p className="mt-4 pt-3 border-t border-[#0B1F33]/10 text-[9px] md:text-[10px] font-semibold tracking-[0.1em] uppercase text-[#0B1F33]/60">
                      {service.tags}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
