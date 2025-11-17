import React, { useState, useEffect } from 'react';

const FixedCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o CTA fixo após rolar 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 animate-slideDown">
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-[#0e0677]/95 backdrop-blur-lg border-b-2 border-[#f3115d]/50 shadow-2xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left flex items-center gap-4">
            <div className="hidden md:block p-3 bg-gradient-to-br from-[#f3115d] to-[#ff1a6d] rounded-xl shadow-lg animate-pulse">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="text-white font-black text-xl md:text-2xl">
                <span className="text-[#f3115d] animate-pulse">87% OFF</span> - Aproveite Agora!
              </div>
              <div className="text-white/80 text-sm md:text-base font-semibold">
                Oferta válida até o fim do mês
              </div>
            </div>
          </div>
          
          <a
            href="https://wa.me/5511945877291?text=Olá!%20Quero%20garantir%20meu%20desconto%20de%2087%25%20OFF!"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f3115d] to-[#ff1a6d] rounded-xl filter blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-gradient-to-r from-[#f3115d] to-[#ff1a6d] text-white font-black text-lg md:text-xl px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 border-2 border-white/20">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>GARANTIR DESCONTO</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FixedCTA;
