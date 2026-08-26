'use client';

import React from 'react';
import AwardIcon from './icons/award.svg';
import ChartLineIcon from './icons/chart-line.svg';
import TrendingUpIcon from './icons/trending-up.svg';
import DocumentIcon from './icons/document.svg';
import TeamIcon from './icons/team.svg';
import LightbulbIcon from './icons/lightbulb-idea.svg';
import SearchIcon from './icons/search.svg';
import PieChartIcon from './icons/pie-chart.svg';
import RocketIcon from './icons/rocket.svg';
import ArrowRightIcon from './icons/arrow-right.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: AwardIcon,
    title: 'Policy Benchmarking',
    description: 'We benchmark public policy frameworks and best practices to support evidence-based decision-making.',
  },
  {
    icon: ChartLineIcon,
    title: 'Scheme & Policy Evaluation',
    description: 'We conduct data-driven assessments of government schemes and policies to measure effectiveness and impact.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Opinion Tracking',
    description: 'We analyze public opinion, social trends, and sentiment to support strategic communication and policy planning.',
  },
  {
    icon: DocumentIcon,
    title: 'Policy Research Support',
    description: 'We provide end-to-end policy research support including design, analysis, and reporting.',
  },
  {
    icon: TeamIcon,
    title: 'Research Workshops & Training',
    description: 'We conduct workshops and training programs to build research and data capabilities.',
  },
  {
    icon: LightbulbIcon,
    title: 'Market Insights',
    description: 'We deliver market insights to help organizations understand trends, risks, and opportunities.',
  },
  {
    icon: SearchIcon,
    title: 'Market & Consumer Field Research',
    description: 'We conduct primary research including surveys, interviews, and field studies.',
  },
  {
    icon: PieChartIcon,
    title: 'Customer Feedback Intelligence',
    description: 'We analyze customer feedback to generate actionable insights and improve service delivery.',
  },
  {
    icon: RocketIcon,
    title: 'Insight to Product',
    description: 'We help founders turn validated research and insights into viable digital products by bridging user research, market intelligence, and digital solutioning expertise.',
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="services" className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center space-y-4 md:space-y-5 mb-12 md:mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-section">
            Ways We Help Clients
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#4b5563] max-w-3xl mx-auto px-4">
            Explore our range of research, advisory and AI-native digital solution services.
          </p>
        </div>

        {/* Services Grid - 3x3 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border border-[#f3f4f6] bg-white shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 md:mb-8">
                <service.icon className="w-5 h-5" style={{ color: '#E53D00' }} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#046865] mb-3 md:mb-4">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-[#4b5563] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View More Services Button */}
        <div className={`flex justify-center mt-12 md:mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="/research-services"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-3.5 bg-gradient-to-r from-[#046865] to-[#21A0A0] text-white rounded-full font-semibold text-sm md:text-base shadow-lg shadow-[#046865]/30 hover:shadow-xl hover:shadow-[#21A0A0]/40 hover:scale-105 transition-all duration-300"
          >
            View More Services
            <ArrowRightIcon className="w-3.5 h-3.5" style={{ color: '#ffffff' }} />
          </a>
        </div>
      </div>
    </section>
  );
}