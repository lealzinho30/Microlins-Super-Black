import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      title: 'Cursos Profissionais',
      description: 'Formação completa e reconhecida no mercado de trabalho',
      image: 'https://img.freepik.com/free-photo/students-knowing-right-answer_329181-14271.jpg'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Certificado Válido',
      description: 'Certificação oficial que aumenta suas chances de emprego',
      image: 'https://img.freepik.com/free-photo/female-student-holding-certificate_23-2148431604.jpg'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Material Completo',
      description: 'Acesso a todo conteúdo didático e suporte durante o curso',
      image: 'https://img.freepik.com/free-photo/books-assortment-with-copy-space_23-2148898331.jpg'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Professores Qualificados',
      description: 'Instrutores experientes e preparados para te ensinar',
      image: 'https://img.freepik.com/free-photo/teacher-helping-his-student_23-2148892967.jpg'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Flexibilidade de Horários',
      description: 'Aulas que se adaptam à sua rotina e disponibilidade',
      image: 'https://img.freepik.com/free-photo/clock-with-time-management-business-concept_23-2149842415.jpg'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Carreira de Sucesso',
      description: 'Invista no seu futuro profissional com os melhores cursos',
      image: 'https://img.freepik.com/free-photo/successful-business-man-standing-with-his-arms-crossed_1303-20825.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0e0677] rounded-full filter blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f3115d] rounded-full filter blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#0e0677]/10 to-[#f3115d]/10 border border-[#0e0677]/20 rounded-full">
            <span className="text-[#0e0677] font-bold text-sm uppercase tracking-wider">Diferenciais</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0e0677] mb-6">
            Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3115d] to-[#ff1a6d]">Microlins?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold max-w-3xl mx-auto">
            Invista no seu futuro profissional com os melhores cursos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0e0677] to-[#f3115d] rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 z-0" />
              
              {/* Card com imagem de fundo */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border-2 border-transparent group-hover:border-[#f3115d]">
                {/* Imagem de fundo */}
                <img 
                  src={benefit.image}
                  alt={benefit.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0677] via-[#0e0677]/90 to-[#0e0677]/70" />

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, rgba(243, 17, 93, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  {/* Ícone */}
                  <div className="mb-4 inline-block p-4 bg-gradient-to-br from-[#f3115d] to-[#ff1a6d] rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 self-start">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <h3 className="text-2xl font-black text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Decoração */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#f3115d]/20 rounded-full filter blur-3xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
