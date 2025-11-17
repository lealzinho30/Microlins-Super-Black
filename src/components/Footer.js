import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0e0677] via-[#1a0f9e] to-[#0e0677] text-white py-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f3115d] rounded-full filter blur-[200px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f3115d] rounded-full filter blur-[200px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Informações de contato */}
          <div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-[#f3115d] to-[#ff1a6d] bg-clip-text text-transparent">
              SUPER BLACK MICROLINS
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#f3115d]/20 backdrop-blur-sm border border-[#f3115d]/30 rounded-xl group-hover:bg-[#f3115d] transition-all duration-300">
                  <svg className="w-6 h-6 text-[#f3115d] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Endereço:</p>
                  <p className="text-white/80">Estr. das Lágrimas, 1712</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#f3115d]/20 backdrop-blur-sm border border-[#f3115d]/30 rounded-xl group-hover:bg-[#f3115d] transition-all duration-300">
                  <svg className="w-6 h-6 text-[#f3115d] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">WhatsApp:</p>
                  <a
                    href="https://wa.me/5511945877291"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f3115d] hover:text-[#ff1a6d] font-bold text-xl transition-colors underline decoration-wavy"
                  >
                    (11) 94587-7291
                  </a>
                </div>
              </div>

              {/* Horário de atendimento */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#f3115d]/20 backdrop-blur-sm border border-[#f3115d]/30 rounded-xl group-hover:bg-[#f3115d] transition-all duration-300">
                  <svg className="w-6 h-6 text-[#f3115d] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Horário:</p>
                  <p className="text-white/80">Seg - Sex: 8h às 18h</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#f3115d]/20 backdrop-blur-sm border border-[#f3115d]/30 rounded-xl group-hover:bg-[#f3115d] transition-all duration-300">
                  <svg className="w-6 h-6 text-[#f3115d] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Instagram:</p>
                  <a
                    href="https://instagram.com/microlinsheliopolis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f3115d] hover:text-[#ff1a6d] font-bold text-xl transition-colors underline decoration-wavy"
                  >
                    @microlinsheliopolis
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="flex flex-col justify-center items-center md:items-end">
            <div className="text-center md:text-right mb-6">
              <p className="text-2xl md:text-3xl font-black mb-2">
                Não perca esta
                <span className="block text-[#f3115d]">oportunidade única!</span>
              </p>
              <p className="text-white/80 text-lg">
                Garanta seu futuro profissional agora
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f3115d] to-[#ff1a6d] rounded-2xl filter blur-xl opacity-75 group-hover:opacity-100 animate-pulse" />
              <a
                href="https://wa.me/5511945877291?text=Olá!%20Quero%20garantir%20meu%20desconto%20de%2087%25%20OFF!"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-gradient-to-r from-[#f3115d] to-[#ff1a6d] text-white font-black text-lg md:text-2xl px-10 py-5 rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 inline-flex items-center gap-4 border-2 border-white/20"
              >
                <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória com gradiente */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#f3115d] to-transparent mb-8" />

        {/* Copyright e informações legais */}
        <div className="text-center space-y-3">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Microlins - Todos os direitos reservados
          </p>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            Cupom válido apenas durante o mês de descontos. Sujeito à disponibilidade de vagas e condições específicas.
          </p>
          
          {/* Redes Sociais e Badge */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            {/* Badge de garantia */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-[#f3115d]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/80 text-sm font-semibold">Garantia de Qualidade</span>
            </div>

            {/* Link Instagram */}
            <a
              href="https://instagram.com/microlinsheliopolis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#f3115d] to-[#ff1a6d] backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 hover:scale-105 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-white text-sm font-bold">Siga no Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
