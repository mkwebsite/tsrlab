import React from 'react';
import ChevronRightIcon from '../icons/chevron-right-small.svg';

export default function DigitalHero() {
  return (
    <section className="relative pt-48 pb-20 bg-gray-50 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute right-0 top-0 w-1/3 h-full pointer-events-none"
        style={{
          background: 'linear-gradient(270deg, rgba(255,247,237,1) 100%, rgba(255,247,237,0) 0%)',
        }}
      />
      
      {/* Blur Effect */}
      <div 
        className="absolute left-0 top-28 w-32 h-32 rounded-full pointer-events-none"
        style={{
          backgroundColor: 'rgba(255, 87, 34, 0.05)',
          filter: 'blur(64px)',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Digital & AI Solutions
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500">Home</span>
            <ChevronRightIcon className="w-1.5 h-3" style={{ color: '#6b7280' }} />
            <span className="text-sm font-medium text-[#ff3333]">Digital & AI Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
