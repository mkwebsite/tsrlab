import React from 'react';
import LightbulbIcon from '../icons/lightbulb-idea.svg';
import DatabaseIcon from '../icons/database.svg';
import ChartLineIcon from '../icons/chart-line.svg';
import RocketIcon from '../icons/rocket.svg';

export default function DigitalProcessSection() {
  const steps = [
    {
      number: '01',
      icon: LightbulbIcon,
      title: 'We understand your digital needs',
      description: 'We begin with a comprehensive discovery session to understand your business objectives, current technology landscape, and digital transformation goals—ensuring our solutions align with your strategic vision.',
    },
    {
      number: '02',
      icon: DatabaseIcon,
      title: 'We design and plan the solution',
      description: 'We develop a detailed technical architecture and implementation plan, outlining the technology stack, AI capabilities, timelines, and success metrics aligned with your business requirements.',
    },
    {
      number: '03',
      icon: ChartLineIcon,
      title: 'We build with agile methodology',
      description: 'We implement solutions using agile development practices, with continuous testing, regular updates, and close collaboration—ensuring flexibility and alignment throughout the project.',
    },
    {
      number: '04',
      icon: RocketIcon,
      title: 'We deploy and optimize',
      description: 'We launch your digital solution with comprehensive support, monitoring, and continuous optimization to ensure peak performance and maximum value delivery.',
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
            We can be your digital and AI partner
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how our 4 step approach delivers innovative digital solutions
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
