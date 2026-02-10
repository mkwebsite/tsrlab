import React from 'react';
import ArrowRightIcon from '../icons/arrow-right-small.svg';

export default function DigitalCTA() {
  return (
    <section className="py-24 bg-orange-50">
      <div className="container-custom">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Let our expert digital and AI team help you leverage cutting-edge technology to drive innovation and growth. Contact us today to discuss your digital transformation needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105"
              style={{
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.10), 0px 10px 15px rgba(0, 0, 0, 0.10)',
              }}
            >
              Request a Consultation
              <ArrowRightIcon className="w-3.5 h-3" style={{ color: '#ffffff' }} />
            </button>

            <button 
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[#ff3333] text-[#ff3333] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#ff3333] hover:text-white transition-all hover:scale-105"
            >
              View All Services
              <ArrowRightIcon className="w-3.5 h-3" style={{ color: 'currentColor' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
