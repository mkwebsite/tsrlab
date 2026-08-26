import React from 'react';
import ChipIcon from '../icons/chip.svg';
import CodeIcon from '../icons/code.svg';
import ServerIcon from '../icons/server.svg';
import DesktopIcon from '../icons/desktop.svg';
import RocketIcon from '../icons/rocket.svg';
import ChartPieIcon from '../icons/chart-pie.svg';
import BulletPointIcon from '../icons/bullet-point.svg';

export default function DigitalServicesSection() {
  const services = [
    {
      icon: ChipIcon,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics solutions that transform operations and enable data-driven decision-making.',
      items: ['AI strategy & consulting', 'Machine learning models', 'Predictive analytics', 'Natural language processing'],
    },
    {
      icon: CodeIcon,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to fit your unique business needs and drive operational efficiency.',
      items: ['Web applications', 'Mobile apps', 'Enterprise software', 'API development'],
    },
    {
      icon: ServerIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management to support your digital transformation journey.',
      items: ['Cloud migration', 'Infrastructure as code', 'DevOps automation', 'Cloud security'],
    },
    {
      icon: DesktopIcon,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and technology stack.',
      items: ['Process digitization', 'Legacy system modernization', 'Digital strategy', 'Change management'],
    },
    {
      icon: RocketIcon,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation solutions that reduce manual work and enhance productivity across your organization.',
      items: ['Workflow automation', 'RPA implementation', 'Intelligent document processing', 'Chatbots & virtual assistants'],
    },
    {
      icon: ChartPieIcon,
      title: 'Data Analytics & Insights',
      description: 'Advanced analytics and business intelligence solutions to unlock insights from your data.',
      items: ['Data visualization', 'Business intelligence', 'Real-time analytics', 'Data warehousing'],
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
            Our Digital & AI Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital and AI solutions tailored to help your business thrive in the digital age.
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
