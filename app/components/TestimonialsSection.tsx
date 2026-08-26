'use client';

import React, { useEffect, useState } from 'react';
import QuoteIcon from './icons/quote.svg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const fallbackTestimonials = [
  {
    quote: '"TSR Lab kickstarted our stakeholder engagement strategy at a critical stage of the project. Their research and  insights directly informed our strategic direction and strengthened our decision-making at senior levels"',
    name: 'Sarah Johnson',
    role: 'Policy Leader, Sustainability Organization',
    image: '/images/client-1.jpg',
  },
  {
    quote: '"TSR Lab supported us with deep market insights and structured user research that went well beyond surface-level validation. Their work helped us refine the problem statement, prioritize features, and translate an early-stage idea into a robust, scalable software concept ready for execution."',
    name: 'Michael Chen',
    role: 'Founder, Digital Product Venture',
    image: '/images/client-2.jpg',
  },
  {
    quote: '"TSR Lab designed and executed our market surveys with strong methodological rigor and added a valuable analytical layer to our market entry assessment.Highly recommended."',
    name: 'Emily Rodriguez',
    role: 'Strategy Lead, Quick Commerce Venture',
    image: '/images/client-3.jpg',
  },
];

type ClientTestimonial = {
  _id?: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  sortOrder?: number;
};

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [testimonials, setTestimonials] = useState<ClientTestimonial[]>(fallbackTestimonials);
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
        const response = await fetch(`${apiBase}/app/client-testimonials`, { cache: 'no-store' });
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
          setTestimonials(list);
        }
      } catch {
        // Keep fallback testimonials
      }
    };
    load();
  }, [apiBase]);

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center space-y-4 md:space-y-5 mb-12 md:mb-16 lg:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs font-bold tracking-[0.15em] text-[#E53D00] uppercase">
            Testimonials
          </p>
          <h2 className="heading-section">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-2 space-y-6 md:space-y-8 lg:space-y-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <QuoteIcon className="absolute -top-2 -right-2 w-6 h-5 md:w-8 md:h-6" style={{ color: '#FFD4C2' }} />
                <p className="text-sm md:text-base lg:text-lg text-[#4b5563] leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src={resolveImageUrl(testimonial.image)}
                  alt={testimonial.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-[#111827]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] md:text-xs text-[#6b7280]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}