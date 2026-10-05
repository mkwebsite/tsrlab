'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Partner = {
  name: string;
  logo: string;
  url?: string;
};

const fallbackPartners: Partner[] = [
  {
    name: 'Electro AI Lab',
    logo: '/images/partners/electro-ai-lab.png',
    url: 'https://www.electroailab.com/',
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

function resolveLogoUrl(value: string, apiBase?: string) {
  const raw = (value || '').trim();
  if (!raw) return '';
  if (/^https?:\/\//i.test(raw)) return raw;
  if (raw.startsWith('/images/')) return raw;
  if (!apiBase) return raw.startsWith('/') ? raw : `/${raw}`;
  const base = apiBase.replace(/\/+$/, '');
  const path = raw.startsWith('/') ? raw : `/${raw}`;
  return `${base}${path}`;
}

function PartnerCard({ partner }: { partner: Partner }) {
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
  const [partners, setPartners] = useState<Partner[]>(fallbackPartners);
  const apiBase = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const load = async () => {
      if (!apiBase) return;
      try {
        const response = await fetch(`${apiBase}/app/trusted-partners`, { cache: 'no-store' });
        if (!response.ok) return;
        const json = await response.json();
        const list = Array.isArray(json?.data)
          ? json.data
          : Array.isArray(json?.data?.data)
            ? json.data.data
            : Array.isArray(json)
              ? json
              : [];
        setPartners(
          list
            .filter((item: Partner) => item?.name && item?.logo)
            .map((item: Partner) => ({
              name: item.name,
              logo: resolveLogoUrl(item.logo, apiBase),
              url: item.url?.trim() || undefined,
            })),
        );
      } catch {
        // keep fallback partners
      }
    };
    load();
  }, [apiBase]);

  if (partners.length === 0) return null;

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
