'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import CalendarIcon from '../icons/calendar-small.svg';
import ArrowRightIcon from '../icons/arrow-right-article.svg';

type InsightsCategory = {
  _id: string;
  name: string;
  slug: string;
};

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

export default function InsightsContent() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [categories, setCategories] = useState<InsightsCategory[]>([]);
  const [insights, setInsights] = useState<InsightItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState<string | null>(null);
  const [subscribeError, setSubscribeError] = useState<string | null>(null);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const apiBase = process.env.NEXT_PUBLIC_API_URL;

  const parseReadTime = (value: string) => {
    const words = value.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
  };

  const plainText = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
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
        setError('API URL is not configured.');
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const [categoriesResponse, insightsResponse] = await Promise.all([
          fetch(`${apiBase}/app/insights-categories`, { cache: 'no-store' }),
          fetch(`${apiBase}/app/cms/insights?page=1&limit=100`, { cache: 'no-store' }),
        ]);

        if (!categoriesResponse.ok) {
          throw new Error('Failed to load categories');
        }
        if (!insightsResponse.ok) {
          throw new Error('Failed to load insights');
        }

        const categoriesJson = await categoriesResponse.json();
        const insightsJson = await insightsResponse.json();
        const categoriesList = Array.isArray(categoriesJson)
          ? categoriesJson
          : Array.isArray(categoriesJson?.data)
            ? categoriesJson.data
            : Array.isArray(categoriesJson?.data?.data)
              ? categoriesJson.data.data
              : [];
        const insightsList = Array.isArray(insightsJson?.data)
          ? insightsJson.data
          : Array.isArray(insightsJson?.data?.data)
            ? insightsJson.data.data
            : Array.isArray(insightsJson)
              ? insightsJson
              : [];
        setCategories(categoriesList);
        setInsights(insightsList);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load insights');
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, [apiBase]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const item of insights) {
      const key = item.insightCategorySlug || 'uncategorized';
      counts[key] = (counts[key] || 0) + 1;
    }
    return counts;
  }, [insights]);

  const categoryItems = useMemo(
    () => [
      { slug: 'all', name: 'All Insights', count: insights.length },
      ...categories.map((category) => ({
        slug: category.slug,
        name: category.name,
        count: categoryCounts[category.slug] || 0,
      })),
    ],
    [categories, insights.length, categoryCounts],
  );

  const displayedInsights = useMemo(() => {
    if (activeCategory === 'all') return insights;
    return insights.filter((item) => item.insightCategorySlug === activeCategory);
  }, [activeCategory, insights]);

  const resolveCategoryLabel = (slug?: string) => {
    if (!slug) return 'GENERAL';
    const found = categories.find((category) => category.slug === slug);
    return (found?.name || slug).toUpperCase();
  };

  const formatDate = (value?: string) => {
    if (!value) return 'Recently';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'Recently';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section className="grid lg:grid-cols-[312px_1fr] gap-12">
      {/* Left Sidebar */}
      <div className="space-y-6">
        {/* Categories */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900">Categories</h3>
          
          <div className="space-y-3">
            {categoryItems.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={`w-full flex items-center justify-between px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category.slug
                    ? 'bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white shadow-lg'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
                style={
                  activeCategory === category.slug
                    ? { boxShadow: '0px 4px 6px rgba(254, 215, 170, 0.50), 0px 10px 15px rgba(254, 215, 170, 0.50)' }
                    : {}
                }
              >
                <span>{category.name}</span>
                <span className="text-xs font-medium">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Subscribe Box */}
        <div 
          className="relative bg-gray-900 rounded-2xl p-6 space-y-2 overflow-hidden"
        >
          {/* Blur Background */}
          <div 
            className="absolute top-0 right-0 w-16 h-20 rounded-full"
            style={{
              backgroundColor: 'rgba(255, 87, 34, 0.30)',
              filter: 'blur(64px)',
            }}
          />

          <div className="relative z-10 space-y-2">
            <h3 className="text-lg font-bold text-white">Subscribe</h3>
            <p className="text-xs text-gray-400">
              Get the latest insights directly to your inbox.
            </p>

            <div className="pt-2 space-y-3">
              <input
                type="email"
                placeholder="Email address"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-800 text-sm text-gray-300 placeholder-gray-500 rounded-lg border-none outline-none focus:ring-2 focus:ring-[#ff3333]"
              />
              <button
                type="button"
                onClick={async () => {
                  if (!apiBase) {
                    setSubscribeError('API URL is not configured.');
                    return;
                  }
                  const email = subscriberEmail.trim().toLowerCase();
                  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    setSubscribeError('Please enter a valid email address.');
                    return;
                  }
                  setSubscribeError(null);
                  setSubscribeMessage(null);
                  setIsSubscribing(true);
                  try {
                    const response = await fetch(`${apiBase.replace(/\/+$/, '')}/app/newsletter-subscribers`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        email,
                        source: 'tsr-insights',
                      }),
                    });
                    if (!response.ok) {
                      const errorData = await response
                        .json()
                        .catch(() => ({ message: 'Failed to subscribe' }));
                      throw new Error(errorData.message || 'Failed to subscribe');
                    }
                    setSubscriberEmail('');
                    setSubscribeMessage('Subscribed successfully.');
                  } catch (err) {
                    setSubscribeError(err instanceof Error ? err.message : 'Failed to subscribe');
                  } finally {
                    setIsSubscribing(false);
                  }
                }}
                disabled={isSubscribing}
                className="w-full bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg transition-all disabled:opacity-60"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
              {subscribeMessage ? (
                <p className="text-xs text-green-300">{subscribeMessage}</p>
              ) : null}
              {subscribeError ? (
                <p className="text-xs text-red-300">{subscribeError}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Right Content - Articles Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {isLoading ? (
          <div className="col-span-2 rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-500">
            Loading insights...
          </div>
        ) : error ? (
          <div className="col-span-2 rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
            {error}
          </div>
        ) : displayedInsights.length === 0 ? (
          <div className="col-span-2 rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-500">
            No insights found for this category.
          </div>
        ) : displayedInsights.map((article) => (
          <div
            key={article._id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="relative w-full h-48 bg-gray-200">
              {article.featuredImage ? (
                <img
                  src={resolveImageUrl(article.featuredImage)}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
              ) : null}
              <div className="absolute inset-0 bg-black/10" />
              <span className="absolute top-4 left-4 bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white px-3 py-1 rounded text-xs font-bold tracking-wide uppercase">
                {resolveCategoryLabel(article.insightCategorySlug)}
              </span>
            </div>

            {/* Article Content */}
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-2.5 h-3" style={{ color: '#9ca3af' }} />
                  <span>{formatDate(article.createdAt)}</span>
                </div>
                <span>•</span>
                <span>{parseReadTime(plainText(article.content || ''))}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {article.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {article.metaDescription || plainText(article.content).slice(0, 160)}
              </p>

              <Link
                href={`/article/${article.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff3333] hover:gap-3 transition-all"
              >
                Read Article
                <ArrowRightIcon className="w-2.5 h-2" style={{ color: '#ff3333' }} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}