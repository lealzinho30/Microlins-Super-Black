import React from 'react';

const Comparison = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#0e0677]/10 to-[#f3115d]/10 border border-[#f3115d]/20 rounded-full">
            <span className="text-[#0e0677] font-bold text-sm uppercase tracking-wider">Compare</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0e0677] mb-6">
            Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3115d] to-[#ff1a6d]">Microlins?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sem Microlins */}
          <div className="bg-gray-100 rounded-3xl p-8 border-2 border-gray-300">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 bg-gray-300 rounded-full mb-4">
                <span className="text-gray-600 font-bold text-sm">SEM MICROLINS</span>
              </div>
              <div className="text-5xl font-black text-gray-400 mb-2">R$ 1.200</div>
              <div className="text-gray-500 text-sm">por curso</div>
            </div>
            <ul className="space-y-4">
              {[
                'Preço alto',
                'Sem garantia',
                'Material limitado',
                'Sem suporte',
                'Certificado básico'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Com Microlins */}
          <div className="bg-gradient-to-br from-[#0e0677] to-[#1a0f9e] rounded-3xl p-8 border-4 border-[#f3115d] relative overflow-hidden">
            {/* Badge de destaque */}
            <div className="absolute top-4 right-4 bg-[#f3115d] text-white px-4 py-2 rounded-full font-black text-sm transform rotate-12 animate-pulse">
              MELHOR ESCOLHA
            </div>
            
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 bg-[#f3115d] rounded-full mb-4">
                <span className="text-white font-bold text-sm">COM MICROLINS</span>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-2xl text-white/60 line-through">R$ 1.200</span>
                <span className="text-5xl font-black text-white">R$ 156</span>
              </div>
              <div className="text-[#f3115d] font-black text-lg">87% OFF</div>
            </div>
            <ul className="space-y-4">
              {[
                'Preço especial',
                'Garantia de qualidade',
                'Material completo',
                'Suporte total',
                'Certificado válido'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white">
                  <svg className="w-6 h-6 text-[#f3115d] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA abaixo da comparação */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5511945877291?text=Olá!%20Quero%20garantir%20meu%20desconto%20de%2087%25%20OFF!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f3115d] to-[#ff1a6d] text-white font-black text-xl md:text-2xl px-10 py-5 rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/20"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>GARANTIR MINHA VAGA AGORA</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

