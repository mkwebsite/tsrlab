import React from 'react';
import ChevronRightIcon from '../icons/chevron-right.svg';
import CalendarIcon from '../icons/calendar.svg';

interface BlogDetailHeroProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
}

export default function BlogDetailHero({ title, author, date, readTime }: BlogDetailHeroProps) {
  return (
    <section className="relative pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 bg-gray-50 overflow-hidden">
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
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-6">
            <a href="/" className="text-xs md:text-sm font-normal text-gray-500 hover:text-[#E53D00] transition-colors">Home</a>
            <ChevronRightIcon className="w-1.5 h-2.5 md:h-3" style={{ color: '#6b7280' }} />
            <a href="/blog" className="text-xs md:text-sm font-normal text-gray-500 hover:text-[#E53D00] transition-colors">Blog</a>
            <ChevronRightIcon className="w-1.5 h-2.5 md:h-3" style={{ color: '#6b7280' }} />
            <span className="text-xs md:text-sm font-medium text-[#E53D00]">Article</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            {title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold">By {author}</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" style={{ color: '#6b7280' }} />
              <span>{date}</span>
            </div>
            <span className="text-gray-300">•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}