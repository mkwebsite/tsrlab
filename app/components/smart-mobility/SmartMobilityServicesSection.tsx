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
    id: 'research',
    number: '01',
    title: 'Research & Mobility Intelligence',
    cardColor: '#FFE900',
    subtitle: 'RESEARCH & MOBILITY INTELLIGENCE',
    heading: 'Intelligence that turns a rapidly evolving mobility ecosystem into clear decisions.',
    description:
      'We combine market evidence, competitive intelligence, policy context and mobility-sector expertise to reveal where markets and technologies are moving—and what organisations should do next.',
    ctaLabel: 'Decision-ready intelligence',
    services: [
      {
        abbr: 'MO',
        title: 'Market & Opportunity Research',
        description:
          'Size mobility markets, assess customer segments and identify growth opportunities across shared mobility, fleet services, EVs, charging, public transport, intercity mobility and emerging models.',
        tags: 'MARKETS · SEGMENTS · GROWTH',
        color: '#FFF9CC',
      },
      {
        abbr: 'CE',
        title: 'Competitive & Ecosystem Intelligence',
        description:
          'Track operators, OEMs, technology providers, partnerships, funding, deployments, geographic expansion and evolving business models across the mobility ecosystem.',
        tags: 'OPERATORS · PARTNERSHIPS · FUNDING',
        color: '#D0EEEE',
      },
      {
        abbr: 'MB',
        title: 'Mobility Benchmarking',
        description:
          'Compare business models, fleet economics, utilization, pricing, operational performance, technology capabilities and commercialization progress against relevant peers and market leaders.',
        tags: 'BENCHMARKS · ECONOMICS · PERFORMANCE',
        color: '#E0F2F1',
      },
      {
        abbr: 'PR',
        title: 'Policy & Regulatory Intelligence',
        description:
          'Analyse EV policies, charging regulations, autonomous vehicle frameworks, transport policy, incentives, fleet mandates and other developments affecting mobility markets.',
        tags: 'POLICY · REGULATION · INCENTIVES',
        color: '#FDE8E0',
      },
      {
        abbr: 'EM',
        title: 'Emerging Mobility & Technology Intelligence',
        description:
          'Track developments in electric and autonomous mobility, connected fleets, software-defined mobility, and AI-enabled operations to identify emerging opportunities and strategic implications.',
        tags: 'EV · AV · CONNECTED · AI',
        color: '#B2DFDB',
      },
      {
        abbr: 'WP',
        title: 'White Papers & Sector Outlooks',
        description:
          'Develop authoritative publications on mobility markets, technology adoption, regulatory change, fleet transformation, EV transition, autonomous mobility and emerging business models.',
        tags: 'OUTLOOKS · PUBLICATIONS · MODELS',
        color: '#FFF9CC',
      },
    ],
  },
  {
    id: 'strategy',
    number: '02',
    title: 'Strategy & Commercialization',
    cardColor: '#D0EEEE',
    subtitle: 'STRATEGY & COMMERCIALIZATION',
    heading: 'Strategy that turns mobility intelligence into viable growth and investment decisions.',
    description:
      'We help mobility businesses and investors determine where to play, how to win and which models can create sustainable value across emerging markets, technologies and mobility use cases.',
    ctaLabel: 'Commercialization roadmaps',
    services: [
      {
        abbr: 'ME',
        title: 'Market Entry & Growth Strategy',
        description:
          'Assess countries, cities, corridors, customer segments and use cases to identify attractive opportunities and develop practical market-entry and expansion roadmaps.',
        tags: 'MARKETS · CITIES · EXPANSION',
        color: '#D0EEEE',
      },
      {
        abbr: 'BM',
        title: 'Business Model & Commercial Viability',
        description:
          'Design and evaluate ownership, leasing, subscription, fleet-as-a-service, ride-hailing and mobility-as-a-service models. Assess revenue, utilization, operating costs, financing, breakeven, payback and returns to identify commercially viable sources of value.',
        tags: 'MODELS · UNIT ECONOMICS · RETURNS',
        color: '#E0F2F1',
      },
      {
        abbr: 'EV',
        title: 'EV Transition & Electrification Strategy',
        description:
          'Assess vehicle suitability, total cost of ownership, charging requirements, operational implications and phased transition pathways for fleet electrification.',
        tags: 'EV · TCO · CHARGING',
        color: '#FFF9CC',
      },
      {
        abbr: 'AV',
        title: 'Autonomous Mobility Commercialization',
        description:
          'Evaluate AV use cases, market readiness, deployment models, partnerships, operating requirements and the economics of robotaxis, autonomous freight and related applications.',
        tags: 'AV · ROBOTAXI · FREIGHT',
        color: '#FDE8E0',
      },
      {
        abbr: 'DD',
        title: 'Commercial Due Diligence',
        description:
          'Assess market attractiveness, competitive positioning, business-model strength, unit economics, operational capabilities and commercialization risks for investors and strategic buyers.',
        tags: 'DILIGENCE · POSITIONING · RISK',
        color: '#B2DFDB',
      },
    ],
  },
  {
    id: 'fleet',
    number: '03',
    title: 'Fleet & Operations Transformation',
    cardColor: '#E0F2F1',
    subtitle: 'FLEET & OPERATIONS TRANSFORMATION',
    heading: 'Turn fleet data and operating experience into better economics, utilization and growth.',
    description:
      'TSR Lab provides a proprietary framework: TSR Lab Fleet Intelligence Stack™ connecting seven operating and commercial layers—Unit Economics, Network, Utilization, Demand, Revenue, Operational and Next-Gen Fleet Intelligence.',
    ctaLabel: 'Fleet intelligence',
    services: [
      {
        abbr: 'FE',
        title: 'Fleet Economics & Profitability',
        description:
          'Diagnose asset-level and fleet-level profitability, cost structures, contribution margins, financing economics and the operating levers that determine returns.',
        tags: 'PROFITABILITY · MARGINS · RETURNS',
        color: '#E0F2F1',
      },
      {
        abbr: 'NS',
        title: 'Network & Supply Intelligence',
        description:
          'Identify attractive routes, corridors, zones and demand clusters; determine where supply should expand, consolidate or be redeployed.',
        tags: 'ROUTES · CORRIDORS · SUPPLY',
        color: '#FFF9CC',
      },
      {
        abbr: 'UP',
        title: 'Utilization & Productivity Optimization',
        description:
          'Analyse vehicle utilization, driver hours, idle time, downtime, trip productivity, load factors and asset turns to identify productivity leakage and improvement opportunities.',
        tags: 'UTILIZATION · PRODUCTIVITY · ASSETS',
        color: '#D0EEEE',
      },
      {
        abbr: 'DI',
        title: 'Demand Intelligence & Forecasting',
        description:
          'Understand demand by geography, route, time band, trip type and customer segment, and distinguish structural demand from seasonal, event-driven and short-term fluctuations.',
        tags: 'DEMAND · FORECASTING · SEGMENTS',
        color: '#FDE8E0',
      },
      {
        abbr: 'RY',
        title: 'Revenue & Yield Optimization',
        description:
          'Assess pricing, fare structures, channel mix, aggregator dependence, customer segments and ancillary revenue opportunities to improve revenue quality.',
        tags: 'PRICING · YIELD · CHANNELS',
        color: '#B2DFDB',
      },
      {
        abbr: 'OM',
        title: 'Fleet Operating Model & Process Transformation',
        description:
          'Diagnose and redesign operating processes across driver onboarding, scheduling, dispatch, charging, maintenance, vehicle availability, support and fleet control.',
        tags: 'PROCESSES · DISPATCH · CONTROL',
        color: '#FFF9CC',
      },
      {
        abbr: 'EO',
        title: 'EV Fleet Operations',
        description:
          'Improve charging strategy, range management, charger utilization, vehicle availability, energy consumption and operating processes for electric fleets.',
        tags: 'CHARGING · RANGE · ENERGY',
        color: '#D0EEEE',
      },
      {
        abbr: 'CT',
        title: 'Fleet Performance & Control-Tower Design',
        description:
          'Define KPIs, management dashboards, operating cadences, exception alerts and decision workflows that give management teams visibility into fleet performance.',
        tags: 'KPIS · DASHBOARDS · ALERTS',
        color: '#FDE8E0',
      },
    ],
  },
  {
    id: 'ai-products',
    number: '04',
    title: 'AI-Native Mobility Platforms',
    cardColor: '#B2DFDB',
    subtitle: 'AI & MOBILITY INTELLIGENCE PRODUCTS',
    heading:
      'Build AI-native products that turn fragmented mobility data into continuous decision intelligence.',
    description: '',
    ctaLabel: 'Build-ready products',
    services: [
      {
        abbr: 'IP',
        title: 'Mobility Intelligence Platforms',
        description:
          'Design and build continuously updating intelligence platforms that track markets, competitors, technology, regulation, investment and strategic signals across mobility ecosystems.',
        tags: 'PLATFORMS · MARKETS · SIGNALS',
        color: '#D0EEEE',
      },
      {
        abbr: 'AA',
        title: 'AI Mobility Analysts',
        description:
          'Develop domain-specific AI assistants that allow executives, analysts and operators to interrogate mobility intelligence, compare companies and markets, explore scenarios and generate decision-ready analysis.',
        tags: 'AI ASSISTANTS · ANALYSIS · SCENARIOS',
        color: '#E0F2F1',
      },
      {
        abbr: 'FD',
        title: 'Fleet Intelligence Dashboards',
        description:
          'Build decision-support platforms integrating fleet economics, utilization, demand, network, revenue and operational KPIs into actionable management views.',
        tags: 'DASHBOARDS · KPIS · FLEET',
        color: '#FFF9CC',
      },
      {
        abbr: 'CM',
        title: 'Market & Competitive Monitoring Systems',
        description:
          'Create automated systems that continuously track competitors, partnerships, funding, deployments, regulation, technology developments and other strategic signals.',
        tags: 'MONITORING · COMPETITORS · REGULATION',
        color: '#FDE8E0',
      },
      {
        abbr: 'GN',
        title: 'Geospatial & Network Intelligence Tools',
        description:
          'Develop dashboards and analytical tools for route, corridor, zone, demand and supply analysis to support network planning and asset deployment.',
        tags: 'GEOSPATIAL · NETWORK · PLANNING',
        color: '#B2DFDB',
      },
      {
        abbr: 'ED',
        title: 'EV Decision-Support Tools',
        description:
          'Build TCO calculators, EV suitability models, charging-planning tools, fleet-transition models and operational dashboards supporting electrification decisions.',
        tags: 'TCO · EV · TRANSITION',
        color: '#FFF9CC',
      },
      {
        abbr: 'CA',
        title: 'Custom Mobility Analytics Products',
        description:
          'Develop bespoke applications, analytical models, automated workflows and internal tools around specific mobility operating or investment decisions.',
        tags: 'CUSTOM · ANALYTICS · WORKFLOWS',
        color: '#D0EEEE',
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

export default function SmartMobilityServicesSection() {
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
                Our Smart Mobility Sector Services
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold text-[#0B1F33] leading-[1.12] tracking-tight">
              Intelligence, strategy and technology for a rapidly evolving mobility ecosystem.
            </h2>

            <div className="space-y-5 text-base md:text-lg text-[#4B5563] leading-relaxed max-w-3xl">
              <p>
                Mobility is being reshaped by electrification, autonomous technologies, shared
                platforms, connected vehicles and software-led operations. TSR Lab helps mobility
                companies, fleet operators, investors and public institutions understand these
                shifts, identify opportunities and translate intelligence into commercial and
                operational decisions.
              </p>
              <p>
                We combine mobility research, commercialization strategy, fleet transformation and
                AI-native product development to improve market positioning, asset utilization,
                operating performance and investment decisions.
              </p>
            </div>
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
                  <h3 className="mt-8 md:mt-10 text-lg md:text-xl font-bold text-[#0B1F33] leading-snug max-w-[200px]">
                    {cap.title}
                  </h3>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] md:text-[11px] font-medium tracking-[0.12em] uppercase text-[#9CA3AF]">
            <span>TSR Lab — Smart Mobility Practice</span>
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

              {active.description ? (
                <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
                  {active.description}
                </p>
              ) : null}

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
