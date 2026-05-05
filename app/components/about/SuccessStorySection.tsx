import React from 'react';
import Image from 'next/image';
import StarIcon from '../icons/star.svg';
import ArrowForwardIcon from '../icons/arrow-forward.svg';

export default function SuccessStorySection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container-custom">
        <div 
          className="rounded-2xl md:rounded-3xl overflow-hidden relative"
          style={{
            boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.10), 0px 20px 25px rgba(0, 0, 0, 0.10)',
          }}
        >
          {/* Blur Background */}
          <div 
            className="absolute right-10 md:right-20 top-0 w-48 h-36 md:w-64 md:h-48 rounded-full pointer-events-none"
            style={{
              backgroundColor: 'rgba(255, 247, 237, 0.50)',
              filter: 'blur(64px)',
            }}
          />

          <div className="relative bg-white">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 p-6 md:p-10 lg:p-16">
              {/* Left Content */}
              <div className="space-y-4 md:space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 md:gap-2 bg-[#ff3333]/10 rounded-full px-2.5 md:px-3 py-1.5">
                  <StarIcon className="w-2.5 h-2.5 md:w-3 md:h-3" style={{ color: '#ff3333' }} />
                  <span className="text-[10px] md:text-xs font-bold tracking-wide uppercase text-[#ff3333]">
                    Success Story
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Read Our Success Story for Inspiration
                </h2>

                {/* Description */}
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-600">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                  there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                  Semantics.
                </p>

                {/* Button */}
                <button 
                  className="inline-flex items-center justify-center gap-2 bg-[#1f2937] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold text-xs md:text-sm shadow-lg hover:bg-gray-800 transition-all hover:scale-105 w-full sm:w-auto"
                  style={{
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.10), 0px 10px 15px rgba(0, 0, 0, 0.10)',
                  }}
                >
                  Contact us
                  <ArrowForwardIcon className="w-3 h-2.5 md:w-3.5 md:h-3" style={{ color: '#ffffff' }} />
                </button>
              </div>

              {/* Right Stats & Images */}
              <div className="space-y-3 md:space-y-4">
                {/* Stats Cards Row */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {/* Client Satisfaction Card */}
                  <div className="bg-[#ff3333]/5 rounded-xl md:rounded-2xl p-4 md:p-6 space-y-0.5 md:space-y-1">
                    <p className="text-2xl md:text-3xl font-bold text-[#ff3333]">98%</p>
                    <p className="text-xs md:text-sm font-medium text-gray-600">Client Satisfaction</p>
                  </div>
                  
                  {/* Image */}
                  <div className="rounded-xl md:rounded-2xl overflow-hidden">
                    <Image
                      src="/images/about/success-team-1.jpg"
                      alt="Success team collaboration"
                      width={216}
                      height={160}
                      className="w-full h-32 md:h-40 object-cover"
                    />
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {/* Image */}
                  <div className="rounded-xl md:rounded-2xl overflow-hidden">
                    <Image
                      src="/images/about/success-team-2.jpg"
                      alt="Success team member"
                      width={216}
                      height={160}
                      className="w-full h-32 md:h-40 object-cover"
                    />
                  </div>
                  
                  {/* Projects Done Card */}
                  <div className="bg-[#1f2937] rounded-xl md:rounded-2xl p-4 md:p-6 space-y-0.5 md:space-y-1">
                    <p className="text-2xl md:text-3xl font-bold text-white">500+</p>
                    <p className="text-xs md:text-sm font-medium text-gray-300">Projects Done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}