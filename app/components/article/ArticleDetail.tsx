import React from 'react';
import Link from 'next/link';
import CalendarIcon from '../icons/calendar-small.svg';
import ArrowLeftIcon from '../icons/arrow-left.svg';
import ReportInquiryGate from './ReportInquiryGate';
type ArticleApi = {
  title: string;
  slug: string;
  content?: string;
  metaDescription?: string;
  featuredImage?: string;
  pdfUrl?: string;
  insightCategorySlug?: string;
  createdAt?: string;
};

type CategoryApi = {
  name: string;
  slug: string;
};

function formatDate(value?: string): string {
  if (!value) return 'Recently';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Recently';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getReadTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function resolveAssetUrl(value: string | undefined, apiBase: string): string {
  const raw = (value || '').trim();
  if (!raw) return '';
  if (/^https?:\/\//i.test(raw)) return raw;
  const base = apiBase.replace(/\/+$/, '');
  const path = raw.startsWith('/') ? raw : `/${raw}`;
  return `${base}${path}`;
}

export default async function ArticleDetail({ slug }: { slug: string }) {
  const apiBase = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
  if (!apiBase) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Available</h1>
          <p className="text-gray-600 mb-4">API URL is not configured.</p>
          <Link href="/tsr-insights" className="text-[#ff3333] hover:underline">
            Back to TSR Insights
          </Link>
        </div>
      </div>
    );
  }

  let article: ArticleApi | null = null;
  let categories: CategoryApi[] = [];

  try {
    const [articleRes, categoriesRes] = await Promise.all([
      fetch(`${apiBase}/app/cms/slug/${encodeURIComponent(slug)}`, { cache: 'no-store' }),
      fetch(`${apiBase}/app/insights-categories`, { cache: 'no-store' }),
    ]);

    if (articleRes.ok) {
      const payload = await articleRes.json();
      article = (payload?.data ?? payload) as ArticleApi;
    }
    if (categoriesRes.ok) {
      const data = await categoriesRes.json();
      categories = Array.isArray(data) ? data : [];
    }
  } catch {
    article = null;
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/tsr-insights" className="text-[#ff3333] hover:underline">
            Back to TSR Insights
          </Link>
        </div>
      </div>
    );
  }

  const contentHtml = article.content ?? '';
  const contentText = stripHtml(contentHtml);
  const excerpt = article.metaDescription || contentText.slice(0, 220) || 'No description available.';
  const featuredImageUrl = resolveAssetUrl(article.featuredImage, apiBase);
  const reportUrl = resolveAssetUrl(article.pdfUrl, apiBase);

  return (
    <article className="pt-32 pb-24">
      <div className="container-custom max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/tsr-insights"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#ff3333] transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4" style={{ color: 'currentColor' }} />
          Back to TSR Insights
        </Link>

        {/* Article Header */}
        <div className="space-y-6 mb-12">
          <span className="inline-block bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white px-4 py-1.5 rounded text-xs font-bold tracking-wide uppercase">
            {(categories.find((category) => category.slug === article.insightCategorySlug)?.name ||
              article.insightCategorySlug ||
              'Insights'
            ).toUpperCase()}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-gray-600">
            {excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-3 h-3.5" style={{ color: '#9ca3af' }} />
              <span>{formatDate(article.createdAt)}</span>
            </div>
            <span>•</span>
            <span>{getReadTime(contentHtml)}</span>
          </div>

          {reportUrl ? (
            <div>
              <ReportInquiryGate apiBase={apiBase} reportUrl={reportUrl} articleSlug={article.slug} />
            </div>
          ) : null}
        </div>

        {/* Hero-style Featured Image Block */}
        {featuredImageUrl ? (
          <div className="relative mb-10 overflow-hidden rounded-3xl border border-gray-100 shadow-[0px_20px_40px_rgba(0,0,0,0.18)]">
            <img
              src={featuredImageUrl}
              alt={article.title}
              className="h-[300px] w-full object-cover md:h-[460px]"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(0deg, rgba(17,24,39,0.88) 0%, rgba(17,24,39,0.35) 45%, rgba(17,24,39,0.08) 100%)',
              }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-white md:p-8">
              <span className="inline-block rounded-full bg-gradient-to-r from-[#ff3333] to-[#f97316] px-3 py-1 text-[11px] font-bold uppercase tracking-wide md:px-4 md:py-1.5 md:text-xs">
                {(categories.find((category) => category.slug === article.insightCategorySlug)?.name ||
                  article.insightCategorySlug ||
                  'Insights'
                ).toUpperCase()}
              </span>
              <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-tight md:text-4xl">
                {article.title}
              </h2>
              <p className="mt-2 text-xs text-gray-200 md:text-sm">
                {formatDate(article.createdAt)} • {getReadTime(contentHtml)}
              </p>
            </div>
          </div>
        ) : null}

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml || '<p>No article content available.</p>' }}
          style={{
            '--tw-prose-headings': '#111827',
            '--tw-prose-body': '#4b5563',
            '--tw-prose-links': '#ff3333',
          } as React.CSSProperties}
        />

        {/* Related Articles CTA */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link 
            href="/tsr-insights"
            className="inline-flex items-center gap-2 text-base font-semibold text-[#ff3333] hover:gap-3 transition-all"
          >
            View More Insights
            <ArrowLeftIcon className="w-4 h-4 rotate-180" style={{ color: '#ff3333' }} />
          </Link>
        </div>
      </div>
    </article>
  );
}