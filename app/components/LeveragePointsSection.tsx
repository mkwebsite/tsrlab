'use client';

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function LeverageIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="A complex system balanced on a lever at a point where change can have a large effect"
    >
      <defs>
        <path id="leverage-system-arc" d="M 42 105 Q 108 48 174 105" />
        <marker
          id="leverage-system-arrow"
          markerWidth="7"
          markerHeight="7"
          refX="5"
          refY="3.5"
          orient="auto"
        >
          <path d="M0 0.5 L6 3.5 L0 6.5Z" fill="var(--color-deep-teal)" />
        </marker>
      </defs>

      <text
        fill="var(--color-deep-teal)"
        fontSize="16"
        fontWeight="700"
        letterSpacing="0.18em"
        fontFamily="var(--font-poppins), Poppins, sans-serif"
      >
        <textPath href="#leverage-system-arc" startOffset="50%" textAnchor="middle">
          THE SYSTEM
        </textPath>
      </text>

      <path
        d="M43 151 C45 106 73 82 108 79 C145 76 173 101 176 143 C180 184 155 214 111 217 C68 220 41 193 43 151Z"
        stroke="var(--color-deep-teal)"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="83" cy="111" r="10" fill="var(--color-deep-teal)" />
      <circle cx="135" cy="108" r="7" fill="var(--color-transition-teal)" />
      <circle cx="151" cy="144" r="9" fill="var(--color-deep-teal)" />
      <circle cx="128" cy="185" r="7" fill="var(--color-transition-teal)" />
      <circle cx="81" cy="178" r="9" fill="var(--color-deep-teal)" />
      <circle cx="57" cy="148" r="6" fill="var(--color-transition-teal)" />
      <circle cx="109" cy="147" r="16" fill="var(--color-deep-teal)" />

      <path
        d="M91 113 C102 94 122 96 133 108"
        stroke="var(--color-deep-teal)"
        strokeWidth="1.6"
        fill="none"
        markerEnd="url(#leverage-system-arrow)"
      />
      <path d="M141 113 C153 122 158 133 151 141" stroke="var(--color-deep-teal)" strokeWidth="1.6" fill="none" />
      <path d="M147 153 C141 170 135 181 128 183" stroke="var(--color-deep-teal)" strokeWidth="1.6" fill="none" />
      <path d="M119 188 C101 197 87 190 82 181" stroke="var(--color-deep-teal)" strokeWidth="1.6" fill="none" />
      <path d="M74 173 C61 164 57 154 59 148" stroke="var(--color-deep-teal)" strokeWidth="1.6" fill="none" />
      <path d="M62 140 C67 127 76 116 82 113" stroke="var(--color-deep-teal)" strokeWidth="1.6" fill="none" />
      <path d="M92 116 C98 128 105 137 109 143" stroke="var(--color-transition-teal)" strokeWidth="1.35" fill="none" opacity="0.85" />
      <path d="M119 149 C130 155 143 157 148 151" stroke="var(--color-transition-teal)" strokeWidth="1.35" fill="none" opacity="0.85" />

      <line
        x1="34"
        y1="238"
        x2="526"
        y2="164"
        stroke="#171717"
        strokeWidth="3.4"
        strokeLinecap="round"
      />

      <path
        d="M151 221 L198 221 L175 280 Z"
        fill="#171717"
        stroke="#171717"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      <circle cx="333" cy="193" r="5" fill="#171717" />
      <circle cx="430" cy="178" r="5" fill="#171717" />
      <circle cx="526" cy="164" r="13" fill="var(--color-transition-orange)" />
    </svg>
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
