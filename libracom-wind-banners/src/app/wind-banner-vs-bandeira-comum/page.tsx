import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../components/Header";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Wind Banner ou Bandeira Tradicional? Saiba Qual Chama Mais Atenção | Libracom",
  description: "Compare wind banner e bandeira tradicional. Descubra qual é mais resistente, visível e prático para sua divulgação. Guia completo com vantagens e desvantagens.",
  keywords: "diferença entre wind banner e bandeira, qual wind banner dura mais, melhor tipo de banner para eventos externos, wind banner resistente ao vento, divulgação com bandeiras de vento",
};

export default function WindBannerVsBandeira() {
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
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  5.0 no Google
                </span>
                <span className="trust-badge">
                  🏆 Guia Comparativo
                </span>
                <span className="trust-badge">
                  ✅ Análise Completa
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 font-heading">
                <span className="text-white">Wind Banner ou</span>
                <br />
                <span className="text-gradient-brand">Bandeira Tradicional?</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-slate-300 font-heading">
                Saiba Qual Chama Mais Atenção
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Descubra as diferenças entre wind banners e bandeiras tradicionais, e entenda qual é a melhor opção para sua empresa ou evento.
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
                    alt="WhatsApp para comprar wind banner resistente ao vento"
                    width={24}
                    height={24}
                    className="mr-3 transition-transform group-hover:scale-110"
                  />
                  Falar com Especialista
                </a>
                <a href="#comparativo" className="btn-outline text-base">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Ver Comparativo
                </a>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10">
                <Image
                  src="/images/wind_banner_mpd.jpeg"
                  alt="Comparação entre wind banner e bandeira tradicional"
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

      {/* ===== TABELA COMPARATIVA ===== */}
      <section id="comparativo" className="py-24 bg-glow-grid">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white font-heading">
            Comparativo <span className="text-gradient-brand">Detalhado</span>
          </h2>
          <p className="section-subtitle">
            Entenda as principais diferenças entre wind banners e bandeiras tradicionais para fazer a escolha certa para sua marca.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full rounded-2xl overflow-hidden border border-white/10">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm">
                  <th className="px-6 py-5 text-left text-slate-200 font-heading text-sm uppercase tracking-wider">Características</th>
                  <th className="px-6 py-5 text-center text-slate-200 font-heading text-sm uppercase tracking-wider">Wind Banner</th>
                  <th className="px-6 py-5 text-center text-slate-200 font-heading text-sm uppercase tracking-wider">Bandeira Tradicional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { feature: "Visibilidade", wb: "Excelente", wbDesc: "Sempre esticado e visível, mesmo sem vento", bt: "Média", btDesc: "Depende do vento para ficar esticada", wbGood: true, btGood: false },
                  { feature: "Resistência ao Vento", wb: "Alta", wbDesc: "Estrutura projetada para resistir a ventos fortes", bt: "Baixa a Média", btDesc: "Pode rasgar com ventos fortes", wbGood: true, btGood: false },
                  { feature: "Durabilidade", wb: "Alta", wbDesc: "Material reforçado e estrutura resistente", bt: "Média", btDesc: "Desgasta mais rapidamente com exposição", wbGood: true, btGood: false },
                  { feature: "Facilidade de Transporte", wb: "Boa", wbDesc: "Desmontável, mas ocupa mais espaço", bt: "Excelente", btDesc: "Compacta e leve", wbGood: true, btGood: true },
                  { feature: "Montagem", wb: "Fácil", wbDesc: "Montagem em minutos, sem ferramentas", bt: "Média", btDesc: "Requer mastro e fixação adequada", wbGood: true, btGood: false },
                  { feature: "Impacto Visual", wb: "Alto", wbDesc: "Formato diferenciado chama mais atenção", bt: "Médio", btDesc: "Formato tradicional, menos destaque", wbGood: true, btGood: false },
                  { feature: "Versatilidade", wb: "Alta", wbDesc: "Uso interno e externo, diversos tamanhos", bt: "Média", btDesc: "Melhor para uso externo", wbGood: true, btGood: false },
                  { feature: "Custo-Benefício", wb: "Excelente", wbDesc: "Maior durabilidade e impacto visual", bt: "Bom", btDesc: "Menor custo inicial, menor durabilidade", wbGood: true, btGood: true },
                ].map((row, i) => (
                  <tr key={i} className="bg-white/[0.02] hover:bg-white/[0.06] transition-colors duration-200">
                    <td className="px-6 py-4 font-semibold text-white">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`font-bold ${row.wbGood ? "text-emerald-400" : "text-amber-400"}`}>{row.wb}</span>
                      <p className="text-sm text-slate-400 mt-1">{row.wbDesc}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`font-bold ${row.btGood ? "text-emerald-400" : "text-amber-400"}`}>{row.bt}</span>
                      <p className="text-sm text-slate-400 mt-1">{row.btDesc}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="separator-glow"></div>

      {/* ===== VÍDEO DEMONSTRATIVO ===== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-slate-900 font-heading">
            Veja a <span className="text-gradient-brand">Diferença</span> na Prática
          </h2>
          <p className="section-subtitle !text-slate-500">
            Assista ao vídeo abaixo para ver como o wind banner se comporta em diferentes condições e compare com bandeiras tradicionais.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="product-card-light overflow-hidden">
              <div className="relative pt-[56.25%]">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-slate-600 font-medium">Vídeo demonstrativo da montagem e desempenho do Wind Banner</p>
                  </div>
                  {/* Aqui seria inserido um iframe de vídeo real */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRÓS E CONTRAS ===== */}
      <section className="py-24 bg-glow-grid">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white font-heading">
            Prós e <span className="text-gradient-brand">Contras</span>
          </h2>
          <p className="section-subtitle">
            Análise detalhada das vantagens e limitações de cada opção
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Wind Banner Vantagens */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center font-heading">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Wind Banner: <span className="text-gradient-brand ml-2">Vantagens</span>
              </h3>
              <ul className="space-y-5">
                {[
                  { title: "Sempre Visível", desc: "Mantém-se esticado e visível mesmo sem vento, garantindo que sua mensagem seja sempre vista." },
                  { title: "Resistência Superior", desc: "Estrutura projetada para resistir a ventos fortes e condições climáticas adversas." },
                  { title: "Maior Impacto Visual", desc: "Formato diferenciado que chama mais atenção em eventos, feiras e pontos de venda." },
                  { title: "Montagem Rápida", desc: "Fácil de montar e desmontar, sem necessidade de ferramentas especiais." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="w-6 h-6 mt-0.5 mr-3 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bandeira Tradicional Limitações */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center font-heading">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Bandeira Tradicional: Limitações
              </h3>
              <ul className="space-y-5">
                {[
                  { title: "Visibilidade Dependente do Vento", desc: "Sem vento, a bandeira fica caída e sua mensagem não é vista adequadamente." },
                  { title: "Menor Durabilidade", desc: "Desgasta mais rapidamente com exposição constante ao vento e intempéries." },
                  { title: "Instalação Mais Complexa", desc: "Requer mastro adequado e fixação segura para evitar acidentes." },
                  { title: "Menor Impacto Visual", desc: "Formato tradicional que não se destaca tanto em ambientes competitivos." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="w-6 h-6 mt-0.5 mr-3 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIPOS DE BASE ===== */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-slate-900 font-heading">
            Tipos de <span className="text-gradient-brand">Base</span> para Wind Banner
          </h2>
          <p className="section-subtitle !text-slate-500">
            Conheça as diferentes opções de base para wind banner e escolha a mais adequada para sua necessidade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "Base com Água",
                desc: "Ideal para uso em superfícies planas como calçadas e pisos. Pode ser preenchida com água para maior estabilidade.",
                features: ["Fácil de transportar vazia", "Boa estabilidade quando cheia"],
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                title: "Base com Areia",
                desc: "Excelente para uso em ambientes com vento forte. A areia proporciona maior peso e estabilidade.",
                features: ["Máxima estabilidade", "Ideal para áreas externas"],
                color: "from-amber-500 to-amber-600",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                ),
                title: "Base Espeto",
                desc: "Perfeita para uso em gramados, terra e areia. Fixação direta no solo para maior segurança.",
                features: ["Fácil instalação", "Ideal para eventos ao ar livre"],
                color: "from-emerald-500 to-emerald-600",
              },
            ].map((item, i) => (
              <div key={i} className="product-card-light p-8 group text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 font-heading">{item.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center justify-center text-slate-600 text-sm">
                      <svg className="w-5 h-5 mr-2 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
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
              Pronto para <span className="text-gradient-brand">Escolher</span> o Melhor?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Agora que você conhece as diferenças, solicite um orçamento para wind banners personalizados e destaque sua marca.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511954997799"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-lg group"
              >
                <Image
                  src="/images/WhatsApp_icon.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="mr-3 transition-transform group-hover:scale-110"
                />
                Fazer Pedido Agora
              </a>
              <Link href="/" className="btn-outline text-base">
                Ver Todos os Produtos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Image
                src="/images/libracom_logo_preto_navbar.png"
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
                <li><Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Banners &amp; Lonas</Link></li>
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