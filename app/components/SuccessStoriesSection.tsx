'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { successStories } from '../data/success-stories';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SuccessStoriesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 2);
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  useEffect(() => {
    setStartIndex((prev) =>
      Math.min(prev, Math.max(0, successStories.length - cardsPerView)),
    );
  }, [cardsPerView]);

  const maxStart = Math.max(0, successStories.length - cardsPerView);
  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < maxStart;

  const goPrev = () => {
    if (!canGoPrev) return;
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const goNext = () => {
    if (!canGoNext) return;
    setStartIndex((prev) => Math.min(maxStart, prev + 1));
  };

  const visibleStories = successStories.slice(startIndex, startIndex + cardsPerView);

  return (
    <section
      ref={ref}
      id="success-stories"
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="container-custom">
        <div
          className={`flex items-end justify-between gap-4 pb-5 md:pb-6 border-b border-[#E5E7EB] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="heading-section">
            Client success stories
          </h2>
          <Link
            href="/success-stories"
            className="shrink-0 text-sm md:text-base font-medium text-[#21A0A0] hover:text-[#046865] transition-colors"
          >
            See all stories
          </Link>
        </div>

        <div
          className={`relative mt-8 md:mt-10 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Previous success stories"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 hidden md:inline-flex items-center justify-center w-9 h-9 bg-[#21A0A0] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#046865] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            aria-label="Next success stories"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 hidden md:inline-flex items-center justify-center w-9 h-9 bg-[#21A0A0] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#046865] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {visibleStories.map((story) => (
              <Link
                key={story.slug}
                href={`/success-stories/${story.slug}`}
                className="group relative block overflow-hidden rounded-2xl md:rounded-3xl aspect-[16/10] md:aspect-[16/9] min-h-[280px]"
              >
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#046865]/95 via-[#046865]/55 to-[#046865]/25" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-9 space-y-3">
                  <p className="text-xs md:text-sm font-semibold text-[#FFE900]">
                    {story.label}
                  </p>
                  <h3 className="text-xl md:text-2xl lg:text-[1.65rem] font-bold text-white leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-xl">
                    {story.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex md:hidden items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label="Previous success story"
              className="inline-flex items-center justify-center w-9 h-9 bg-[#21A0A0] text-white disabled:opacity-40"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Next success story"
              className="inline-flex items-center justify-center w-9 h-9 bg-[#21A0A0] text-white disabled:opacity-40"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
