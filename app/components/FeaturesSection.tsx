'use client';

import React from 'react';
import ChipIcon from './icons/chip.svg';
import SearchIcon from './icons/search.svg';
import ChartLineIcon from './icons/chart-line.svg';
import BriefcaseIcon from './icons/briefcase.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: ChipIcon,
    title: 'Research Services',
    description: 'We conduct qualitative and quantitative research to obtain data and insights from target groups, delivering research reports that help organizations make informed, evidence-based decisions.',
    items: ['Market research', 'Policy and Economic research', 'Feasibility Due Diligence', 'Consumer Insights'],
  },
  {
    icon: SearchIcon,
    title: 'AI Advisory & Workflows',
    description: 'We help organizations define AI strategies and deploy practical AI workflows tailored to their specific needs.',
    items: ['AI strategy', 'Use-case design', 'Workflow automation', 'Decision intelligence'],
  },
  {
    icon: BriefcaseIcon,
    title: 'Executive Advisory',
    description: 'We support leaders and corporate strategy teams with decision-ready intelligence, strategic analysis, and governance-focused advisory support.',
    items: ['Executive briefs', 'Strategic insights', 'Competitive Benchmarking', 'Thought leadership'],
  },
  {
    icon: ChartLineIcon,
    title: 'Digital Solutions',
    description: 'We partner with founders and SMBs to translate insights into execution—designing and building digital products, platforms, and tools that drive efficiency and growth.',
    items: ['Website and App development', 'Workflow digitization', 'Custom platforms', 'System integration'],
  },
 
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#f9fafb] to-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center space-y-4 md:space-y-5 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2345]">
            Our Main Features
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#4b5563] max-w-3xl mx-auto px-4">
            Explore our range of research, advisory and AI-native digital solution services to help your organization grow.
          </p>
        </div>

        {/* Features Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className={`p-6 md:p-8 lg:p-10 rounded-2xl border border-[#f3f4f6] bg-white shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4 md:space-y-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#ffedd5] rounded-xl">
                    <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: '#ff3333' }} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1e2345]">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-[#4b5563] leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.items && (
                    <ul className="space-y-2 mt-4">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-[#4b5563]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3333] flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}