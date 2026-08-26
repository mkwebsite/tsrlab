'use client';

import React from 'react';
import UsersChartIcon from './icons/users-chart.svg';
import UserExpertIcon from './icons/user-expert.svg';
import ChipIcon from './icons/chip.svg';
import DesktopIcon from './icons/desktop.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: UsersChartIcon,
    title: 'Strategic Research & Market Intelligence',
    description:
      'We conduct rigorous market research, industry analysis, and competitive intelligence using qualitative and quantitative methods to generate decision-ready insights across industries, markets, and policy environments.',
    items: [
      'Market Research and Industry Analysis',
      'Competitive Intelligence and Benchmarking',
      'Policy and Economic Research',
      'Feasibility Studies and Commercial Due Diligence',
      'Consumer and Stakeholder Insights',
    ],
  },
  {
    icon: UserExpertIcon,
    title: 'Strategic Advisory & Executive Insights',
    description:
      'We support leadership teams with strategic analysis, executive advisory, and decision support to improve planning, competitive positioning, and growth strategy.',
    items: [
      'Executive Briefs and Strategy Reports',
      'Strategic diagnostics and scenario planning',
      'Competitive benchmarking and market intelligence',
      'Thought leadership and research publications',
    ],
  },
  {
    icon: ChipIcon,
    title: 'AI Consulting & Workflow Automation',
    description:
      'We help organizations adopt AI-native tools, workflow automation, and applied AI solutions to improve research productivity, analytics capabilities, and decision-making.',
    items: [
      'AI Strategy and Advisory',
      'AI Use-Case Design and Implementation',
      'Workflow Automation and AI agents',
      'AI-enabled Research and Analytics Workflows',
    ],
  },
  {
    icon: DesktopIcon,
    title: 'Digital Products & Transformation',
    description:
      'We turn insights into execution by building digital platforms, custom applications, analytics tools, and workflow systems that improve operational efficiency and business decision-making.',
    items: [
      'Website and Application Development',
      'Workflow Digitization and Automation',
      'Custom Digital Platforms and Internal Tools',
      'System Integration and Data Solutions',
    ],
  },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#f9fafb] to-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center space-y-4 md:space-y-5 mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-section">
            What We Do
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
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#FFD4C2] rounded-xl">
                    <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: '#E53D00' }} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#046865]">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-[#4b5563] leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.items && (
                    <ul className="space-y-2 mt-4">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-[#4b5563]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E53D00] flex-shrink-0"></span>
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