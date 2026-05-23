import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../components/Header";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Wind Banner com Entrega em 24h em Barueri e Alphaville | Libracom",
  description: "Precisa de wind banner com urgência? Entregamos em 24 horas em Barueri, Alphaville e região. Wind banners personalizados com impressão de alta qualidade.",
  keywords: "wind banner entrega rápida, wind banner 24h, entrega de wind banner barueri, wind banner alphaville entrega rápida, wind banner urgente, impressão rápida wind banner",
};

export default function EntregaRapida24h() {
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
              {/* Trust badges row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <span className="trust-badge">
                  ⚡ Entrega Expressa
                </span>
                <span className="trust-badge">
                  🚚 Barueri & Alphaville
                </span>
                <span className="trust-badge">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Qualidade Garantida
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 font-heading">
                <span className="text-white">Wind Banner com</span>
                <br />
                <span className="text-gradient-brand">Entrega em 24h</span>
              </h1>

              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-slate-300 font-heading">
                Em Barueri e Alphaville
              </h2>

              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Precisa de <strong className="text-white">wind banners com urgência</strong>? A Libracom oferece entrega expressa em 24 horas para Barueri, Alphaville e região, sem comprometer a qualidade.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/5511954997799?text=Olá,%20preciso%20de%20um%20Wind%20Banner%20com%20entrega%20em%2024h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta text-lg group"
                >
                  <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp para wind banner com entrega rápida"
                    width={24}
                    height={24}
                    className="mr-3 transition-transform group-hover:scale-110"
                  />
                  Solicitar Entrega Expressa
                </a>
                <a href="#como-funciona" className="btn-outline text-base">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Saiba Mais
                </a>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10">
                  <Image
                    src="/images/wind_marabraz_entrega24hs_alphaville.png"
                    alt="Wind Banner com entrega em 24h em Barueri e Alphaville"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-4 right-4 bg-emerald-500/90 text-white px-5 py-2.5 rounded-full text-lg font-bold backdrop-blur-sm animate-pulse shadow-lg">
                  24h
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section id="como-funciona" className="py-24 bg-glow-grid">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white font-heading">
            Como Funciona a <span className="text-gradient-brand">Entrega em 24h</span>
          </h2>
          <p className="section-subtitle">
            Processo simples e rápido para você receber seu wind banner no menor tempo possível
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="glass-card p-8 relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                1
              </div>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-white font-heading">Entre em Contato</h3>
              <p className="text-slate-400 text-center leading-relaxed">
                Envie sua arte ou solicite a criação pelo nosso WhatsApp. Informe as dimensões e quantidade desejada.
              </p>
            </div>

            <div className="glass-card p-8 relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                2
              </div>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-white font-heading">Aprovação e Pagamento</h3>
              <p className="text-slate-400 text-center leading-relaxed">
                Aprove o orçamento e a arte final. Realize o pagamento para iniciarmos a produção imediatamente.
              </p>
            </div>

            <div className="glass-card p-8 relative group">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                3
              </div>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-cyan-600/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-white font-heading">Entrega em 24h</h3>
              <p className="text-slate-400 text-center leading-relaxed">
                Receba seu wind banner em até 24 horas em Barueri, Alphaville e região. Pronto para uso!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUTOS DISPONÍVEIS ===== */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-slate-900 font-heading">
            Wind Banners para <span className="text-gradient-brand">Entrega em 24h</span>
          </h2>
          <p className="section-subtitle !text-slate-500">
            Todos os modelos abaixo estão disponíveis para entrega expressa em 24 horas em Barueri e Alphaville.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wind Banner 2m */}
            <div className="product-card-light group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/wind_banner_mpd.jpeg"
                  alt="Wind Banner 2m com entrega em 24h"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    Entrega 24h
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 font-heading">Wind Banner 2m</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                  Wind banner de 2 metros de altura, ideal para espaços menores e eventos internos.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-slate-500">a partir de</span>
                    <div className="text-2xl font-bold text-emerald-500 font-heading">R$ 350</div>
                  </div>
                  <a
                    href="https://wa.me/5511954997799?text=Olá,%20tenho%20interesse%20no%20Wind%20Banner%20de%202m%20com%20entrega%20em%2024h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    Pedir Agora
                  </a>
                </div>
              </div>
            </div>

            {/* Wind Banner 2,60m */}
            <div className="product-card-light group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/wind_banner_mpd.jpeg"
                  alt="Wind Banner 2,60m com entrega em 24h"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    Entrega 24h
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    Mais Vendido
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 font-heading">Wind Banner 2,60m</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                  Tamanho médio com excelente visibilidade e custo-benefício. O mais popular.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-slate-500">a partir de</span>
                    <div className="text-2xl font-bold text-emerald-500 font-heading">R$ 400</div>
                  </div>
                  <a
                    href="https://wa.me/5511954997799?text=Olá,%20tenho%20interesse%20no%20Wind%20Banner%20de%202,60m%20com%20entrega%20em%2024h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    Pedir Agora
                  </a>
                </div>
              </div>
            </div>

            {/* Wind Banner 3m */}
            <div className="product-card-light group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/wind_banner_mpd.jpeg"
                  alt="Wind Banner 3m com entrega em 24h"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    Entrega 24h
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-900 font-heading">Wind Banner 3m</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                  Wind banner grande com máximo impacto visual para eventos e feiras.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-slate-500">a partir de</span>
                    <div className="text-2xl font-bold text-emerald-500 font-heading">R$ 420</div>
                  </div>
                  <a
                    href="https://wa.me/5511954997799?text=Olá,%20tenho%20interesse%20no%20Wind%20Banner%20de%203m%20com%20entrega%20em%2024h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    Pedir Agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAPA DE ENTREGA ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-slate-900 font-heading">
            Área de <span className="text-gradient-brand">Entrega em 24h</span>
          </h2>
          <p className="section-subtitle !text-slate-500">
            Realizamos entregas expressas em 24 horas nas seguintes regiões:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="product-card-light p-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 font-heading">Regiões Atendidas</h3>
              <ul className="grid grid-cols-2 gap-4">
                {["Barueri", "Alphaville", "Santana de Parnaíba", "Osasco", "Carapicuíba", "Jandira", "Itapevi", "Zona Oeste SP"].map((region) => (
                  <li key={region} className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 mr-2 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {region}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-slate-500 text-sm">
                <strong className="text-slate-700">Nota:</strong> Para outras regiões, consulte-nos sobre prazos e disponibilidade.
              </p>
            </div>
            <div className="product-card-light p-2 h-full overflow-hidden">
              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58500.92726302051!2d-46.89469233022461!3d-23.50444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03dd6c32aef7%3A0x86a8852d44d8e45b!2sBarueri%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1656000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da área de entrega em 24h de Wind Banners em Barueri e Alphaville"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PERGUNTAS FREQUENTES ===== */}
      <section className="py-24 bg-glow-grid">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white font-heading">
            Perguntas <span className="text-gradient-brand">Frequentes</span>
          </h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre a entrega expressa em 24 horas
          </p>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              {[
                {
                  question: "A entrega em 24h tem custo adicional?",
                  answer: "Não, a entrega em 24h para Barueri e Alphaville não tem custo adicional. O valor é o mesmo da entrega padrão.",
                },
                {
                  question: "Qual o horário limite para garantir a entrega em 24h?",
                  answer: "Para garantir a entrega em 24h, o pedido deve ser aprovado e pago até às 12h do dia útil anterior.",
                },
                {
                  question: "A qualidade do wind banner é a mesma da produção normal?",
                  answer: "Sim, mantemos o mesmo padrão de qualidade em todos os nossos produtos, independentemente do prazo de entrega.",
                },
                {
                  question: "Posso solicitar alterações na arte durante o processo de entrega expressa?",
                  answer: "Para garantir a entrega em 24h, a arte deve ser aprovada sem alterações após o início da produção. Alterações podem impactar no prazo.",
                },
                {
                  question: "Qual a quantidade máxima para entrega em 24h?",
                  answer: "Conseguimos entregar até 5 wind banners no prazo de 24h. Para quantidades maiores, consulte-nos sobre prazos especiais.",
                },
              ].map((faq, i) => (
                <div key={i} className="glass-card p-6">
                  <h3 className="text-lg font-bold mb-2 text-white font-heading">{faq.question}</h3>
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-heading">
            Precisa para amanhã? <span className="text-gradient-brand">Nós entregamos!</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Não deixe seu evento ou ação de marketing para última hora. Solicite agora seu wind banner com entrega garantida em 24h em Barueri e Alphaville.
          </p>
          <a
            href="https://wa.me/5511954997799?text=Olá,%20preciso%20de%20um%20Wind%20Banner%20com%20entrega%20em%2024h"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-lg inline-flex items-center group"
          >
            <Image
              src="/images/WhatsApp_icon.png"
              alt="WhatsApp para wind banner com entrega em 24h"
              width={24}
              height={24}
              className="mr-3 transition-transform group-hover:scale-110"
            />
            Solicitar Entrega Expressa
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Image
                src="/images/LIBRACOM_png.png"
                alt="Libracom Wind Banners Logo"
                width={140}
                height={45}
                className="mb-4 brightness-0 invert opacity-80"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="text-slate-400 text-sm leading-relaxed">
                Especialistas em Wind Banners, Roll Ups, Adesivos, Banners e comunicação visual completa em Barueri e Alphaville.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">Produtos</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Wind Banners</Link></li>
                <li><Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Roll Up Banner</Link></li>
                <li><Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Adesivos Personalizados</Link></li>
                <li><Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Banners & Lonas</Link></li>
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-5">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><Link href="/wind-banner-barueri" className="text-slate-400 hover:text-white transition-colors text-sm">Wind Banner em Barueri</Link></li>
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