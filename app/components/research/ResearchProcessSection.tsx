import React from 'react';
import LightbulbIcon from '../icons/lightbulb-idea.svg';
import DatabaseIcon from '../icons/database.svg';
import ChartLineIcon from '../icons/chart-line.svg';
import DocumentIcon from '../icons/document.svg';

export default function ResearchProcessSection() {
  const steps = [
    {
      number: '01',
      icon: LightbulbIcon,
      title: 'We collectively define the agenda',
      description: 'We begin with a focused discovery discussion to clearly understand your decision context, objectives, constraints, and success criteria—ensuring the research is framed around real decision needs, not generic questions.',
    },
    {
      number: '02',
      icon: DatabaseIcon,
      title: 'We conduct due diligence and design the approach',
      description: 'We perform a rapid yet rigorous due diligence and develop a tailored research proposal, outlining methodology, scope, timelines, and deliverables aligned with your decision requirements.',
    },
    {
      number: '03',
      icon: ChartLineIcon,
      title: 'We kickstart the work with continuous alignment',
      description: 'Once approved, we initiate execution and share interim findings, progress updates, and early insights—maintaining close alignment and flexibility throughout the engagement.',
    },
    {
      number: '04',
      icon: DocumentIcon,
      title: 'We deliver decision-ready outputs',
      description: 'We conclude with clear, structured, and actionable deliverables designed to directly support confident decision-making.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-sm font-semibold tracking-wider uppercase text-[#E53D00]">
            How We Work
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            We can be your research and advisory partner
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how our 4 step approach streamlines efficient delivery
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 space-y-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-11 h-11 bg-gradient-to-r from-[#046865] to-[#21A0A0] rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="pt-4">
                <step.icon className="w-4 h-6" style={{ color: '#E53D00' }} />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}