import React from 'react';
import SearchIcon from '../icons/search.svg';
import ChartPieIcon from '../icons/chart-pie.svg';
import ChipIcon from '../icons/chip.svg';
import BriefcaseIcon from '../icons/briefcase.svg';
import UsersChartIcon from '../icons/users-chart.svg';
import DocumentIcon from '../icons/document.svg';
import BulletPointIcon from '../icons/bullet-point.svg';

export default function ResearchServicesSection() {
  const services = [
    {
      icon: SearchIcon,
      title: 'Market & Consumer Intelligence',
      description: 'Data-driven market research helping organizations understand customers, competitors, and growth opportunities with confidence.',
      items: ['Market sizing', 'Competitor benchmarking', 'Consumer research', 'User Feedback analytics'],
    },
    {
      icon: DocumentIcon,
      title: 'Policy & Economic Research',
      description: 'Evidence-led policy research supporting governments and institutions across design, evaluation, benchmarking, and decision-making processes.',
      items: ['Policy benchmarking', 'Scheme evaluation', 'Impact tracking', 'Policy briefs'],
    },
    {
      icon: ChipIcon,
      title: 'AI × Research Enablement',
      description: 'GenAI-enabled research workflows combining automation, synthesis, and expert interpretation for faster, reliable insights.',
      items: ['GenAI workshops', 'Workflow automation', 'Synthetic data', 'Research mentorship'],
    },
    {
      icon: BriefcaseIcon,
      title: 'Executive Advisory',
      description: 'Decision-ready intelligence supporting senior leaders through strategic research, benchmarking, and executive-level advisory support.',
      items: ['Executive briefs', 'Scenario planning', 'Strategic benchmarking', 'Thought leadership'],
    },
    {
      icon: UsersChartIcon,
      title: 'Insight-to-Product',
      description: 'Research-led support helping founders transform validated insights into scalable, build-ready digital products.',
      items: ['Idea validation', 'User insights', 'Feature prioritization', 'Build support'],
    },
    {
      icon: ChartPieIcon,
      title: 'Research Methods',
      description: 'Rigorous qualitative, quantitative, and AI-integrated methodologies ensuring reliability, validity, and consistency across research engagements.',
      items: ['Primary/Secondary research', 'GenAI x Computational Social Science', 'Thematic Discourse Analysis', 'Quantitative Analysis'],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-sm font-semibold tracking-wider uppercase text-[#E53D00]">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Our Research Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive research solutions tailored to help your business make informed
            decisions and achieve strategic objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 space-y-6 hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-6 h-6" style={{ color: '#E53D00' }} />
              
              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <BulletPointIcon className="w-1.5 h-1.5 flex-shrink-0" style={{ color: '#E53D00' }} />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}