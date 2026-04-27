'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const stats = [
  { value: 'PhD-Led', label: 'Research & analytics expertise' },
  { value: 'IIT / IIM', label: 'Founders & Advisors' },
  { value: '10 +', label: 'AI-Native Research Products Under-development' },
  { value: 'Multi-Market', label: 'India • Middle East • Global' },
];

const PER_PAGE = 3;
const AUTO_MS = 5000;

function chunkStats<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function StatsSection() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pages = useMemo(() => chunkStats(stats, PER_PAGE), []);
  const pageCount = pages.length;

  const goNext = useCallback(() => {
    setPageIndex((i) => (i + 1) % pageCount);
  }, [pageCount]);

  const goPrev = useCallback(() => {
    setPageIndex((i) => (i - 1 + pageCount) % pageCount);
  }, [pageCount]);

  useEffect(() => {
    if (isPaused || pageCount <= 1) return;
    const id = window.setInterval(goNext, AUTO_MS);
    return () => window.clearInterval(id);
  }, [isPaused, pageCount, goNext]);

  return (
    <section
      className="py-16 md:py-20 lg:py-24 bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: `translateX(-${pageIndex * 100}%)` }}
              >
                {pages.map((page, pi) => (
                  <div
                    key={pi}
                    className="min-w-full shrink-0 flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6"
                  >
                    {page.map((stat) => (
                      <div
                        key={stat.value + stat.label}
                        className={`rounded-xl md:rounded-2xl border border-[#f3f4f6]  px-6 py-10 md:px-8 md:py-12 shadow-sm flex flex-col items-center justify-center text-center min-h-[180px] md:min-h-[200px] transition-all duration-500 hover:shadow-lg ${
                          page.length === 1
                            ? 'w-full max-w-md mx-auto'
                            : 'w-full sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-1rem)] md:max-w-[340px]'
                        }`}
                      >
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff3333] mb-3 md:mb-4 leading-tight">
                          {stat.value}
                        </h3>
                        <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.12em] text-gray-400 uppercase max-w-[280px] leading-relaxed">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {pageCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#374151] shadow-sm transition hover:border-[#ff3333] hover:text-[#ff3333] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3333]"
                  aria-label="Previous stats"
                >
                  <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1 sm:translate-x-2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#374151] shadow-sm transition hover:border-[#ff3333] hover:text-[#ff3333] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3333]"
                  aria-label="Next stats"
                >
                  <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.75} />
                </button>

                <div className="flex justify-center gap-2.5 mt-8">
                  {pages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setPageIndex(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === pageIndex
                          ? 'h-2 w-8 bg-[#ff3333] shadow-sm'
                          : 'h-2.5 w-2.5 border-2 border-gray-300 bg-transparent hover:border-gray-400'
                      }`}
                      aria-label={`Go to stats slide ${i + 1}`}
                      aria-current={i === pageIndex ? 'true' : undefined}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
