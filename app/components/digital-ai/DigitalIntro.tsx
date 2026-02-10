import React from 'react';
import AwardIcon from '../icons/award.svg';
import CheckCircleIcon from '../icons/check-circle.svg';
import ArrowRightIcon from '../icons/arrow-right-small.svg';
import ResearchBgIcon from '../icons/research-bg.svg';

export default function DigitalIntro() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Insights Turn into Product at TSR Lab
            </h1>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                At TSR Lab, we transform businesses through cutting-edge digital solutions and AI-powered technologies. We combine advanced AI capabilities, modern digital infrastructure, and expert implementation to help organizations automate processes, enhance decision-making, and drive growth.
              </p>
             
            </div>

            <button 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105"
              style={{
                boxShadow: '0px 4px 6px #fed7aa, 0px 10px 15px #fed7aa',
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
              <AwardIcon className="w-5 h-5" style={{ color: '#ff3333' }} />
              
              <h3 className="text-2xl font-bold text-gray-900">
                Why Choose Our Digital & AI Services?
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-3 h-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                  <p className="text-base font-medium text-gray-700">
                    Expert team with proven experience in AI and digital transformation
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-3 h-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                  <p className="text-base font-medium text-gray-700">
                    AI-Native solutions with cutting-edge technology stack
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-3 h-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                  <p className="text-base font-medium text-gray-700">
                    End-to-end digital solutions from strategy to implementation
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-3 h-2 flex-shrink-0" style={{ color: '#16a34a' }} />
                  <p className="text-base font-medium text-gray-700">
                    Scalable and secure digital infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

         
        </div>
<div className="grid lg:grid-cols-1 pt-18 space-y-4 items-start">
          <p className="text-lg leading-relaxed text-gray-600">
                For SMEs and startups, we deliver custom digital solutions and AI-powered tools that streamline operations, improve customer experiences, and accelerate growth.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                For enterprises, we provide enterprise-grade AI solutions, digital transformation services, and intelligent automation that drive efficiency and competitive advantage.
              </p>
      </div>
      </div>
    </section>
  );
}
