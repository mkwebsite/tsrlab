import React from 'react';
import Image from 'next/image';
import BulbIcon from '../icons/bulb.svg';
import TeamIcon from '../icons/team.svg';

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left - Video/Image */}
          <div className="relative order-2 lg:order-1">
            <div 
              className="relative rounded-xl md:rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.25)',
              }}
            >
              <Image
                src="/images/about/video-thumbnail.svg"
                alt="Video thumbnail"
                width={664}
                height={500}
                className="w-full h-auto"
              />
              
              {/* Play Button */}
              <button 
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play video"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-6 md:border-t-8 border-t-transparent border-l-10 md:border-l-12 border-l-[#ff3333] border-b-6 md:border-b-8 border-b-transparent ml-1" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Header */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-xs md:text-sm font-semibold tracking-wider uppercase text-[#ff3333]">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                We Are the Best Consulting Agency
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-sm md:text-base leading-relaxed text-gray-600">
                Separated they live. A small river named Duden flows by their place and supplies it with
                the necessary regelialia. It is a paradisematic country.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">
                A small river named Duden flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
                mouth.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {/* Innovative Ideas */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <BulbIcon className="w-2.5 h-3.5 md:w-3 md:h-4" style={{ color: '#ff3333' }} />
                </div>
                <div className="space-y-0.5 md:space-y-1">
                  <h3 className="text-sm md:text-base font-bold text-gray-900">Innovative Ideas</h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-500">
                    Leading the path with fresh creative
                    strategies.
                  </p>
                </div>
              </div>

              {/* Expert Team */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <TeamIcon className="w-4 h-3.5 md:w-5 md:h-4" style={{ color: '#ff3333' }} />
                </div>
                <div className="space-y-0.5 md:space-y-1">
                  <h3 className="text-sm md:text-base font-bold text-gray-900">Expert Team</h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-500">
                    Professionals dedicated to your
                    business success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}