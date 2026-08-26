'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

/**
 * Hero backgrounds + one-liners.
 * Swap `image`, `imageAlt`, and `tagline` as final assets/copy land.
 */
const heroScenes = [
  {
    image: '/images/hero-agri-food.jpg',
    imageAlt: 'Global agri-food and supply systems',
    tagline: 'Intelligence for resilient agri-food systems',
  },
  {
    image: '/images/hero-smart-mobility.jpg',
    imageAlt: 'Smart mobility and urban transport',
    tagline: 'Research that moves smart mobility forward',
  },
  {
    image: '/images/hero-public-systems.png',
    imageAlt: 'Digital innovation in government and public systems',
    tagline: 'Digital innovation for public systems impact',
  },
] as const;

const focusCards = [
  {
    title: 'Agri-Food Systems',
    description: 'Market intelligence, value chains, and strategy for food & agribusiness.',
    href: '/food-agri-business',
    image: '/images/hero-agri-food.jpg',
    imageAlt: 'Agri-food systems',
  },
  {
    title: 'Smart Mobility',
    description: 'Evidence-led research and advisory for next-generation mobility.',
    href: '/smart-mobility',
    image: '/images/hero-smart-mobility.jpg',
    imageAlt: 'Smart mobility',
  },
  {
    title: 'Digital Innovation in Government',
    description: 'Public systems transformation through research, design, and digital.',
    href: '/impact-public-systems',
    image: '/images/hero-public-systems.png',
    imageAlt: 'Digital innovation in government',
  },
] as const;

export default function HeroSection() {
  const [activeScene, setActiveScene] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextScene = useCallback(() => {
    setActiveScene((prev) => (prev + 1) % heroScenes.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextScene, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextScene]);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#046865]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Live / moving photo backgrounds */}
      <div className="absolute inset-0 z-0">
        {heroScenes.map((scene, index) => (
          <div
            key={scene.image}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              index === activeScene ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={index !== activeScene}
          >
            <Image
              src={scene.image}
              alt={scene.imageAlt}
              fill
              priority={index === 0}
              className={`object-cover ${
                index === activeScene ? 'animate-hero-kenburns' : 'scale-110'
              }`}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20" />
      </div>

      <div className="container-custom relative z-10 w-full pt-36 md:pt-44 lg:pt-48 pb-10 md:pb-14 lg:pb-16">
        <div className="max-w-4xl space-y-6 md:space-y-8 mb-10 md:mb-14 lg:mb-16">
          <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-white/80">
            TSR Lab
          </p>

          {/* Rotating one-liner on the live photo */}
          <div className="relative min-h-[3.5rem] sm:min-h-[4.5rem] md:min-h-[5.5rem] lg:min-h-[6.5rem]">
            {heroScenes.map((scene, index) => (
              <h1
                key={scene.tagline}
                className={`absolute inset-x-0 top-0 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-white transition-all duration-700 ${
                  index === activeScene
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                {scene.tagline}
              </h1>
            ))}
          </div>

          <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
            Decision-ready research, strategy, and digital solutions across the systems that matter.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 md:gap-4">
            <Link href="/contact">
              <Button variant="primary">Get in Touch</Button>
            </Link>
            <Link
              href="/our-solutions"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 bg-transparent text-white border-2 border-white/70 hover:border-white hover:bg-white/10 w-full sm:w-auto"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Scene indicators */}
          <div className="flex items-center gap-2 pt-2">
            {heroScenes.map((scene, index) => (
              <button
                key={scene.tagline}
                type="button"
                onClick={() => setActiveScene(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeScene
                    ? 'w-10 bg-[#E53D00]'
                    : 'w-4 bg-white/35 hover:bg-white/60'
                }`}
                aria-label={`Show: ${scene.tagline}`}
              />
            ))}
          </div>
        </div>

        {/* Four focus cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
          {focusCards.map((card, index) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative overflow-hidden rounded-2xl min-h-[180px] md:min-h-[200px] border border-white/15 bg-white/5 backdrop-blur-sm hover:border-white/35 transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
              <div className="relative z-10 flex h-full flex-col justify-end p-5 md:p-6 space-y-2">
                <h2 className="text-lg md:text-xl font-bold text-white">
                  {card.title}
                </h2>
                <p className="text-xs md:text-sm text-white/75 leading-relaxed">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#E53D00] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
