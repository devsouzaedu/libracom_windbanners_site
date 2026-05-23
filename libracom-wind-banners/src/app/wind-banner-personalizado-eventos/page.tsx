import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../components/Header";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Wind Banner Personalizado para Eventos, Feiras e Ações de Rua | Libracom",
  description: "Wind banners personalizados para eventos, feiras e ações promocionais. Bandeiras de vento resistentes para ambientes externos. Entrega rápida em Barueri e região.",
  keywords: "wind banner para eventos barueri, banner de tecido para feiras, divulgação com bandeiras de vento, wind banner resistente ao vento, melhor tipo de banner para eventos externos",
};

export default function WindBannerEventos() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Floating WhatsApp */}
      <WhatsAppFloat />

      {/* ===== HERO SECTION ===== */}
      <section className="hero-gradient min-h-[80vh] flex items-center pt-20 pb-16 relative">
        {/* Ambient glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              {/* Trust badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <span className="trust-badge">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  5.0 no Google
                </span>
                <span className="trust-badge">
                  🚚 Entrega em 24h
                </span>
                <span className="trust-badge">
                  🎪 Ideal para Eventos
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 font-heading">
                <span className="text-white">Wind Banner para</span>
                <br />
                <span className="text-gradient-brand">Eventos</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-slate-300 font-heading">
                Feiras, Congressos e Ações de Rua
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Destaque sua marca em eventos com <strong className="text-white">wind banners personalizados</strong> de alta qualidade. 
                Ideais para feiras, congressos, ações promocionais e eventos ao ar livre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/5511954997799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta text-lg group"
                >
                  <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp para solicitar wind banner para eventos"
                    width={24}
                    height={24}
                    className="mr-3 transition-transform group-hover:scale-110"
                  />
                  Solicitar Orçamento
                </a>
                <a href="#galeria" className="btn-outline text-base">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Ver Modelos
                </a>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10">
                <Image
                  src="/images/backdrop_eventos_fundo_palco_banner.png"
                  alt="Wind Banner para eventos e feiras"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALERIA DE MODELOS ===== */}
      <section id="galeria" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-slate-900">
            Modelos para <span className="text-gradient-brand">Eventos</span>
          </h2>
          <p className="section-subtitle !text-slate-500">
            Confira nossa galeria de wind banners personalizados para eventos, feiras e ações promocionais.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                src: "/images/wind_banner_mpd.jpeg",
                alt: "Wind Banner para feiras e eventos",
                title: "Wind Banner Promocional",
                desc: "Ideal para feiras e eventos",
              },
              {
                src: "/images/backdrop_eventos_fundo_palco_banner.png",
                alt: "Wind Banner para backdrop de eventos",
                title: "Backdrop para Eventos",
                desc: "Fundo de palco personalizado",
              },
              {
                src: "/images/totem_backlight_eventos_totem_iluminado_barueri_alphaville.jpg",
                alt: "Totem para eventos e feiras",
                title: "Totem para Eventos",
                desc: "Comunicação visual completa",
              },
              {
                src: "/images/wind_marabraz_entrega24hs_alphaville.png",
                alt: "Wind Banner para ações promocionais",
                title: "Wind Banner para Ações",
                desc: "Ações promocionais externas",
              },
            ].map((item, i) => (
              <div key={i} className="product-card-light group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 mb-1 font-heading">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VANTAGENS ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-slate-900">
            Por que escolher <span className="text-gradient-brand">Wind Banners</span> para seus eventos?
          </h2>
          <p className="section-subtitle !text-slate-500">
            Descubra os diferenciais que fazem do wind banner a melhor opção para destacar sua marca
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                title: "Alta Visibilidade",
                desc: "Wind banners destacam sua marca mesmo em ambientes cheios, garantindo que seu estande ou ponto promocional seja facilmente localizado.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Custo-Benefício",
                desc: "Excelente relação custo-benefício comparado a outras opções de sinalização para eventos e ações promocionais.",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Fácil Transporte",
                desc: "Leves e fáceis de transportar, montar e desmontar, ideais para equipes que participam de múltiplos eventos.",
                color: "from-cyan-500 to-cyan-600",
              },
            ].map((item, i) => (
              <div key={i} className="product-card-light text-center p-8 group">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: "Resistente ao Vento",
                desc: "Nossos wind banners são desenvolvidos com materiais resistentes ao vento, ideais para eventos externos e ações de rua.",
                color: "from-amber-500 to-amber-600",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                ),
                title: "Personalização Total",
                desc: "Personalize completamente seu wind banner com cores, logos e mensagens específicas para cada evento ou campanha.",
                color: "from-purple-500 to-purple-600",
              },
            ].map((item, i) => (
              <div key={i} className="product-card-light text-center p-8 group">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-slate-900">
            O que nossos <span className="text-gradient-brand">Clientes</span> dizem
          </h2>
          <p className="section-subtitle !text-slate-500">
            Avaliações reais de organizadores de eventos que confiam na Libracom
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marcos Costa",
                role: "Organizador de Eventos",
                initials: "MC",
                text: "Os wind banners da Libracom foram essenciais para o sucesso do nosso evento corporativo. Qualidade excelente e entrega no prazo.",
              },
              {
                name: "Ana Silva",
                role: "Marketing - Empresa de Tecnologia",
                initials: "AS",
                text: "Usamos os wind banners em nossa feira de negócios e ficamos impressionados com a visibilidade que proporcionaram ao nosso estande.",
              },
              {
                name: "Ricardo Lima",
                role: "Coordenador de Eventos",
                initials: "RL",
                text: "Excelente resistência ao vento! Usamos em uma ação de rua e os banners permaneceram intactos mesmo com ventos fortes.",
              },
            ].map((t, i) => (
              <div key={i} className="product-card-light p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMULÁRIO DE ORÇAMENTO ===== */}
      <section className="py-24 bg-glow-grid">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">
            Solicite um <span className="text-gradient-brand">Orçamento</span>
          </h2>
          <p className="section-subtitle">
            Preencha o formulário abaixo ou entre em contato diretamente pelo WhatsApp
          </p>

          <div className="max-w-2xl mx-auto glass-card p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-slate-300 font-medium mb-2 text-sm">Nome</label>
                  <input 
                    type="text" 
                    id="nome" 
                    name="nome" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2 text-sm">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-slate-300 font-medium mb-2 text-sm">Telefone</label>
                  <input 
                    type="tel" 
                    id="telefone" 
                    name="telefone" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="evento" className="block text-slate-300 font-medium mb-2 text-sm">Tipo de Evento</label>
                  <select 
                    id="evento" 
                    name="evento" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-slate-900">Selecione uma opção</option>
                    <option value="feira" className="bg-slate-900">Feira</option>
                    <option value="congresso" className="bg-slate-900">Congresso</option>
                    <option value="acao" className="bg-slate-900">Ação Promocional</option>
                    <option value="corporativo" className="bg-slate-900">Evento Corporativo</option>
                    <option value="outro" className="bg-slate-900">Outro</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-slate-300 font-medium mb-2 text-sm">Mensagem</label>
                <textarea 
                  id="mensagem" 
                  name="mensagem" 
                  rows={4} 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Descreva seu evento e necessidades"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="btn-cta px-8 py-3"
                >
                  Enviar Solicitação
                </button>
              </div>
            </form>
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-slate-400">Prefere contato direto?</p>
              <a
                href="https://wa.me/5511954997799"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta mt-4 inline-flex items-center justify-center"
              >
                <Image
                  src="/images/WhatsApp_icon.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Fale Conosco no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}