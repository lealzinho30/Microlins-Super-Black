import React from 'react';

const HowToGet = () => {
  const steps = [
    {
      number: '1',
      title: 'Clique no Botão',
      description: 'Acesse o WhatsApp através do botão "Quero Garantir Meu Desconto"',
      icon: (
        <svg className="w-16 h-16 text-[#f3115d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '2',
      title: 'Informe o Cupom',
      description: 'Mencione o cupom "87% OFF" e escolha o curso desejado',
      icon: (
        <svg className="w-16 h-16 text-[#f3115d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      )
    },
    {
      number: '3',
      title: 'Garanta Seu Desconto',
      description: 'Nossa equipe vai te ajudar a garantir sua vaga com o desconto especial',
      icon: (
        <svg className="w-16 h-16 text-[#f3115d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#0e0677] via-[#1a0f9e] to-[#0e0677] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f3115d] rounded-full filter blur-[200px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f3115d] rounded-full filter blur-[200px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 md:mb-4 px-4 sm:px-6 py-1.5 sm:py-2 bg-[#f3115d]/20 backdrop-blur-sm border border-[#f3115d]/50 rounded-full">
            <span className="text-[#f3115d] font-bold text-xs sm:text-sm uppercase tracking-wider">Passo a passo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 px-4">
            Como Garantir Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3115d] to-[#ff1a6d]">Cupom</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-semibold max-w-3xl mx-auto px-4">
            É simples, rápido e você garante 87% de desconto!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f3115d] to-[#ff1a6d] rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
                {/* Número de fundo gigante */}
                <div className="absolute top-0 right-0 text-[80px] sm:text-[120px] md:text-[150px] font-black text-[#0e0677]/5 leading-none">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  {/* Badge do número */}
                  <div className="inline-block mb-4 sm:mb-5 md:mb-6 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-[#0e0677] to-[#1a0f9e] rounded-xl md:rounded-2xl shadow-xl">
                    <span className="text-white font-black text-base sm:text-lg md:text-xl">PASSO {step.number}</span>
                  </div>
                  
                  {/* Ícone */}
                  <div className="mb-4 sm:mb-5 md:mb-6 inline-block group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl sm:text-2xl font-black text-[#0e0677] mb-3 md:mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Decoração de canto */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#f3115d]/20 to-transparent rounded-full filter blur-2xl" />
              </div>

              {/* Seta conectando (apenas entre os passos) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="p-2 bg-[#f3115d] rounded-full shadow-xl animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA final da seção */}
        <div className="text-center px-4">
          <div className="relative inline-block group w-full sm:w-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#f3115d] via-[#ff1a6d] to-[#f3115d] rounded-2xl filter blur-2xl opacity-75 group-hover:opacity-100 animate-pulse" />
            
            <a
              href="https://wa.me/5511945877291?text=Olá!%20Quero%20garantir%20meu%20desconto%20de%2087%25%20OFF!"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4 bg-gradient-to-r from-[#f3115d] to-[#ff1a6d] text-white font-black text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 rounded-2xl shadow-2xl hover:scale-105 md:hover:scale-110 transition-all duration-300 border-2 border-white/20 w-full sm:w-auto"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>GARANTIR MEU CUPOM AGORA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGet;
