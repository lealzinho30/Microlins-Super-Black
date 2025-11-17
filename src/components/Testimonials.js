import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      course: 'Informática',
      text: 'Consegui meu emprego logo após terminar o curso! A Microlins mudou minha vida profissional. O investimento valeu cada centavo!',
      rating: 5,
      image: 'https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg',
      result: 'Conseguiu emprego em 2 meses'
    },
    {
      name: 'João Santos',
      course: 'Marketing Digital',
      text: 'Professores excelentes e material completo. Valeu muito a pena o investimento! Agora trabalho como freelancer e ganho bem mais.',
      rating: 5,
      image: 'https://img.freepik.com/free-photo/confident-businessman-posing-office-with-arms-crossed_1303-20459.jpg',
      result: 'Renda aumentou 300%'
    },
    {
      name: 'Ana Costa',
      course: 'Inglês',
      text: 'Aprendi muito e o certificado me ajudou a conseguir uma promoção no trabalho. Recomendo de olhos fechados!',
      rating: 5,
      image: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
      result: 'Promovida após 3 meses'
    },
    {
      name: 'Carlos Oliveira',
      course: 'Administração',
      text: 'Curso de qualidade e preço justo. Recomendo para todos que querem se profissionalizar. Melhor decisão que tomei!',
      rating: 5,
      image: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg',
      result: 'Abriu próprio negócio'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f3115d] rounded-full filter blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0e0677] rounded-full filter blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#0e0677]/10 to-[#f3115d]/10 border border-[#f3115d]/20 rounded-full">
            <span className="text-[#0e0677] font-bold text-sm uppercase tracking-wider">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0e0677] mb-6">
            O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3115d] to-[#ff1a6d]">alunos</span> dizem
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold max-w-3xl mx-auto">
            Histórias reais de quem já transformou a carreira
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0e0677] to-[#f3115d] rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#0e0677] via-[#1a0f9e] to-[#0e0677] p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border-2 border-transparent group-hover:border-[#f3115d] overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#f3115d]/10 rounded-full filter blur-3xl" />
                
                <div className="relative z-10">
                  {/* Aspas grandes decorativas */}
                  <div className="text-[#f3115d] text-6xl font-black mb-4 leading-none opacity-50">"</div>
                  
                  {/* Estrelas */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-[#f3115d]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Depoimento */}
                  <p className="text-white text-lg md:text-xl mb-8 leading-relaxed font-medium">
                    {testimonial.text}
                  </p>

                  {/* Resultado destacado */}
                  {testimonial.result && (
                    <div className="mb-4 inline-block bg-[#f3115d] text-white px-4 py-2 rounded-full text-sm font-black">
                      ✅ {testimonial.result}
                    </div>
                  )}

                  {/* Informações do aluno com foto */}
                  <div className="flex items-center gap-4 border-t border-white/20 pt-6">
                    {/* Foto do aluno */}
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#f3115d] to-[#ff1a6d] rounded-full opacity-75 blur-md" />
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Nome e curso */}
                    <div className="flex-1">
                      <p className="text-white font-black text-lg">{testimonial.name}</p>
                      <p className="text-[#f3115d] text-sm font-semibold">Curso: {testimonial.course}</p>
                    </div>
                    
                    {/* Badge verificado */}
                    <div>
                      <div className="bg-[#f3115d] rounded-full p-2 shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
