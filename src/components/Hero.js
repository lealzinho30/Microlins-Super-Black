import React from 'react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0e0677] via-[#1a0f9e] to-[#0e0677] overflow-hidden">
      {/* Background effects modernos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#f3115d] rounded-full filter blur-[200px] opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f3115d] rounded-full filter blur-[200px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#f3115d]/10 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(243, 17, 93, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(243, 17, 93, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        {/* Logo Microlins */}
        <div className="mb-6 md:mb-12 flex justify-center">
          <div className="relative group">
            <img 
              src="/images/logotipo.png" 
              alt="Microlins Logo" 
              className="h-24 sm:h-32 md:h-48 lg:h-64 w-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Badge de urgência moderno */}
        <div className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-[#f3115d] text-white font-black text-xs sm:text-sm md:text-base rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm animate-bounce hover:scale-110 transition-transform">
          <svg className="w-4 h-4 md:w-5 md:h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          <span className="tracking-wider">OFERTA POR TEMPO LIMITADO</span>
          <svg className="w-4 h-4 md:w-5 md:h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Título principal com efeito gradiente animado */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 leading-tight drop-shadow-2xl px-2">
          <span className="block mb-1 md:mb-2">SUPER BLACK</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f3115d] via-[#ff1a6d] to-[#f3115d] animate-gradient" style={{ backgroundSize: '200% auto' }}>
            MICROLINS
          </span>
        </h1>

        {/* Subtítulo com destaque */}
        <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12 drop-shadow-lg px-4">
          Aproveite o <span className="text-[#f3115d] underline decoration-wavy decoration-[#ff1a6d]">MÊS</span> de descontos
        </p>

        {/* Destaque do desconto ultra moderno */}
        <div className="mb-8 md:mb-12 px-2">
          <div className="inline-block relative group w-full max-w-md">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f3115d] via-[#ff1a6d] to-[#f3115d] rounded-2xl md:rounded-3xl filter blur-xl md:blur-2xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
            
            {/* Card principal */}
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-white px-6 sm:px-8 md:px-12 py-8 md:py-10 rounded-2xl md:rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-300 border-4 border-[#f3115d]">
              {/* Badge de escassez */}
              <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 bg-[#f3115d] text-white px-4 sm:px-6 py-1.5 md:py-2 rounded-full font-black text-xs sm:text-sm animate-bounce whitespace-nowrap">
                ÚLTIMAS VAGAS
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 mt-2">
                <span className="text-[#0e0677] font-bold text-xl sm:text-2xl md:text-3xl line-through opacity-50">R$ 1.200</span>
                <span className="text-[#0e0677] font-black text-4xl sm:text-5xl md:text-7xl drop-shadow-lg">
                  87% OFF
                </span>
              </div>
              <div className="text-[#f3115d] font-black text-2xl sm:text-3xl md:text-4xl mb-2">
                R$ 117,99
              </div>
              <div className="text-[#0e0677] font-bold text-base sm:text-lg md:text-xl">
                em <span className="text-[#f3115d]">qualquer curso</span> da Microlins
              </div>
            </div>
          </div>
        </div>

        {/* Contagem regressiva */}
        <div className="mb-8 md:mb-12 px-4">
          <p className="text-white font-bold text-base sm:text-lg md:text-xl mb-4 md:mb-6 flex items-center justify-center gap-2">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#f3115d]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>A oferta termina em:</span>
          </p>
          <CountdownTimer />
        </div>

        {/* CTA Principal ultra moderno */}
        <div className="px-4 mb-8">
          <div className="relative inline-block group w-full sm:w-auto">
            {/* Glow animado */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#f3115d] via-[#ff1a6d] to-[#f3115d] rounded-2xl filter blur-xl opacity-75 group-hover:opacity-100 animate-pulse" />
            
            <a
              href="https://wa.me/5511945877291?text=Olá!%20Quero%20garantir%20meu%20desconto%20de%2087%25%20OFF!"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4 bg-gradient-to-r from-[#f3115d] to-[#ff1a6d] text-white font-black text-sm sm:text-base md:text-xl lg:text-2xl px-6 sm:px-10 md:px-16 py-4 sm:py-5 md:py-6 rounded-2xl shadow-2xl hover:scale-105 md:hover:scale-110 transition-all duration-300 border-2 border-white/20 w-full sm:w-auto"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 group-hover:scale-110 transition-transform animate-pulse flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="tracking-wide text-center">QUERO GARANTIR MEU DESCONTO</span>
            </a>
          </div>
        </div>

        {/* Texto de garantia moderno */}
        <div className="flex items-center justify-center gap-3 px-4">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#f3115d] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-white text-xs sm:text-sm md:text-base font-semibold">
              Cupom válido até o fim do mês
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
