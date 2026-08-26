import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import AgriFoodServicesSection from '../components/food-agri/AgriFoodServicesSection';
import { successStories } from '../data/success-stories';
import AgriFoodInsightsSection from '../components/insights/AgriFoodInsightsSection';

const whoWeWorkWith = [
  'Agribusinesses and food companies',
  'Agtech start-ups',
  'Investors and impact funds',
  'Development agencies and foundations',
  'Governments and policymakers',
  'Farmer producer organizations',
  'Cooperatives',
  'Research institutions',
  'Industry associations',
] as const;

export default function FoodAgriBusinessPage() {
  const agriStories = successStories.filter(
    (story) => story.sector === 'Food & Agri-business',
  );

  return (
    <PageWrapper>
      <main className="min-h-screen bg-white">
        <Header />

        <section className="relative pt-32 md:pt-40 lg:pt-44 pb-18 md:pb-24 bg-[#046865] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Global.jpg"
              alt="Agri-food and supply systems"
              fill
              className="object-cover opacity-25"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#046865]/90 via-[#046865]/75 to-[#032f2e]/95" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,233,0,0.15),transparent_28%)]" />
          </div>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-end">
              <div className="lg:col-span-7 space-y-6 md:space-y-7">
                <div className="flex items-center gap-3">
                  <span className="block w-8 h-[2px] bg-[#FFE900] shrink-0" aria-hidden />
                  <p className="text-[11px] md:text-xs font-medium tracking-[0.14em] uppercase text-white/75">
                    Food & Agri-business
                  </p>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] max-w-4xl">
                  Agri-food intelligence for resilient growth, investment, and system transformation
                </h1>

                <p className="max-w-3xl text-base md:text-lg lg:text-xl text-white/82 leading-relaxed">
                  We help agribusinesses, investors, development actors, and public
                  institutions make sharper decisions across markets, value chains,
                  operations, and innovation priorities.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button variant="primary">Talk to Our Team</Button>
                  </Link>
                  <Link
                    href="/success-stories"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 bg-transparent text-white border border-white/70 hover:border-white hover:bg-white/10"
                  >
                    View Success Stories
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-6 md:p-7 shadow-xl shadow-black/15">
                  <div
                    className="pointer-events-none absolute -top-16 -right-12 h-40 w-40 rounded-full bg-[#21A0A0]/30 blur-3xl"
                    aria-hidden
                  />
                  <p className="relative text-[10px] md:text-[11px] font-medium tracking-[0.16em] uppercase text-white/70">
                    Sector Focus
                  </p>
                  <h2 className="relative mt-4 text-2xl md:text-3xl font-bold text-[#FFE900] leading-tight">
                    From feasibility to frontier opportunity
                  </h2>
                  <p className="relative mt-4 text-sm md:text-base text-white/82 leading-relaxed">
                    Our work spans diligence, market entry, operating model insight,
                    ecosystem mapping, and technology-enabled research for complex
                    agri-food environments.
                  </p>

                  <div className="relative mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/8 p-4">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-white/65">Coverage</p>
                      <p className="mt-2 text-base font-semibold text-white">Markets, value chains, operators</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/8 p-4">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-white/65">Approach</p>
                      <p className="mt-2 text-base font-semibold text-white">Evidence-led and implementation-aware</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AgriFoodServicesSection />

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="block w-8 h-[2px] bg-[#FFE900] shrink-0" aria-hidden />
                  <p className="text-[11px] md:text-xs font-medium tracking-[0.14em] uppercase text-[#6B7280]">
                    Who We Work With
                  </p>
                </div>

                <h2 className="heading-section">Partners across the agri-food ecosystem</h2>
                <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
                  We work with organizations shaping food systems from the ground up,
                  from operating businesses and frontier innovators to capital providers
                  and public-interest institutions.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
                  {whoWeWorkWith.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#E5E7EB] bg-[#FCFFF7] px-5 py-5 md:px-6 md:py-6 shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#E53D00]" aria-hidden />
                        <p className="text-sm md:text-base font-medium text-[#046865] leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#FCFFF7]">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#046865] via-[#0A7A76] to-[#21A0A0] p-8 md:p-10 lg:p-12 shadow-xl shadow-[#046865]/20">
              <div
                className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-[#FFE900]/15 blur-3xl"
                aria-hidden
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <p className="text-[11px] md:text-xs font-medium tracking-[0.16em] uppercase text-white/75">
                    Why clients choose TSR Lab
                  </p>
                  <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
                    Premium thinking, grounded in real sector constraints
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-white/82 leading-relaxed">
                    We bring together rigorous research, commercial realism, and
                    systems thinking so clients can move from uncertainty to
                    decision with greater confidence.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative w-full h-[280px] sm:h-[330px] md:h-[390px] rounded-2xl overflow-hidden border border-white/15 bg-white/10">
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-black/0"
                      aria-hidden
                    />
                    <Image
                      src="/images/why-client-agri-drone.png"
                      alt="Agricultural business with AI-enabled drone and farm data"
                      fill
                      className="object-cover opacity-90"
                      sizes="(max-width: 1024px) 100vw, 480px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {agriStories.length > 0 && (
          <section className="py-12 md:py-16 bg-white">
            <div className="container-custom">
              <div className="flex items-end justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
                <h2 className="heading-section">Client success stories</h2>
                <Link
                  href="/success-stories"
                  className="shrink-0 text-sm md:text-base font-medium text-[#21A0A0] hover:text-[#046865] transition-colors"
                >
                  See all stories
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-8">
                {agriStories.map((story) => (
                  <Link
                    key={story.slug}
                    href={`/success-stories/${story.slug}`}
                    className="group relative block overflow-hidden rounded-2xl aspect-[16/10] min-h-[260px]"
                  >
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#046865]/95 via-[#046865]/55 to-[#046865]/25" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7 space-y-3">
                      <p className="text-xs md:text-sm font-semibold text-[#FFE900]">
                        {story.label}
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                        {story.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/85 leading-relaxed">
                        {story.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <AgriFoodInsightsSection />

        {/* Request consultation CTA */}
        <section className="py-16 md:py-20 bg-[#FCFFF7]">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-3xl bg-white border border-[#E5E7EB] shadow-sm p-8 md:p-10 lg:p-12">
              <div
                className="absolute -top-16 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-[#046865]/20 via-[#21A0A0]/15 to-[#FFE900]/10 blur-3xl"
                aria-hidden
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-12 text-center space-y-5">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#E53D00]">
                    Request consultation
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#046865] leading-tight">
                    Align evidence to action
                  </h2>
                  <p className="text-base md:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
                    Share your goal and context. We’ll reply with a clear recommended next step—whether
                    it’s feasibility, market entry, product validation, or impact evaluation.
                  </p>

                  <div className="pt-2 flex justify-center">
                    <Link href="/contact">
                      <Button variant="primary">Request consultation</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageWrapper>
  );
}

