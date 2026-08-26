import React from 'react';
import AwardIcon from '../icons/award.svg';
import CheckCircleIcon from '../icons/check-circle.svg';
import ArrowRightIcon from '../icons/arrow-right-small.svg';
import ResearchBgIcon from '../icons/research-bg.svg';

export default function ResearchIntro() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Intelligence Meets Clarity at TSR Lab
            </h1>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                At TSR Lab, impactful decisions begin with reliable, valid data. We combine scientific research methods, rigorous analysis, trusted data sources, and expert oversight to help organizations plan, validate, and communicate high-stakes decisions.
              </p>
             
            </div>

            <button 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#046865] to-[#21A0A0] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105"
              style={{
                boxShadow: '0px 4px 6px #FFD4C2, 0px 10px 15px #FFD4C2',
              }}
            >
              Get Started Today
              <ArrowRightIcon className="w-3.5 h-3" style={{ color: '#ffffff' }} />
            </button>
          </div>

          {/* Right - Why Choose Card */}
          <div className="relative">
            {/* Background decoration */}
            <ResearchBgIcon className="absolute -top-12 -right-12 w-full h-auto opacity-50" style={{ color: 'rgba(255, 237, 213, 0.50)' }} />
            
            <div 
              className="relative bg-white rounded-2xl border border-gray-100 p-8 space-y-6"
              style={{
                boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.10), 0px 20px 25px rgba(0, 0, 0, 0.10)',
              }}
            >
              <AwardIcon className="w-5 h-5" style={{ color: '#E53D00' }} />
              
              <h3 className="text-2xl font-bold text-gray-900">
                Why Choose Our Research Services?
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-3 h-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                  <p className="text-base font-medium text-gray-700">
                    Expert team with proven Delivery Experience Across 100+ Engagements
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-3 h-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                  <p className="text-base font-medium text-gray-700">
                    AI-Native, Market-Tested Research Workflows
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-3 h-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                  <p className="text-base font-medium text-gray-700">
                    A bottom-up approach to insights co-creation
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-3 h-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                  <p className="text-base font-medium text-gray-700">
                    Led by PhDs and Sector Experts
                  </p>
                </div>
              </div>
            </div>
          </div>

         
        </div>
<div className="grid lg:grid-cols-1 pt-18 space-y-4 items-start">
          <p className="text-lg leading-relaxed text-gray-600">
                For SMEs, startups, and market-leading brands, we deliver contextual, data-driven research that sharpens understanding of markets, competitors, and innovation landscapes.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                For policy institutions and social research organizations, we act as a trusted research partner, accelerating studies through robust methodologies, advanced analytics, and disciplined execution.
              </p>
      </div>
      </div>
    </section>
  );
}