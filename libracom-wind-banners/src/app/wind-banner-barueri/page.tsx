import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../components/Header";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Wind Banner em Barueri – Personalizado e com Entrega Rápida | Libracom",
  description: "Compre Wind Banner em Barueri com a melhor qualidade e preço. Bandeira de vento personalizada com entrega rápida em toda região. Orçamento via WhatsApp.",
  keywords: "wind banner em barueri, bandeira de vento barueri, comprar wind banner barueri, impressão de wind banner barueri, empresa de wind banner barueri, onde comprar wind banner em barueri",
};

export default function WindBannerBarueri() {
  return (
    <div className="min-h-screen scroll-smooth">
      {/* Header */}
      <Header />

      {/* Floating WhatsApp */}
      <WhatsAppFloat />

      {/* ===== HERO SECTION ===== */}
      <section className="hero-gradient min-h-[70vh] flex items-center pt-20 pb-16 relative">
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
                  📍 Atendemos Barueri
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 font-heading">
                <span className="text-white">Wind Banner em</span>
                <br />
                <span className="text-gradient-brand">Barueri</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-slate-300 font-heading">
                Personalizado e com Entrega Rápida
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                A Libracom é especialista em <strong className="text-white">bandeira de vento em Barueri</strong> e região. 
                Oferecemos wind banners personalizados com a melhor qualidade e preço do mercado.
              </p>

              {/* Price highlight */}
              <div className="glass-card inline-block px-6 py-4 mb-8">
                <p className="text-slate-400 text-sm mb-2">Wind Banner a partir de</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-emerald-400 text-lg font-semibold">R$</span>
                  <span className="text-white text-4xl font-black font-heading">320</span>
                  <span className="text-slate-400 text-sm">,00 / unidade</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/5511954997799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta text-lg group"
                >
                  <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp para comprar wind banner em Barueri"
                    width={24}
                    height={24}
                    className="mr-3 transition-transform group-hover:scale-110"
                  />
                  Peça pelo WhatsApp
                </a>
                <a href="#opcoes" className="btn-outline text-base">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Ver Opções
                </a>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10">
                  <Image
                    src="/images/wind_banner_mpd.jpeg"
                    alt="Wind Banner em Barueri - Modelo personalizado"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Floating secondary image */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-xl border-2 border-white/10 hidden md:block animate-float">
                  <Image
                    src="/images/wind_marabraz_entrega24hs_alphaville.png"
                    alt="Wind Banner entrega rápida Barueri"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PREÇOS E OPÇÕES ===== */}
      <section id="opcoes" className="py-24 bg-glow-grid">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white font-heading">
            Opções de <span className="text-gradient-brand">Wind Banners</span> em Barueri
          </h2>
          <p className="section-subtitle">
            Escolha o tamanho ideal para sua necessidade — todos com impressão digital Ultra HD e base inclusa
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Wind Banner 2m */}
            <div className="product-card group">
              <div className="p-8 text-center">
                <span className="text-5xl font-black text-white font-heading">2m</span>
                <h3 className="text-2xl font-bold mt-3 text-white font-heading">Wind Banner Pequeno</h3>
                <p className="text-slate-400 mt-1">Ideal para espaços limitados</p>
              </div>
              <div className="separator-glow mx-6"></div>
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Material de alta resistência
                  </li>
                  <li className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Impressão digital de alta qualidade
                  </li>
                  <li className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Base resistente incluída
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-xs text-slate-500">a partir de</span>
                  <div className="text-3xl font-black text-emerald-400 font-heading">R$ 320,00</div>
                </div>
              </div>
            </div>

            {/* Wind Banner 2,60m - Destaque */}
            <div className="product-card group relative border-2 border-blue-500/50 scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-blue-500/25">
                  Mais Vendido
                </span>
              </div>
              <div className="p-8 text-center">
                <span className="text-5xl font-black text-white font-heading">2,60m</span>
                <h3 className="text-2xl font-bold mt-3 text-white font-heading">Wind Banner Médio</h3>
                <p className="text-slate-400 mt-1">Perfeito para maior visibilidade</p>
              </div>
              <div className="separator-glow mx-6"></div>
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Material premium resistente ao vento
                  </li>
                  <li className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Impressão digital de alta resolução
                  </li>
                  <li className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Base reforçada para maior estabilidade
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-xs text-slate-500">a partir de</span>
                  <div className="text-3xl font-black text-emerald-400 font-heading">R$ 380,00</div>
                </div>
              </div>
            </div>

            {/* Wind Banner 3m */}
            <div className="product-card group">
              <div className="p-8 text-center">
                <span className="text-5xl font-black text-white font-heading">3m</span>
                <h3 className="text-2xl font-bold mt-3 text-white font-heading">Wind Banner Grande</h3>
                <p className="text-slate-400 mt-1">Máximo impacto visual</p>
              </div>
              <div className="separator-glow mx-6"></div>
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Material super resistente
                  </li>
                  <li className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Impressão digital premium
                  </li>
                  <li className="flex items-center text-slate-300">
                    <svg className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Base extra robusta incluída
                  </li>
                </ul>
                <div className="text-center">
                  <span className="text-xs text-slate-500">a partir de</span>
                  <div className="text-3xl font-black text-emerald-400 font-heading">R$ 430,00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAPA E LOCALIZAÇÃO ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-slate-900 font-heading">
            Onde Comprar <span className="text-gradient-brand">Wind Banner</span> em Barueri
          </h2>
          <p className="section-subtitle !text-slate-500">
            Atendemos toda a região de Barueri, Alphaville e arredores com entrega rápida e personalizada
          </p>

          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <div className="w-full md:w-1/2">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-white font-heading">Nossa Localização</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Barueri, Alphaville - SP
                  </div>
                  <a href="tel:11954997799" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    (11) 95499-7799
                  </a>
                  <a href="mailto:contato.libracom@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/40 transition-colors">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    contato.libracom@gmail.com
                  </a>
                </div>

                <a
                  href="https://wa.me/5511954997799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta w-full justify-center mt-8"
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
            <div className="w-full md:w-1/2">
              <div className="product-card-light p-2 h-full">
                <div className="relative h-full min-h-[350px] rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29250.568895898737!2d-46.88469233022461!3d-23.50444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03dd6c32aef7%3A0x86a8852d44d8e45b!2sBarueri%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1656000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa mostrando a localização da Libracom Wind Banners em Barueri"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALERIA DE CLIENTES ===== */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-slate-900 font-heading">
            Wind Banners Entregues em <span className="text-gradient-brand">Barueri</span>
          </h2>
          <p className="section-subtitle !text-slate-500">
            Confira alguns dos nossos trabalhos de wind banners personalizados entregues para clientes em Barueri e região.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                src: "/images/wind_banner_mpd.jpeg",
                alt: "Wind Banner personalizado em Barueri para empresa",
                label: "Wind Banner Corporativo",
                loc: "Cliente em Alphaville",
              },
              {
                src: "/images/backdrop_eventos_fundo_palco_banner.png",
                alt: "Wind Banner para evento em Barueri",
                label: "Wind Banner para Evento",
                loc: "Evento em Barueri",
              },
              {
                src: "/images/wind_marabraz_entrega24hs_alphaville.png",
                alt: "Wind Banner personalizado para loja em Barueri",
                label: "Wind Banner Comercial",
                loc: "Loja em Barueri",
              },
            ].map((item, i) => (
              <div key={i} className="product-card-light group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 mb-1 font-heading">{item.label}</h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {item.loc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-heading">
              Pronto para <span className="text-gradient-brand">Destacar</span> sua Marca em Barueri?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Solicite um orçamento de wind banner personalizado agora mesmo e receba em Barueri com rapidez e qualidade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8 text-left">
                <h3 className="text-xl font-bold text-white mb-6 font-heading">Diferenciais Libracom</h3>
                <div className="space-y-4">
                  {[
                    "Entrega rápida em toda Barueri",
                    "Impressão digital Ultra HD",
                    "Arte gratuita inclusa",
                    "Atendimento personalizado",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 text-left">
                <h3 className="text-xl font-bold text-white mb-6 font-heading">Horário de Atendimento</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Segunda a Sexta</p>
                      <p className="text-sm text-slate-400">9h às 18h</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Sábado</p>
                      <p className="text-sm text-slate-400">9h às 13h</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/5511954997799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta w-full justify-center mt-8"
                >
                  <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Peça pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <Image
                src="/images/libracom_logo_preto_navbar.png"
                alt="Libracom Wind Banners Logo"
                width={140}
                height={45}
                className="mb-4 brightness-0 invert opacity-80"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="text-slate-400 text-sm leading-relaxed">
                Especialistas em Wind Banners e comunicação visual em Barueri, Alphaville e região.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Página Inicial</Link></li>
                <li><Link href="/wind-banner-personalizado-eventos" className="text-slate-400 hover:text-white transition-colors text-sm">Wind Banner para Eventos</Link></li>
                <li><Link href="/wind-banner-vs-bandeira-comum" className="text-slate-400 hover:text-white transition-colors text-sm">Wind Banner vs Bandeira</Link></li>
                <li><Link href="/entrega-rapida-24h" className="text-slate-400 hover:text-white transition-colors text-sm">Entrega em 24h</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">Contato</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:11954997799" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (11) 95499-7799
                  </a>
                </li>
                <li>
                  <a href="mailto:contato.libracom@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contato.libracom@gmail.com
                  </a>
                </li>
                <li className="text-slate-400 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Barueri, Alphaville - SP
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="separator-glow mt-12 mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Libracom Wind Banners. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5511954997799"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <Image src="/images/WhatsApp_icon.png" alt="WhatsApp" width={20} height={20} className="opacity-50 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}