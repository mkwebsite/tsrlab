import React from 'react';
import Image from 'next/image';
import TrendingUpIcon from '../icons/trending-up.svg';
import ProgressBarIcon from '../icons/progress-bar.svg';

export default function WhoWeAreSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Header */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-xs md:text-sm font-semibold tracking-wider uppercase text-[#ff3333]">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Welcome to Consolution
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm md:text-base leading-relaxed text-gray-600">
                On her way she met a copy. The copy warned the Little Blind Text, that where it came
                from it would have been rewritten a thousand times and everything that was left from its
                origin would be the word.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">
                A small river named Duden flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
                mouth.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">
                On her way she met a copy. The copy warned the Little Blind Text, that where it came
                from it would have been rewritten a thousand times and everything that was left from its
                origin would be the word &quot;and&quot; and the Little Blind Text should turn around and return
                to its own, safe country.
              </p>
            </div>

            {/* Team Info */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex items-center -space-x-3 md:-space-x-4">
                <Image
                  src="/images/about/team-member-1.jpg"
                  alt="Team member"
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/images/about/team-member-2.jpg"
                  alt="Team member"
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="/images/about/team-member-3.jpg"
                  alt="Team member"
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                />
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white bg-white flex items-center justify-center">
                  <span className="text-[10px] md:text-xs font-bold text-gray-600">+12</span>
                </div>
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold text-gray-900">Trusted Team</p>
                <p className="text-[10px] md:text-xs text-gray-500">Experts in every field</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0">
            {/* Blur backgrounds */}
            <div 
              className="absolute -right-8 md:-right-12 top-12 md:top-20 w-20 h-20 md:w-24 md:h-24 rounded-full"
              style={{
                backgroundColor: '#ffedd5',
                filter: 'blur(40px)',
              }}
            />
            <div 
              className="absolute left-1/4 bottom-12 md:bottom-20 w-24 h-24 md:w-32 md:h-32 rounded-full"
              style={{
                backgroundColor: '#f3f4f6',
                filter: 'blur(40px)',
              }}
            />
            
            {/* Main Image Container */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-gray-200">
              <Image
                src="/images/about/business-team.jpg"
                alt="Business team discussion"
                width={664}
                height={600}
                className="w-full h-auto object-cover"
              />
              
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)',
                }}
              />

              {/* Stats Card */}
              <div 
                className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-xl rounded-lg md:rounded-xl border border-white/50 shadow-xl p-3 md:p-4"
                style={{
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.10), 0px 10px 15px rgba(0, 0, 0, 0.10)',
                }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <TrendingUpIcon className="w-3 h-3 md:w-4 md:h-3.5" style={{ color: '#16a34a' }} />
                  <div className="space-y-0.5 md:space-y-1">
                    <p className="text-[10px] md:text-xs font-medium text-gray-500">Growth Rate</p>
                    <p className="text-base md:text-lg font-bold text-gray-900">+145%</p>
                  </div>
                </div>
                <ProgressBarIcon className="w-full h-1 md:h-1.5 mt-1.5 md:mt-2" style={{ color: '#22c55e' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}