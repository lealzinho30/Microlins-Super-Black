import React from 'react';

const SocialProof = () => {
  const stats = [
    { number: '50.000+', label: 'Alunos Formados' },
    { number: '30+', label: 'Anos de Experiência' },
    { number: '70+', label: 'Cursos Disponíveis' },
    { number: '95%', label: 'Taxa de Aprovação' }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#0e0677] to-[#1a0f9e] border-y-2 border-[#f3115d]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-5xl font-black text-[#f3115d] mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm md:text-base font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

