'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

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

function stripHtml(input: string) {
  return (input || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function getSummary(item: InsightItem) {
  if (item.metaDescription) return item.metaDescription;
  const plain = stripHtml(item.content);
  return plain ? `${plain.slice(0, 220)}${plain.length > 220 ? '...' : ''}` : '';
}

function resolveImageUrl(apiBase: string | undefined, value?: string) {
  const raw = (value || '').trim();
  if (!raw) return '';
  if (/^https?:\/\//i.test(raw)) return raw;
  if (raw.startsWith('/images/')) return raw;
  if (!apiBase) return raw;
  const base = apiBase.replace(/\/+$/, '');
  const path = raw.startsWith('/') ? raw : `/${raw}`;
  return `${base}${path}`;
}

export default function ImpactPublicInsightsSection() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;
  const [items, setItems] = useState<InsightItem[]>([]);
  const [categorySlug, setCategorySlug] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const demoInsights: InsightItem[] = useMemo(
    () => [
      {
        _id: 'demo-impact-featured',
        slug: 'demo-impact-public-featured',
        title: 'Demo insight: Digital innovation roadmaps for public agencies',
        metaDescription:
          'Sample content for layout while we wire the final Impact & Public Systems feed.',
        content:
          '<p>Demo insight content about evidence-led public systems transformation.</p>',
        featuredImage: '/images/about/business-team.jpg',
        insightCategorySlug: 'impact-public-systems',
        createdAt: new Date().toISOString(),
      },
      {
        _id: 'demo-impact-2',
        slug: 'demo-impact-public-2',
        title: 'Demo insight: Horizon scanning for institutional capability',
        metaDescription: 'Sample insight card displayed until real CMS content is connected.',
        content: '<p>Demo insight content for horizon scanning and foresight.</p>',
        featuredImage: '/images/about/business-team.jpg',
        insightCategorySlug: 'impact-public-systems',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        _id: 'demo-impact-3',
        slug: 'demo-impact-public-3',
        title: 'Demo insight: Measuring public programme outcomes',
        metaDescription: 'Sample insight card displayed until real CMS content is connected.',
        content: '<p>Demo insight content for monitoring, evaluation and learning.</p>',
        featuredImage: '/images/about/business-team.jpg',
        insightCategorySlug: 'impact-public-systems',
        createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
      },
    ],
    [],
  );

  useEffect(() => {
    const load = async () => {
      if (!apiBase) {
        setItems([]);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const [categoriesResponse, insightsResponse] = await Promise.all([
          fetch(`${apiBase}/app/insights-categories`, { cache: 'no-store' }),
          fetch(`${apiBase}/app/cms/insights?page=1&limit=100`, { cache: 'no-store' }),
        ]);

        const categoriesJson = await categoriesResponse.json();
        const insightsJson = await insightsResponse.json();

        const categoriesList: InsightsCategory[] = Array.isArray(categoriesJson)
          ? categoriesJson
          : Array.isArray(categoriesJson?.data)
            ? categoriesJson.data
            : Array.isArray(categoriesJson?.data?.data)
              ? categoriesJson.data.data
              : [];

        const insightsList: InsightItem[] = Array.isArray(insightsJson?.data)
          ? insightsJson.data
          : Array.isArray(insightsJson?.data?.data)
            ? insightsJson.data.data
            : Array.isArray(insightsJson)
              ? insightsJson
              : [];

        const normalized = (s: string) => s.toLowerCase();
        const findCategory =
          categoriesList.find(
            (c) =>
              (normalized(c.name).includes('impact') && normalized(c.name).includes('public')) ||
              normalized(c.slug).includes('public') ||
              normalized(c.name).includes('government') ||
              normalized(c.slug).includes('impact'),
          ) || null;

        const slug = findCategory?.slug || null;
        setCategorySlug(slug);

        const filtered = slug ? insightsList.filter((i) => i.insightCategorySlug === slug) : [];
        filtered.sort((a, b) => {
          const da = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const db = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return db - da;
        });
        setItems(filtered);
      } catch {
        setItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, [apiBase]);

  const isDemo = items.length === 0;
  const list = isDemo ? demoInsights : items;
  const featured = list[0];
  const rest = list.slice(1);

  const categoryLabel = useMemo(() => {
    if (!categorySlug) return 'Impact & Public Systems';
    return categorySlug.replace(/-/g, ' ');
  }, [categorySlug]);

  if (isLoading) return null;
  if (!featured) return null;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="space-y-3 mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-[#E53D00]">
            Featured Insights
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Impact & public systems research & analysis
          </h2>
          <p className="text-lg text-gray-600">
            Insights tagged with <span className="font-semibold">{categoryLabel}</span>.
          </p>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden"
          style={{ boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.25)' }}
        >
          <div className="w-full h-[420px] bg-gray-800">
            {featured.featuredImage ? (
              <img
                src={resolveImageUrl(apiBase, featured.featuredImage)}
                alt={featured.title}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(0deg, rgba(17,24,39,1) 0%, rgba(17,24,39,0.4) 50%, rgba(17,24,39,0) 100%)',
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-4 text-white">
            <span className="inline-block bg-gradient-to-r from-[#046865] to-[#21A0A0] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
              {categoryLabel}
            </span>
            <h3 className="text-4xl font-bold">{featured.title}</h3>
            <p className="text-lg text-gray-200 max-w-3xl">{getSummary(featured)}</p>

            <div className="pt-2">
              <Link
                href={isDemo ? '/tsr-insights' : `/article/${featured.slug}`}
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all"
              >
                Read More
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        {rest.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center justify-between gap-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900">More insights</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.map((item) => (
                <Link
                  key={item.slug}
                  href={isDemo ? '/tsr-insights' : `/article/${item.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-lg transition-shadow"
                >
                  <div className="h-[180px] bg-gray-800">
                    {item.featuredImage ? (
                      <img
                        src={resolveImageUrl(apiBase, item.featuredImage)}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : null}
                  </div>

                  <div className="p-6 space-y-3">
                    <p className="text-xs font-bold tracking-widest uppercase text-[#E53D00]">
                      {categoryLabel}
                    </p>
                    <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{getSummary(item)}</p>
                    <p className="text-sm font-semibold text-[#046865] group-hover:text-[#21A0A0] transition-colors">
                      Read More <span aria-hidden>→</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
