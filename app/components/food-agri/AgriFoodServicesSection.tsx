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

// Brand palette tints for service cards
// Deep Teal tint: #E0F2F1  Transition Teal tint: #D0EEEE  Yellow: #FFF9CC  Orange tint: #FDE8E0  Teal mid: #B2DFDB
const capabilities: Capability[] = [
  {
    id: 'research',
    number: '01',
    title: 'Research & Insights',
    cardColor: '#FFE900',
    subtitle: 'RESEARCH & INSIGHTS',
    heading: 'Research that turns complex food systems into clear decisions.',
    description:
      'We combine market evidence, policy context and sector expertise to reveal where agri-food markets are moving—and what organisations should do next.',
    ctaLabel: 'Decision-ready intelligence',
    services: [
      {
        abbr: 'MO',
        title: 'Market & Opportunity Research',
        description:
          'Size agri-food and AgTech markets, map value-chain segments, track farmer and consumer demand, and identify emerging growth opportunities.',
        tags: 'MARKETS · DEMAND · VALUE CHAIN',
        color: '#FFF9CC',
      },
      {
        abbr: 'CI',
        title: 'Competitive Intelligence',
        description:
          'Assess agribusiness and AgTech competitors, business models, product portfolios, partnerships, capabilities and market positioning.',
        tags: 'COMPETITORS · POSITIONING · PORTFOLIOS',
        color: '#D0EEEE',
      },
      {
        abbr: 'BS',
        title: 'Benchmarking Studies',
        description:
          'Compare processes, digital maturity, sustainability performance and operating metrics with leading agriculture and food companies.',
        tags: 'PROCESSES · MATURITY · SUSTAINABILITY',
        color: '#E0F2F1',
      },
      {
        abbr: 'FP',
        title: 'Food & Agriculture Policy Research',
        description:
          'Analyse food security, agricultural policy, trade, subsidies, climate adaptation, rural livelihoods and regulatory change.',
        tags: 'FOOD SECURITY · POLICY · REGULATORY CHANGE',
        color: '#FDE8E0',
      },
      {
        abbr: 'WP',
        title: 'White Papers & Sector Outlooks',
        description:
          'Develop authoritative publications on digital agriculture, AgTech innovation, resilient value chains and sustainable food systems.',
        tags: 'OUTLOOKS · INNOVATION · SUSTAINABLE SYSTEMS',
        color: '#B2DFDB',
      },
    ],
  },
  {
    id: 'strategy',
    number: '02',
    title: 'Strategy & Transformation',
    cardColor: '#D0EEEE',
    subtitle: 'STRATEGY & TRANSFORMATION',
    heading:
      'Help organizations turn market intelligence and emerging technologies into practical transformation pathways.',
    description:
      '',
    ctaLabel: 'Transformation roadmaps',
    services: [
      {
        abbr: 'AG',
        title: 'Agribusiness Growth Strategy',
        description:
          'Identify new markets, business models, partnerships and value-creation opportunities.',
        tags: 'GROWTH · MARKETS · PARTNERSHIPS',
        color: '#D0EEEE',
      },
      {
        abbr: 'DA',
        title: 'Digital Agriculture Strategy',
        description:
          'Determine which digital capabilities and solutions an organization should develop, adopt or scale.',
        tags: 'DIGITAL CAPABILITIES · ADOPTION · SCALING',
        color: '#E0F2F1',
      },
      {
        abbr: 'GT',
        title: 'Innovation Ground-Truthing',
        description:
          'Test whether proposed agtech solutions address real farmer needs and operating conditions before significant investment or deployment.',
        tags: 'GROUND-TRUTHING · FARMER NEEDS · OPERATING CONDITIONS',
        color: '#FFF9CC',
      },
    ],
  },
  {
    id: 'digital',
    number: '03',
    title: 'AI & Digital Products',
    cardColor: '#E0F2F1',
    subtitle: 'AI & DIGITAL PRODUCTS',
    heading:
      'Design and build practical technology solutions for farmer organizations, agribusinesses and agricultural institutions.',
    description:
      '',
    ctaLabel: 'Build-ready products',
    services: [
      {
        abbr: 'IP',
        title: 'Intelligence Platforms',
        description:
          'Develop dashboards, analytical models and dynamic reporting platforms that support operational and strategic decisions.',
        tags: 'DASHBOARDS · MODELS · REPORTING',
        color: '#D0EEEE',
      },
      {
        abbr: 'AD',
        title: 'Agtech Product Development',
        description:
          'Develop applications and platforms tailored to agricultural users and value chains.',
        tags: 'APPLICATIONS · PLATFORMS · VALUE CHAINS',
        color: '#E0F2F1',
      },
      {
        abbr: 'CP',
        title: 'Digital Commerce Platforms',
        description:
          'Build market-access and transaction solutions for farmers, farmer producer organizations and cooperatives.',
        tags: 'MARKET ACCESS · TRANSACTIONS · COOPS',
        color: '#FFF9CC',
      },
      {
        abbr: 'VP',
        title: 'Action Research and Product Validation',
        description:
          'Pilot solutions in real-world settings, collect user evidence and iteratively improve product design and delivery.',
        tags: 'PILOTS · EVIDENCE · ITERATION',
        color: '#FDE8E0',
      },
    ],
  },
  {
    id: 'monitoring',
    number: '04',
    title: 'Monitoring, Evaluation & Learning',
    cardColor: '#B2DFDB',
    subtitle: 'MONITORING, EVALUATION & LEARNING',
    heading:
      'Establish whether agri-food programmes and innovations are delivering meaningful, measurable results.',
    description:
      '',
    ctaLabel: 'Impact measurement',
    services: [
      {
        abbr: 'MF',
        title: 'Monitoring and Evaluation Frameworks',
        description:
          'Define theories of change, results frameworks, indicators and data-collection systems.',
        tags: 'TOC · RESULTS · DATA COLLECTION',
        color: '#B2DFDB',
      },
      {
        abbr: 'IM',
        title: 'Programme Impact Evaluation',
        description:
          'Assess the outcomes and impact of public, private and development-sector interventions.',
        tags: 'OUTCOMES · IMPACT · EVIDENCE',
        color: '#FFF9CC',
      },
      {
        abbr: 'DP',
        title: 'Digital Product Evaluation',
        description:
          'Measure product adoption, user experience, behavioral change and benefits for farmers and other stakeholders.',
        tags: 'ADOPTION · UX · BENEFITS',
        color: '#D0EEEE',
      },
      {
        abbr: 'LM',
        title: 'Learning and Adaptive Management',
        description:
          'Convert monitoring and evaluation findings into practical recommendations for programme improvement and scale.',
        tags: 'LEARNING · RECOMMENDATIONS · SCALE',
        color: '#E0F2F1',
      },
      {
        abbr: 'IC',
        title: 'Impact Communication',
        description:
          'Develop evidence-based reports, dashboards and narratives for funders, investors and programme partners.',
        tags: 'REPORTS · DASHBOARDS · NARRATIVES',
        color: '#FDE8E0',
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

export default function AgriFoodServicesSection() {
  const [activeId, setActiveId] = useState(capabilities[0].id);
  const active = capabilities.find((c) => c.id === activeId) ?? capabilities[0];

  return (
    <section className="bg-white">
      {/* Overview */}
      <div className="py-16 md:py-20 lg:py-24">
        <div className="container-custom">
          <div className="max-w-4xl space-y-6 md:space-y-8">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-[2px] bg-[#046865] shrink-0" aria-hidden />
              <p className="text-[11px] md:text-xs font-medium tracking-[0.14em] uppercase text-[#6B7280]">
                Our Agri Food Sector Services
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-[#0B1F33] leading-[1.12] tracking-tight">
              Evidence, strategy and technology for a changing food system.
            </h2>

            <p className="text-base md:text-lg text-[#4B5563] leading-relaxed max-w-3xl">
              Agri-food systems face rising complexity—from climate and supply shocks to
              shifting consumer demand and policy reform. TSR Lab helps clients navigate
              this landscape with rigorous research, strategic clarity, and technology-enabled
              insight across the value chain.
            </p>
          </div>

          {/* Capability cards */}
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
            <span>TSR Lab — Agri-Food Practice</span>
            <span>Click a capability to explore</span>
          </div>
        </div>
      </div>

      {/* Detail panel */}
      <div className="bg-[#F5F3EE] py-16 md:py-20 lg:py-24 border-t border-[#E5E7EB]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* Left column */}
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

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
              {active.services.map((service, idx) => {
                const total = active.services.length;
                const remainder = total % 3;
                const isLast = idx === total - 1;
                const spanClass =
                  remainder === 2 && isLast
                    ? 'sm:col-span-2 xl:col-span-2'
                    : remainder === 1 && isLast
                      ? 'sm:col-span-2 xl:col-span-3'
                      : '';
                return (
                  <div
                    key={service.abbr + service.title}
                    className={`flex flex-col min-h-[220px] rounded-lg p-5 md:p-6 transition-shadow duration-300 hover:shadow-md ${spanClass}`}
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
