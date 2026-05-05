'use client';

import React from 'react';
import Button from './Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 lg:items-stretch">
          {/* Left Image — stretches to match right column height on large screens */}
          <div
            className={`relative w-full aspect-[560/450] lg:aspect-auto lg:min-h-0 lg:h-full min-h-[260px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <img
              src="/images/about-image.svg"
              alt="Team discussion"
              className="absolute inset-0 h-full w-full object-cover object-center rounded-3xl"
            />
          </div>

          {/* Right Content */}
          <div className={`flex flex-col space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e2345]">
              Join our upcoming AI Workshop
            </h2>

            <div className="space-y-4 md:space-y-5 text-sm md:text-base lg:text-lg text-[#4b5563] leading-relaxed">
              <p>
                Learn how AI can accelerate research and analytics workflows used by analysts, researchers,
                and consulting teams.
              </p>
              <p>In this hands-on workshop, you will learn how to:</p>
              <ul className="space-y-2">
                {[
                  'Discover and map relevant research sources faster',
                  'Extract insights from reports, PDFs, and datasets',
                  'Analyze qualitative and quantitative data',
                  'Conduct rapid market and policy landscape analysis',
                  'Build AI agents to automate repetitive research tasks',
                  'Design AI-enabled research workflows',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3333] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Designed for analysts, researchers, consultants, and decision-makers across organizations.
              </p>
              <p>
                Led by a Strategy, Research &amp; Analytics leader with global consulting experience.
              </p>
            </div>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScdPT7RcgASMgqo2x1DgnfW4eNbjnlhzDhf1F4umcyROPkTOw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">
                Express Your Interest
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}