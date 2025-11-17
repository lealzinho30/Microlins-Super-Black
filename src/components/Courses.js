import React from 'react';

const Courses = () => {
  const courses = [
    {
      name: 'Informática',
      image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Administração',
      image: 'https://img.freepik.com/free-photo/business-people-analyzing-statistics-financial-concept_53876-14835.jpg',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Inglês',
      image: 'https://img.freepik.com/free-photo/english-language-learning-online-education-concept_53876-123815.jpg',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      )
    },
    {
      name: 'Marketing Digital',
      image: 'https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    },
    {
      name: 'Cuidador de Idosos',
      image: 'https://img.freepik.com/free-photo/smiling-nurse-helping-elderly-woman_23-2148088549.jpg',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      name: 'Liderança',
      image: 'https://img.freepik.com/free-photo/business-people-meeting-discussing-ideas_53876-13391.jpg',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      name: 'Logística',
      image: 'https://img.freepik.com/free-photo/logistics-transportation-container-cargo-ship-cargo-plane_335224-1396.jpg',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      name: 'Atendente de Farmácia',
      image: 'https://img.freepik.com/free-photo/pharmacist-woman-working-drugstore_23-2148341960.jpg',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: 'Pacote Office',
      image: 'https://img.freepik.com/free-photo/office-work-desk-with-laptop-coffee_23-2148892964.jpg',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: 'Inteligência Artificial',
      image: 'https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-124672.jpg',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0e0677] via-[#1a0f9e] to-[#0e0677] relative overflow-hidden">
      {/* Background decoration animado */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f3115d] rounded-full filter blur-[200px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f3115d] rounded-full filter blur-[200px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-[#f3115d]/20 backdrop-blur-sm border border-[#f3115d]/50 rounded-full">
            <span className="text-[#f3115d] font-bold text-sm uppercase tracking-wider">Escolha seu futuro</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Cursos com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3115d] via-[#ff1a6d] to-[#f3115d] animate-gradient">87% OFF</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-semibold max-w-3xl mx-auto">
            Escolha o curso ideal para transformar sua carreira profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagem de fundo */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0677] via-[#0e0677]/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
              </div>

              {/* Conteúdo */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                {/* Ícone */}
                <div className="mb-4 p-4 bg-[#f3115d] rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
                
                {/* Nome do curso */}
                <h3 className="text-white font-black text-center text-base md:text-lg leading-tight mb-2">
                  {course.name}
                </h3>

                {/* Badge de desconto */}
                <div className="bg-[#f3115d] text-white text-xs font-black px-3 py-1 rounded-full">
                  87% OFF
                </div>
              </div>

              {/* Borda animada */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f3115d] rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Destaque final */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#f3115d] via-[#ff1a6d] to-[#f3115d] p-[2px] backdrop-blur-md">
          <div className="bg-[#0e0677] rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
              Todos os cursos com <span className="text-[#f3115d]">87% de desconto</span>
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#f3115d]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Material Completo</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#f3115d]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Certificado Válido</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#f3115d]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Professores Qualificados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
