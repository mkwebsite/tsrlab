'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const partners: { name: string; logo: string; url?: string }[] = [
  {
    name: 'Electro IT Solutions',
    logo: '/images/partners/electro-it-logo.png',
    url: 'https://www.electroitsolutions.com/',
  },
  { name: 'Businos+', logo: '/images/partners/businos.png', url: 'https://businos.com' },
  { name: 'Bonsucro', logo: '/images/partners/bonsucro.png', url: 'https://bonsucro.com' },
  {
    name: 'Relemac Technologies',
    logo: '/images/partners/relemac.png',
    url: 'https://relemaccables.com',
  },
  { name: 'SILCO', logo: '/images/partners/silco.png', url: 'https://silcopolymers.com' },
  { name: 'Grokking', logo: '/images/partners/grokking.png', url: 'https://www.grokking.in' },
];

function PartnerCard({ partner }: { partner: (typeof partners)[number] }) {
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
    <div className="w-[160px] sm:w-[200px] md:w-[220px] shrink-0 rounded-xl bg-white shadow-md shadow-black/10 ring-1 ring-black/5">
      {partner.url ? (
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53D00]"
        >
          {cardInner}
        </a>
      ) : (
        cardInner
      )}
    </div>
  );
}

export default function PartnerAgenciesSection() {
  const [isPaused, setIsPaused] = useState(false);
  const loopPartners = [...partners, ...partners];

  return (
    <section
      className="py-12 md:py-16 bg-white [background-image:radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:22px_22px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="heading-section text-center">Trusted by</h2>
        </div>

        <div className="relative overflow-hidden" aria-label="Trusted partner logos">
          <div
            className={`flex w-max gap-3 sm:gap-4 md:gap-5 animate-trusted-marquee ${
              isPaused ? 'is-paused' : ''
            }`}
          >
            {loopPartners.map((partner, index) => (
              <PartnerCard key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
