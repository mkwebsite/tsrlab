'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ArrowRightIcon from '../icons/arrow-right.svg';

type ProjectCategory = 'All Projects' | 'Consulting' | 'Research' | 'Strategy' | 'Technology' | 'Innovation';

interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'All Projects'>;
  image: string;
  imageAlt: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Market Expansion Strategy',
    description: 'Developed a comprehensive market entry and expansion strategy for a regional business entering new international...',
    category: 'Strategy',
    image: 'https://pixabay.com/get/g514f0d5a4804ade79ac48d7ef83a6ee51dd8475169abd5225a01691c79aadaabbd8fa79939b12c90425218b111f7dcde.svg',
    imageAlt: 'World map illustration showing global market expansion strategy by GDJ on Pixabay',
  },
  {
    id: 2,
    title: 'Business Intelligence Dashboard',
    description: 'Designed and implemented a data-driven business intelligence dashboard to improve executive decision-making.',
    category: 'Technology',
    image: '/images/project-2.jpg',
    imageAlt: 'Business intelligence dashboard with analytics and charts',
  },
  {
    id: 3,
    title: 'Consumer Behavior Research',
    description: 'Conducted in-depth consumer research to analyze purchasing behavior and emerging market trends.',
    category: 'Research',
    image: 'https://images.pexels.com/photos/6476250/pexels-photo-6476250.jpeg',
    imageAlt: 'Colleagues reviewing business data on a tablet in a modern office setting - Mikael Blomkvist on Pexels',
  },
  {
    id: 4,
    title: 'Operational Efficiency Consulting',
    description: 'Optimized internal processes to improve operational efficiency and reduce costs for enterprise clients.',
    category: 'Consulting',
    image: 'https://images.pexels.com/photos/7108466/pexels-photo-7108466.jpeg',
    imageAlt: 'Business professionals discussing strategy around a table with a laptop in an office setting - Tiger Lily on Pexels',
  },
  {
    id: 5,
    title: 'Innovation Roadmap Development',
    description: 'Created a long-term innovation roadmap to support sustainable growth and digital transformation.',
    category: 'Innovation',
    image: 'https://pixabay.com/get/g57378b7f47bc26f7d899f3e911fbaa4f4a8d006b0aed9c5d593af4d6045877481720fafb4f6a1873f3d5e6666a1f9ea3.svg',
    imageAlt: 'Yellow lightbulb representing innovation and creative ideas by Clker-Free-Vector-Images on Pixabay',
  },
  {
    id: 6,
    title: 'Competitive Market Analysis',
    description: 'Delivered competitive analysis and benchmarking to support strategic positioning and investment decisions.',
    category: 'Research',
    image: 'https://pixabay.com/get/g8717b99cf6ce1cb83a98e54eef066590f5645c757033a1636f6f5393dc5f1d22e8bb28f8aea96522e0000063c7005bc9.svg',
    imageAlt: 'Colorful bar charts and graphs showing market analysis data by TheDigitalArtist on Pixabay',
  },
];

const categories: ProjectCategory[] = ['All Projects', 'Consulting', 'Research', 'Strategy', 'Technology', 'Innovation'];

const categoryColors: Record<Exclude<ProjectCategory, 'All Projects'>, string> = {
  Strategy: 'bg-[#ff3333] text-white',
  Technology: 'bg-[#2563eb] text-white',
  Research: 'bg-[#10b981] text-white',
  Consulting: 'bg-[#3b82f6] text-white',
  Innovation: 'bg-[#8b5cf6] text-white',
};

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore a selection of our recent consulting, research, and strategy projects delivered for clients across industries. We pride ourselves on delivering measurable impact and data-driven solutions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleProjects(6);
              }}
              className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white shadow-lg shadow-[#ff3333]/30'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#ff3333] hover:text-[#ff3333]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Project Image */}
              <div className="relative h-56 md:h-64 bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ width: '100%', height: '100%' }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ff3333] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between gap-3">
                  <a 
                    href="#"
                    className="inline-flex items-center gap-2 text-[#ff3333] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    View Project
                    <ArrowRightIcon className="w-3 h-3" style={{ color: '#ff3333' }} />
                  </a>
                  <button className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-[#ff3333] hover:text-white transition-all">
                    More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-12 py-4 bg-gray-100 text-gray-900 rounded-full font-bold text-base hover:bg-gray-200 transition-all"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}