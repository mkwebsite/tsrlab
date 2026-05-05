import React from 'react';
import Image from 'next/image';
import LinkedInIcon from './icons/linkedin.svg';
import TwitterIcon from './icons/twitter.svg';
import LocationIcon from './icons/location.svg';
import EmailFooterIcon from './icons/email-footer.svg';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="space-y-5 md:space-y-7 sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="TSR Lab"
              width={103}
              height={50}
              className="h-12 w-auto"
            />
            <div className="space-y-3 text-xs md:text-sm lg:text-base text-[#4b5563] leading-relaxed">
              <p>
                TSR Lab is a specialist consulting firm with a portfolio spanning strategic advisory,
                market research, advanced analytics, digital solutions, and AI-native automation.
              </p>
              <p>
                We deliver decision-ready intelligence and AI solutions - helping organizations move
                faster, operate smarter, and build sustainable competitive advantage.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/tsrlab/" target="_blank" rel="noopener noreferrer" className="p-2 text-[#374151] hover:text-[#ff3333] transition-colors">
                <LinkedInIcon className="w-3.5 h-3.5" style={{ color: 'currentColor' }} />
              </a>
              <a
                href="https://x.com/TSRLab1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#374151] hover:text-[#ff3333] transition-colors"
              >
                <TwitterIcon className="w-4 h-3.5" style={{ color: 'currentColor' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5 md:space-y-7">
            <h3 className="text-xs md:text-sm font-bold tracking-widest text-[#111827] uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="/" className="text-xs md:text-sm text-[#374151] hover:text-[#ff3333] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-xs md:text-sm text-[#374151] hover:text-[#ff3333] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/research-services" className="text-xs md:text-sm text-[#374151] hover:text-[#ff3333] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-xs md:text-sm text-[#374151] hover:text-[#ff3333] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-xs md:text-sm text-[#374151] hover:text-[#ff3333] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Blog */}
          <div className="space-y-5 md:space-y-7">
            <h3 className="text-xs md:text-sm font-bold tracking-widest text-[#111827] uppercase">
              Recent Blog
            </h3>
            <ul className="space-y-4 md:space-y-5">
              <li>
                <a href="#" className="group flex gap-3">
                  <Image
                    src="/images/project-1.jpg"
                    alt="Tech trends blog"
                    width={60}
                    height={60}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <h4 className="text-xs md:text-sm font-semibold text-[#374151] group-hover:text-[#ff3333] transition-colors line-clamp-2">
                      Top 10 Tech Trends for 2024
                    </h4>
                    <p className="text-[10px] md:text-xs text-[#6b7280]">
                      December 15, 2024
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="group flex gap-3">
                  <Image
                    src="/images/project-2.jpg"
                    alt="Digital transformation blog"
                    width={60}
                    height={60}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <h4 className="text-xs md:text-sm font-semibold text-[#374151] group-hover:text-[#ff3333] transition-colors line-clamp-2">
                      Digital Transformation Guide
                    </h4>
                    <p className="text-[10px] md:text-xs text-[#6b7280]">
                      December 10, 2024
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5 md:space-y-7 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs md:text-sm font-bold tracking-widest text-[#111827] uppercase">
              Contact Info
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <LocationIcon className="w-2.5 h-3.5 mt-0.5 md:mt-1 shrink-0" style={{ color: '#ff3333' }} />
                <span className="text-xs md:text-sm text-[#374151]">
                Dubai, UAE. Gurgaon, India. Jaipur, India 
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <span className="text-base leading-none shrink-0" title="United Arab Emirates" aria-hidden>
                  🇦🇪
                </span>
                <a href="tel:+971585912084" className="text-xs md:text-sm text-[#374151] hover:text-[#ff3333] transition-colors">
                  +971 58 591 2084
                </a>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <span className="text-base leading-none shrink-0" title="India" aria-hidden>
                  🇮🇳
                </span>
                <a href="tel:+918144990728" className="text-xs md:text-sm text-[#374151] hover:text-[#ff3333] transition-colors">
                  +91 8144990728
                </a>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <EmailFooterIcon className="w-3.5 h-2.5 shrink-0" style={{ color: '#ff3333' }} />
                <a href="mailto:hello@tsrlab.com" className="text-xs md:text-sm text-[#374151] hover:text-[#ff3333] transition-colors break-all">
                  hello@tsrlab.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-10 border-t border-[#e5e7eb] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <p className="text-xs md:text-sm text-[#4b5563] text-center md:text-left">
            © 2026 TSRLab. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#" className="text-xs md:text-sm text-[#4b5563] hover:text-[#ff3333] transition-colors whitespace-nowrap">
              Privacy Policy
            </a>
            <a href="#" className="text-xs md:text-sm text-[#4b5563] hover:text-[#ff3333] transition-colors whitespace-nowrap">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}