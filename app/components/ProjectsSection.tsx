'use client';

import React, { useEffect, useState } from 'react';
import ArrowRightCircleIcon from './icons/arrow-right-circle.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BLOG_CARD_PHOTOS } from '@/lib/sitePhotos';

const fallbackProjects = [
  {
    _id: '1',
    title: 'Competitive Landscape Assessment for Market Entry in the UAE',
    description: 'Consumer Delivery Company - Dubai, UAE',
    image: BLOG_CARD_PHOTOS[0],
  },
  {
    _id: '2',
    title: 'Customer Insights Tracking & User Feedback Analysis Report',
    description: 'AgTech Startup - Gurgaon, India',
    image: BLOG_CARD_PHOTOS[1],
  },
  {
    _id: '3',
    title: 'Stakeholder Mapping & Stakeholder Engagement Strategy',
    description: 'Sustainability Organization - Global',
    image: BLOG_CARD_PHOTOS[2],
  },
  {
    _id: '4',
    title: 'Company Turnaround and Go-to-Market Pitch Redesign',
    description: 'Digital Solutions Company - Jaipur, India',
    image: BLOG_CARD_PHOTOS[3],
  },
];

type EngagementItem = {
  _id: string;
  title: string;
  description: string;
  image: string;
  sortOrder?: number;
};

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [projects, setProjects] = useState<EngagementItem[]>(fallbackProjects);
  const apiBase = process.env.NEXT_PUBLIC_API_URL;

  const resolveImageUrl = (value: string) => {
    const raw = (value || '').trim();
    if (!raw) return '';
    if (/^https?:\/\//i.test(raw)) return raw;
    if (!apiBase) return raw;
    const base = apiBase.replace(/\/+$/, '');
    const path = raw.startsWith('/') ? raw : `/${raw}`;
    return `${base}${path}`;
  };

  useEffect(() => {
    const load = async () => {
      if (!apiBase) return;
      try {
        const response = await fetch(`${apiBase}/app/engagements`, { cache: 'no-store' });
        if (!response.ok) return;
        const json = await response.json();
        const list = Array.isArray(json?.data)
          ? json.data
          : Array.isArray(json?.data?.data)
            ? json.data.data
            : Array.isArray(json)
              ? json
              : [];
        if (list.length > 0) {
          setProjects(list);
        }
      } catch {
        // keep fallback projects
      }
    };
    load();
  }, [apiBase]);

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2345] mb-4">
            Our Recent Engagements
          </h2>
          <p className="text-base md:text-lg text-[#1e2345]/70 max-w-3xl mx-auto">
            A snapshot of our recent research and advisory works for startups, sustainability organization, consumer delivery company and others
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {projects.map((project, index) => (
            <div
              key={project._id}
              className={`relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              onMouseEnter={() => setHoveredId(project._id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <img
                src={resolveImageUrl(project.image)}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${hoveredId === project._id ? 'opacity-100' : 'opacity-0'}`} />
              
              {/* Content */}
              <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-all duration-300 ${hoveredId === project._id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/90">
                  {project.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-[#ff3333] rounded-2xl transition-opacity duration-300 ${hoveredId === project._id ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}