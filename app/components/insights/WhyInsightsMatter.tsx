import React from 'react';
import PieChartIcon from '../icons/pie-chart.svg';
import UserExpertIcon from '../icons/user-expert.svg';
import RocketIcon from '../icons/rocket.svg';

export default function WhyInsightsMatter() {
  return (
    <section 
      className="bg-gray-50 rounded-3xl border border-gray-100 p-16 space-y-8"
    >
      <h2 className="text-2xl font-bold text-gray-900 text-center">
        Why Our Insights Matter
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Data-Driven Analysis */}
        <div className="space-y-4">
          <PieChartIcon className="w-5 h-5" style={{ color: '#E53D00' }} />
          <div className="space-y-2">
            <h3 className="text-base font-bold text-gray-900">
              Data-Driven Analysis
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Our insights are backed by comprehensive
              research and real-world data analysis.
            </p>
          </div>
        </div>

        {/* Expert Perspectives */}
        <div className="space-y-4">
          <UserExpertIcon className="w-4.5 h-5" style={{ color: '#E53D00' }} />
          <div className="space-y-2">
            <h3 className="text-base font-bold text-gray-900">
              Expert Perspectives
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Learn from industry experts with years of
              experience in business consulting.
            </p>
          </div>
        </div>

        {/* Actionable Strategies */}
        <div className="space-y-4">
          <RocketIcon className="w-5 h-5" style={{ color: '#E53D00' }} />
          <div className="space-y-2">
            <h3 className="text-base font-bold text-gray-900">
              Actionable Strategies
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Get practical, actionable strategies you can
              implement in your business today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}