'use client';

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Image from 'next/image';
function LeverageIllustration({ className = '' }: { className?: string }) {
  return (
     <Image
              src="/images/Slide-img.svg"
              alt="TSR Lab"
              fill
              className="h-14 w-auto"
            />
  );
}

function LeverageCopy() {
  return (
    <div>
      <h2 className="text-xl font-bold leading-[1.14] tracking-[-0.025em] text-(--color-deep-teal) sm:text-2xl md:text-[2rem]">
        Across complex systems of businesses, governments, markets, and institutions, we identify the deep leverage points where change matters most.
      </h2>

      <p className="mt-4 max-w-[540px] text-xs leading-[1.42] text-[#252525] sm:text-sm md:mt-5 md:text-base">
        Our consultants curate precise interventions—a small{' '}
        <span className="font-semibold text-(--color-transition-orange)" aria-label="delta">
          Δ
        </span>{' '}
        in an incentive, decision rule, information flow, technology, capability, or institutional arrangement—that can unlock disproportionate outcomes across the wider system.
      </p>
    </div>
  );
}

export default function LeveragePointsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="leverage-points"
      className="bg-(--color-soft-white) py-14 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="container-custom">
        <div
          className={`mx-auto w-full max-w-[1120px] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col gap-8 sm:hidden">
            <LeverageCopy />
            <LeverageIllustration className="h-auto w-full" />
          </div>

          <div className="relative hidden aspect-[1.76] sm:block">
            <LeverageIllustration className="absolute inset-0 h-full w-full" />
            <div className="absolute left-[38%] top-[6%] w-[54%] max-w-[560px]">
              <LeverageCopy />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
