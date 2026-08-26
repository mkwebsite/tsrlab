import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { getSuccessStory, successStories } from '../../data/success-stories';

type SuccessStoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return successStories.map((story) => ({ slug: story.slug }));
}

export default async function SuccessStoryDetailPage({ params }: SuccessStoryPageProps) {
  const { slug } = await params;
  const story = getSuccessStory(slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative pt-32 md:pt-40 lg:pt-44 pb-16 md:pb-20 min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src={story.image}
          alt={story.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#046865] via-[#046865]/70 to-[#046865]/35" />
        <div className="container-custom relative z-10">
          <Link
            href="/success-stories"
            className="inline-flex text-sm font-medium text-white/80 hover:text-white transition-colors mb-5"
          >
            ← All success stories
          </Link>
          <p className="text-sm font-semibold text-[#FFE900] mb-3">{story.label}</p>
          <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {story.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-white/85 leading-relaxed">
            {story.excerpt}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <aside className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl bg-[#FCFFF7] p-6 space-y-4">
                <div>
                  <p className="text-xs tracking-[0.12em] uppercase text-[#6B7280] mb-1">Client</p>
                  <p className="text-base font-semibold text-[#046865]">{story.client}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.12em] uppercase text-[#6B7280] mb-1">Sector</p>
                  <p className="text-base font-semibold text-[#046865]">{story.sector}</p>
                </div>
              </div>
              <Link href="/contact">
                <Button variant="primary">Discuss a similar project</Button>
              </Link>
            </aside>

            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-[#046865] mb-3">Challenge</h2>
                <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
                  {story.challenge}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#046865] mb-3">Approach</h2>
                <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
                  {story.approach}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#046865] mb-3">Outcome</h2>
                <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
                  {story.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
