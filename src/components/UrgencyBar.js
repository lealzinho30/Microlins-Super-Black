import React from 'react';

const UrgencyBar = () => {
  return (
    <div className="bg-[#f3115d] text-white py-3 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="font-black text-sm md:text-base uppercase tracking-wider">
            ⚡ ÚLTIMAS HORAS! Apenas <span className="text-yellow-300">HOJE</span> você garante 87% OFF
          </span>
          <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;

