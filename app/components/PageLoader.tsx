'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500"
      style={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? 'auto' : 'none' }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo with pulse animation */}
        <div className="relative animate-pulse">
          <Image
            src="/images/logo.png"
            alt="TSR Lab"
            width={150}
            height={70}
            className="h-16 w-auto"
          />
        </div>

        {/* Loading spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-[#ff3333] rounded-full animate-spin" />
        </div>

        {/* Loading text */}
        <p className="text-sm font-medium text-gray-600 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}