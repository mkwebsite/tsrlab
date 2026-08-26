'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import EmailIcon from './icons/email.svg';
import ArrowRightIcon from './icons/arrow-right.svg';
import LinkedInIcon from './icons/linkedin.svg';
import TwitterIcon from './icons/twitter.svg';

const navItems = [
  { label: 'Food & Agri-business', href: '/food-agri-business' },
  { label: 'Smart Mobility', href: '/smart-mobility' },
  { label: 'Impact & Public Systems', href: '/impact-public-systems' },
  { label: 'Insights', href: '/tsr-insights' },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Close drawer when pathname changes
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top Bar - Hidden on mobile */}
      <div className="border-b border-gray-100 hidden md:block">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-6">
              <a href="mailto:hello@tsrlab.com" className="flex items-center gap-2 text-xs font-medium text-[#374151] hover:text-[#E53D00] transition-colors">
                <EmailIcon className="w-3 h-2.5" style={{ color: '#E53D00' }} />
                <span>hello@tsrlab.com</span>
              </a>
              <a href="tel:+971585912084" className="flex items-center gap-2 text-xs font-medium text-[#374151] hover:text-[#E53D00] transition-colors">
                <span className="text-sm leading-none shrink-0" title="United Arab Emirates" aria-hidden>
                  🇦🇪
                </span>
                <span>+971 58 591 2084</span>
              </a>
              <a href="tel:+918144990728" className="flex items-center gap-2 text-xs font-medium text-[#374151] hover:text-[#E53D00] transition-colors">
                <span className="text-sm leading-none shrink-0" title="India" aria-hidden>
                  🇮🇳
                </span>
                <span>+91 8144990728</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/tsrlab/" target="_blank" rel="noopener noreferrer" className="text-[#374151] hover:text-[#E53D00] transition-colors">
                <LinkedInIcon className="w-3.5 h-3" style={{ color: 'currentColor' }} />
              </a>
              <a
                href="https://x.com/TSRLab1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#374151] hover:text-[#E53D00] transition-colors"
              >
                <TwitterIcon className="w-4 h-3.5" style={{ color: 'currentColor' }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="TSR Lab"
              width={119}
              height={56}
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  pathname === item.href
                    ? 'text-[#E53D00]'
                    : 'text-[#4b5563] hover:text-[#E53D00]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <Link href="/contact" className="hidden md:block">
            <Button variant="primary" icon={<ArrowRightIcon style={{ color: '#ffffff' }} />}>
              Contact Us
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-gray-700 rounded-full transition-all" />
            <span className="w-6 h-0.5 bg-gray-700 rounded-full transition-all" />
            <span className="w-6 h-0.5 bg-gray-700 rounded-full transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] md:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 h-screen w-80 max-w-[85vw] shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(135deg, #FCFFF7 0%, #ffffff 45%, #E6F6F6 100%)',
          height: '100vh'
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white/80 backdrop-blur-sm">
          <Image
            src="/images/logo.png"
            alt="TSR Lab"
            width={90}
            height={42}
            className="h-10 w-auto"
          />
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav className="flex flex-col p-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`py-3 text-base font-medium transition-colors border-b border-gray-100 ${
                pathname === item.href
                  ? 'text-[#E53D00]'
                  : 'text-[#4b5563] hover:text-[#E53D00]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Info in Drawer */}
        <div className="px-6 py-4 space-y-3 border-t border-gray-100">
          <a href="mailto:hello@tsrlab.com" className="flex items-center gap-3 text-sm font-medium text-[#374151] hover:text-[#E53D00] transition-colors">
            <EmailIcon className="w-4 h-3" style={{ color: '#E53D00' }} />
            <span>hello@tsrlab.com</span>
          </a>
          <a href="tel:+971585912084" className="flex items-center gap-3 text-sm font-medium text-[#374151] hover:text-[#E53D00] transition-colors">
            <span className="text-lg leading-none shrink-0" title="United Arab Emirates" aria-hidden>
              🇦🇪
            </span>
            <span>+971 58 591 2084</span>
          </a>
          <a href="tel:+918144990728" className="flex items-center gap-3 text-sm font-medium text-[#374151] hover:text-[#E53D00] transition-colors">
            <span className="text-lg leading-none shrink-0" title="India" aria-hidden>
              🇮🇳
            </span>
            <span>+91 8144990728</span>
          </a>
        </div>

        {/* Social Links in Drawer */}
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/tsrlab/" target="_blank" rel="noopener noreferrer" className="text-[#374151] hover:text-[#E53D00] transition-colors">
              <LinkedInIcon className="w-5 h-4" style={{ color: 'currentColor' }} />
            </a>
            <a
              href="https://x.com/TSRLab1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#374151] hover:text-[#E53D00] transition-colors"
            >
              <TwitterIcon className="w-5 h-4" style={{ color: 'currentColor' }} />
            </a>
          </div>
        </div>

        {/* Contact Button in Drawer */}
        <div className="px-6 py-4">
          <Link href="/contact" className="block">
            <Button variant="primary" icon={<ArrowRightIcon style={{ color: '#ffffff' }} />}>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}