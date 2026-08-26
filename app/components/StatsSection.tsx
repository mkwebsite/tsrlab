'use client';

import React, { useState } from 'react';

const stats = [
  { value: 'PhD-Led', label: 'Research & analytics expertise' },
  { value: 'IIT / IIM', label: 'Founders & Advisors' },
  { value: '10 +', label: 'AI-Native Research Products Under-development' },
  { value: 'Multi-Market', label: 'India • Middle East • Global' },
];

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  return (
    <div className="w-[260px] sm:w-[300px] md:w-[340px] shrink-0 rounded-xl md:rounded-2xl border border-[#f3f4f6] bg-white px-6 py-10 md:px-8 md:py-12 shadow-sm flex flex-col items-center justify-center text-center min-h-[180px] md:min-h-[200px] transition-all duration-500 hover:shadow-lg">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E53D00] mb-3 md:mb-4 leading-tight">
        {stat.value}
      </h3>
      <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.12em] text-gray-400 uppercase max-w-[280px] leading-relaxed">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const loopStats = [...stats, ...stats];

  return (
    <section
      className="py-16 md:py-20 lg:py-24 bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        <div className="relative overflow-hidden" aria-label="Company highlights">
          <div
            className={`flex w-max gap-4 sm:gap-5 md:gap-6 animate-trusted-marquee ${
              isPaused ? 'is-paused' : ''
            }`}
          >
            {loopStats.map((stat, index) => (
              <StatCard key={`${stat.value}-${index}`} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
