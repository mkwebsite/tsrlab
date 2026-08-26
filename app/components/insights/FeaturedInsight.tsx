'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import CalendarIcon from '../icons/calendar.svg';
import ClockIcon from '../icons/clock.svg';
import DotIcon from '../icons/dot-separator.svg';
import ArrowRightIcon from '../icons/arrow-right-read.svg';

type InsightItem = {
  _id: string;
  slug: string;
  title: string;
  metaDescription?: string;
  content: string;
  featuredImage?: string;
  insightCategorySlug?: string;
  createdAt?: string;
};

export default function FeaturedInsight() {
  const [featured, setFeatured] = useState<InsightItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const apiBase = process.env.NEXT_PUBLIC_API_URL;
  const resolveImageUrl = (value?: string) => {
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
      if (!apiBase) {
        setIsLoading(false);
        return;
      }
      try {
        const response = await fetch(`${apiBase}/app/cms/insights?page=1&limit=1`, {
          cache: 'no-store',
        });
        if (!response.ok) throw new Error('Failed to load featured insight');
        const json = await response.json();
        const list = Array.isArray(json?.data)
          ? json.data
          : Array.isArray(json?.data?.data)
            ? json.data.data
            : [];
        const item = list[0] || null;
        setFeatured(item || null);
      } catch {
        setFeatured(null);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [apiBase]);

  const summary = useMemo(() => {
    if (!featured) return '';
    const plain = (featured.content || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return featured.metaDescription || `${plain.slice(0, 200)}${plain.length > 200 ? '...' : ''}`;
  }, [featured]);

  const readTime = useMemo(() => {
    if (!featured) return '1 min read';
    const words = (featured.content || '').replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
    return `${Math.max(1, Math.ceil(words / 200))} min read`;
  }, [featured]);

  const publishedDate = useMemo(() => {
    if (!featured?.createdAt) return 'Recently';
    const date = new Date(featured.createdAt);
    if (Number.isNaN(date.getTime())) return 'Recently';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, [featured]);

  if (isLoading || !featured) return null;

  return (
    <section className="space-y-10">
      {/* Section Header */}
      <div className="space-y-2">
        <p className="text-xs font-bold tracking-widest uppercase text-[#E53D00]">
          Featured Insight
        </p>
        <h2 className="text-4xl font-bold text-gray-900">
          Latest Research & Analysis
        </h2>
        <p className="text-lg text-gray-600">
          Stay informed with our expert insights on business trends, strategies, and
          industry developments.
        </p>
      </div>

      {/* Featured Article Card */}
      <div 
        className="relative rounded-3xl overflow-hidden"
        style={{
          boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div className="w-full h-[500px] bg-gray-800">
          {featured.featuredImage ? (
            <img
              src={resolveImageUrl(featured.featuredImage)}
              alt={featured.title}
              className="h-full w-full object-cover"
            />
          ) : null}
        </div>
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(0deg, rgba(17,24,39,1) 0%, rgba(17,24,39,0.4) 50%, rgba(17,24,39,0) 100%)',
          }}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-12 space-y-4 text-white">
          <span className="inline-block bg-gradient-to-r from-[#046865] to-[#21A0A0] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
            {(featured.insightCategorySlug || 'insight').replace(/-/g, ' ')}
          </span>
          
          <h3 className="text-4xl font-bold">
            {featured.title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-3 h-3.5" style={{ color: '#d1d5db' }} />
              <span>{publishedDate}</span>
            </div>
            <DotIcon className="w-1 h-1" style={{ color: '#9ca3af' }} />
            <div className="flex items-center gap-2">
              <ClockIcon className="w-3.5 h-3.5" style={{ color: '#d1d5db' }} />
              <span>{readTime}</span>
            </div>
          </div>

          <p className="text-lg text-gray-200 max-w-3xl">
            {summary}
          </p>

          <Link 
            href={`/article/${featured.slug}`}
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all"
          >
            Read More
            <ArrowRightIcon className="w-3.5 h-3" style={{ color: '#E53D00' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}