'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const partners: { name: string; logo: string; url?: string }[] = [
  {
    name: 'Electro IT Solutions',
    logo: '/images/partners/electro-it-logo.png',
    url: 'https://www.electroitsolutions.com/',
  },
  { name: 'Businos+', logo: '/images/partners/businos.png', url:'https://businos.com'},
  { name: 'Bonsucro', logo: '/images/partners/bonsucro.png', url: 'https://bonsucro.com' },
  { name: 'Relemac Technologies', logo: '/images/partners/relemac.png' , url:'https://relemaccables.com'},
  { name: 'SILCO', logo: '/images/partners/silco.png' , url:'https://silcopolymers.com'},
  { name: 'Grokking', logo: '/images/partners/grokking.png' , url:'https://www.grokking.in'},
];

/** Logos per slide (matches reference: four cards in a row on desktop) */
const PER_PAGE = 4;
const AUTO_MS = 4500;

function chunkPartners<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function PartnerAgenciesSection() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pages = useMemo(() => chunkPartners(partners, PER_PAGE), []);
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
      className="py-12 md:py-16 bg-white [background-image:radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:22px_22px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-[#1e2345]">Trusted by</h2>
        </div>

        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: `translateX(-${pageIndex * 100}%)` }}
                aria-live="polite"
              >
                {pages.map((page, pi) => (
                  <div
                    key={pi}
                    className="min-w-full shrink-0 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 rounded-xl border border-gray-200 p-3 sm:p-4 md:p-5"
                  >
                    {page.map((partner) => {
                      const logo = (
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          width={200}
                          height={72}
                          className="h-7 w-auto max-w-[90%] object-contain object-center sm:h-9 md:h-10"
                        />
                      );
                      const cardInner = (
                        <div className="flex min-h-[88px] sm:min-h-[100px] md:min-h-[112px] w-full items-center justify-center px-3 py-4 sm:px-4 sm:py-5">
                          {logo}
                        </div>
                      );

                      return (
                        <div
                          key={partner.name}
                          className="w-[calc(50%-0.375rem)] sm:w-[calc(25%-0.94rem)] sm:max-w-[220px] rounded-xl bg-white shadow-md shadow-black/10 ring-1 ring-black/5"
                        >
                          {partner.url ? (
                            <a
                              href={partner.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-xl transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3333]"
                            >
                              {cardInner}
                            </a>
                          ) : (
                            cardInner
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {pageCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-0 sm:-translate-x-1 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#374151] shadow-sm transition hover:border-[#ff3333] hover:text-[#ff3333] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3333]"
                  aria-label="Previous partners"
                >
                  <ChevronLeft className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-0 sm:translate-x-1 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#374151] shadow-sm transition hover:border-[#ff3333] hover:text-[#ff3333] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff3333]"
                  aria-label="Next partners"
                >
                  <ChevronRight className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.75} />
                </button>
              </>
            )}
          </div>

          {pageCount > 1 && (
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
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === pageIndex ? 'true' : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
