'use client';

import React from 'react';
import Link from 'next/link';

const products = [
  {
    id: 'policygraph',
    name: 'PolicyGraph AI',
    tagline: 'Policy intelligence and accountability for the AI economy.',
    description:
      'PolicyGraph AI maps how government institutions are responding to AI-driven economic change. It tracks policy commitments, response typologies and implementation progress across government units, validating public promises against observable action.',
    detail:
      'The platform enables policymakers, businesses, researchers and civil society to compare institutional responses, identify implementation gaps and strengthen public accountability.',
    capabilities:
      'Government-response mapping · Policy and commitment tracking · Implementation validation · Cross-institutional comparison · Accountability intelligence',
    accent: '#FFE900',
  },
  {
    id: 'kalkakisan',
    name: 'Kal Ka Kisan',
    tagline:
      'Localized agricultural markets and support systems for small farmers, market players and FPOs.',
    description:
      'Kal Ka Kisan is a digital platform designed for small farmers, Farmer Producer Organisations and other agricultural stakeholders seeking to develop shorter hyperlocalized sustainable value chains.',
    detail:
      'The platform connects farmers with nearby markets, buyers and value-chain partners while embedding localized advisory, market intelligence and other support services. It helps strengthen farmer participation, improve market access and retain more value within local agricultural economies.',
    capabilities:
      'Local market linkages · Short value-chain development · Farmer and FPO coordination · Localized advisory · Market and support-service integration',
    accent: '#21A0A0',
  },
] as const;

export default function ImpactIntelligenceStackSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#FCFFF7]">
      <div className="container-custom">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          <div className="flex items-center gap-3">
            <span className="block w-8 h-[2px] bg-[#FFE900] shrink-0" aria-hidden />
            <p className="text-[11px] md:text-xs font-medium tracking-[0.14em] uppercase text-[#6B7280]">
              Our Featured Intelligence Stack
            </p>
          </div>

          <h2 className="heading-section">
            Digital platforms that turn intelligence into accountability, coordination and practical
            action.
          </h2>

          <p className="text-base md:text-lg text-[#4B5563] leading-relaxed max-w-3xl">
            TSR Lab develops public-interest products that address consequential policy and
            development challenges. Our platforms combine sector knowledge, structured data and
            applied AI to strengthen decisions, improve transparency and support underserved
            stakeholders.
          </p>
        </div>

        <div className="mt-12 md:mt-16 space-y-6 md:space-y-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: product.accent }}
                aria-hidden
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-8 md:p-10 lg:p-12">
                <div className="lg:col-span-4 space-y-4">
                  <p className="text-[10px] md:text-[11px] font-medium tracking-[0.16em] uppercase text-[#9CA3AF]">
                    Product {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#046865] leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-base md:text-lg font-medium text-[#0B1F33] leading-snug">
                    {product.tagline}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-5">
                  <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">
                    {product.detail}
                  </p>
                  <div className="pt-4 border-t border-[#E5E7EB]">
                    <p className="text-[10px] md:text-[11px] font-medium tracking-[0.14em] uppercase text-[#9CA3AF] mb-2">
                      Key capabilities
                    </p>
                    <p className="text-xs md:text-sm font-semibold tracking-[0.04em] text-[#046865] leading-relaxed">
                      {product.capabilities}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-[#046865] hover:text-[#21A0A0] transition-colors"
          >
            Talk to us about these platforms
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
