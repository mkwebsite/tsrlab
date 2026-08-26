import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { successStories } from '../data/success-stories';

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-36 md:pt-44 lg:pt-48 pb-10 md:pb-14 bg-[#FCFFF7]">
        <div className="container-custom">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#6B7280] mb-3">
            TSR Lab
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#046865]">
            Client success stories
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-[#4B5563] leading-relaxed">
            Explore how TSR Lab partners with clients across agri-food, smart mobility, and public
            systems to turn evidence into strategy and delivery.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {successStories.map((story) => (
              <Link
                key={story.slug}
                href={`/success-stories/${story.slug}`}
                className="group relative block overflow-hidden rounded-2xl md:rounded-3xl aspect-[16/10] min-h-[280px]"
              >
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#046865]/95 via-[#046865]/55 to-[#046865]/25" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 space-y-3">
                  <p className="text-xs md:text-sm font-semibold text-[#FFE900]">
                    {story.label}
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-snug">
                    {story.title}
                  </h2>
                  <p className="text-sm md:text-base text-white/85 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
