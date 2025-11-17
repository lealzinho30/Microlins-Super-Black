import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'O desconto de 87% é real?',
      answer: 'Sim! Durante o mês de descontos, todos os cursos da Microlins estão com 87% OFF. É uma oportunidade única para investir na sua carreira profissional.'
    },
    {
      question: 'O cupom é válido para todos os cursos?',
      answer: 'Sim! O desconto de 87% é válido para qualquer um dos 70+ cursos disponíveis na Microlins. Escolha o curso ideal para você!'
    },
    {
      question: 'O certificado é válido no mercado?',
      answer: 'Absolutamente! Todos os nossos certificados são válidos e reconhecidos no mercado de trabalho, aumentando suas chances de conseguir um bom emprego.'
    },
    {
      question: 'Quanto tempo dura o curso?',
      answer: 'A duração varia de acordo com o curso escolhido. Nossos cursos são flexíveis e se adaptam à sua rotina, com aulas presenciais e suporte completo.'
    },
    {
      question: 'Posso parcelar o pagamento?',
      answer: 'Sim! Oferecemos diversas opções de pagamento e parcelamento. Entre em contato pelo WhatsApp para conhecer todas as condições especiais.'
    },
    {
      question: 'Até quando o desconto é válido?',
      answer: 'O desconto de 87% é válido apenas durante o mês de descontos. Não perca esta oportunidade única! Entre em contato agora mesmo.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0e0677] via-[#1a0f9e] to-[#0e0677] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f3115d] rounded-full filter blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f3115d] rounded-full filter blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-[#f3115d]/20 backdrop-blur-sm border border-[#f3115d]/50 rounded-full">
            <span className="text-[#f3115d] font-bold text-sm uppercase tracking-wider">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3115d] to-[#ff1a6d]">Frequentes</span>
          </h2>
          <p className="text-xl text-white/80">
            Tire todas as suas dúvidas sobre nossos cursos
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#f3115d]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between group"
              >
                <span className="text-white font-bold text-lg md:text-xl pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#f3115d] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="text-white/90 leading-relaxed border-t border-white/20 pt-4">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12">
          <p className="text-white text-lg mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5511945877291?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20cursos%20da%20Microlins."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#f3115d] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#ff1a6d] transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Falar com Atendente</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

