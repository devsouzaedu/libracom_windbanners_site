import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../components/Header";
import WhatsAppFloat from "../components/WhatsAppFloat";
import RefilFAQ from "./RefilFAQ";

export const metadata: Metadata = {
  title: "Somente Bandeira Wind Banner | Refil Avulso em Tecido",
  description:
    "Compre somente a bandeira do seu wind banner. Tecido 100% poliéster de alta durabilidade, impressão sublimática frente e verso com envio rápido.",
  keywords:
    "somente bandeira wind banner, refil wind banner, bandeira avulsa wind banner, tecido avulso wind banner, refil bandeira de vento, tecido personalizado wind banner, refil wind banner gota, refil wind banner faca, refil wind banner vela, comprar somente a bandeira do wind banner, tecido sublimatico wind banner, troca de tecido wind banner, refil wind banner 2m, refil wind banner 2.6m, refil wind banner 3.2m, libracom wind banners",
  alternates: {
    canonical: "https://www.libracomwindbanner.com.br/somente-bandeira-wind-banner",
  },
  openGraph: {
    title: "Somente Bandeira Wind Banner | Refil Avulso em Tecido - Libracom",
    description:
      "Compre somente a bandeira do seu wind banner. Tecido 100% poliéster de alta durabilidade, impressão sublimática frente e verso com envio rápido.",
    url: "https://www.libracomwindbanner.com.br/somente-bandeira-wind-banner",
    siteName: "Libracom - Wind Banners",
    images: [
      {
        url: "/images/bandeira_impressao.jpg",
        width: 1200,
        height: 630,
        alt: "Somente bandeira wind banner - Refil avulso em tecido sublimático Libracom",
      },
      {
        url: "/images/wind_banner_mpd.jpeg",
        width: 1200,
        height: 630,
        alt: "Refil de tecido personalizado para wind banner",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somente Bandeira Wind Banner | Refil Avulso em Tecido",
    description:
      "Compre somente a bandeira do seu wind banner. Tecido 100% poliéster de alta durabilidade, impressão sublimática frente e verso com envio rápido.",
    images: ["/images/bandeira_impressao.jpg"],
    creator: "@libracom",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function SomenteBandeiraWindBannerPage() {
  const whatsappUrl =
    "https://wa.me/5511954997799?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20somente%20a%20bandeira%20(refil)%20do%20wind%20banner.";

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Somente Bandeira Wind Banner - Refil Avulso em Tecido",
    image: [
      "https://www.libracomwindbanner.com.br/images/bandeira_impressao.jpg",
      "https://www.libracomwindbanner.com.br/images/wind_banner_mpd.jpeg",
    ],
    description:
      "Refil avulso de bandeira para wind banner em tecido 100% poliéster náutico de alta resistência. Impressão digital sublimática em alta definição, costura reforçada e passador compatível com hastes de fibra.",
    sku: "REFIL-WB-01",
    mpn: "LBR-REFIL-WB",
    brand: {
      "@type": "Brand",
      name: "Libracom",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.libracomwindbanner.com.br/somente-bandeira-wind-banner",
      priceCurrency: "BRL",
      price: "220.00",
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Libracom Wind Banners",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "148",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://www.libracomwindbanner.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Somente Bandeira Wind Banner",
        item: "https://www.libracomwindbanner.com.br/somente-bandeira-wind-banner",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "O que vem no pedido de somente bandeira wind banner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O pedido de somente a bandeira (refil avulso) inclui exclusivamente o tecido 100% poliéster personalizado com impressão sublimática de alta definição, costura industrial dupla, bainha perimetral e passador (túnel) reforçado para haste. Não inclui haste de fibra nem base de sustentação.",
        },
      },
      {
        "@type": "Question",
        name: "Como saber se o refil de bandeira vai servir na minha haste antiga?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nossos refis seguem o padrão universal do mercado nos modelos Gota, Faca/Pena, Vela e Retangular (2,0m, 2,60m, 3,20m e 4,0m). Basta nos informar a altura da haste ou enviar uma foto no WhatsApp para nossa equipe validar o encaixe perfeito.",
        },
      },
      {
        "@type": "Question",
        name: "Qual a diferença entre impressão face única e dupla face?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Na face única a estampa vaza 100% para o verso com visualização espelhada. Na dupla face utilizamos duas camadas de poliéster com blackout intermediário, permitindo artes diferentes e leitura direta em ambos os lados.",
        },
      },
      {
        "@type": "Question",
        name: "O tecido da bandeira do wind banner desbota no sol ou chuva?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não desbota. A impressão é feita por sublimação com termofixação a 200°C que penetra nas fibras do poliéster, garantindo proteção contra raios solares UV e intempéries.",
        },
      },
      {
        "@type": "Question",
        name: "O refil do wind banner pode ser lavado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim, é 100% lavável à mão ou na máquina de lavar no ciclo delicado com sabão neutro. Seca muito rápido e estica perfeitamente na haste.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês cobram para criar a arte do refil do wind banner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A criação e adaptação da arte é 100% gratuita na Libracom. Você envia sua ideia e logotipo pelo WhatsApp e nós montamos o mockup virtual.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 scroll-smooth">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header & Floating WhatsApp */}
      <Header />
      <WhatsAppFloat />

      {/* ========================================================================= */}
      {/* HERO SECTION - REFIL AVULSO                                              */}
      {/* ========================================================================= */}
      <section className="hero-gradient min-h-[75vh] flex items-center pt-24 pb-16 relative overflow-hidden">
        {/* Glow Decor */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Col: Main Copy & CTA */}
            <div className="w-full lg:w-7/12 text-center lg:text-left">
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-6">
                <span className="trust-badge">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  5.0 no Google (140+ avaliações)
                </span>
                <span className="trust-badge bg-emerald-50 text-emerald-700 border-emerald-200">
                  ⚡ Envio em até 24h
                </span>
                <span className="trust-badge bg-amber-50 text-amber-800 border-amber-200">
                  🎨 Arte Grátis Inclusa
                </span>
              </div>

              {/* H1 Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900 font-heading mb-4">
                Somente Bandeira <br />
                <span className="text-gradient-brand">Wind Banner</span>
              </h1>

              {/* Tagline / Subheading */}
              <p className="text-xl sm:text-2xl font-bold text-slate-700 font-heading mb-4">
                Refil Avulso em Tecido 100% Poliéster Sublimático
              </p>

              {/* Warning/Clarification Banner */}
              <div className="p-4 rounded-xl bg-blue-50/90 border-2 border-blue-200 text-blue-900 mb-6 text-left shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">💡</span>
                  <div>
                    <strong className="block text-blue-950 font-bold text-sm sm:text-base">
                      Economize até 60%: Compre Apenas o Tecido!
                    </strong>
                    <p className="text-xs sm:text-sm text-blue-800 mt-0.5 leading-relaxed">
                      Se você já tem a <strong>haste</strong> e a <strong>base</strong>, não gaste comprando uma estrutura nova. Troque apenas o tecido impresso do seu wind banner para novas promoções, datas comemorativas ou renovação de marca.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Confeccionamos <strong className="text-slate-900 font-semibold">somente a bandeira para wind banner</strong> nos formatos <strong>Gota</strong>, <strong>Pena / Faca</strong>, <strong>Vela</strong> e <strong>Retangular</strong>. Impressão Ultra HD com cores vivas e costura reforçada de alta durabilidade para suportar sol e chuva.
              </p>

              {/* Price Callout & Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta text-base sm:text-lg w-full sm:w-auto shadow-lg shadow-emerald-600/20 group"
                  aria-label="Pedir orçamento de somente bandeira wind banner pelo WhatsApp"
                >
                  <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp para comprar somente bandeira wind banner"
                    width={24}
                    height={24}
                    className="mr-3 transition-transform group-hover:scale-110 shrink-0"
                  />
                  Pedir Refil no WhatsApp
                </a>

                <a
                  href="#especificacoes"
                  className="btn-outline text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  <svg className="w-5 h-5 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Ver Modelos e Medidas
                </a>
              </div>

              {/* Micro-guarantee */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Compatível com qualquer haste
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Garantia de cores vibrantes
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Despacho para todo o Brasil
                </span>
              </div>

            </div>

            {/* Right Col: Hero Visual / Refil Flag */}
            <div className="w-full lg:w-5/12 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-900 group">
                  <Image
                    src="/images/bandeira_impressao.jpg"
                    alt="Somente bandeira wind banner - Tecido avulso impresso em sublimação de alta resolução"
                    width={640}
                    height={720}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-lg text-slate-900">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-black uppercase tracking-wider text-blue-700 block">
                          Qualidade Libracom
                        </span>
                        <p className="font-bold text-sm text-slate-900">
                          Refil com Passador Reforçado e Costura Dupla
                        </p>
                      </div>
                      <span className="text-2xl">🧵</span>
                    </div>
                  </div>
                </div>

                {/* Floating Tag */}
                <div className="absolute -top-4 -right-3 sm:-right-4 bg-emerald-600 text-white font-extrabold text-xs sm:text-sm px-4 py-2 rounded-2xl shadow-xl border-2 border-white transform rotate-3 flex items-center gap-1.5 animate-pulse">
                  <span>💰</span>
                  <span>Apenas o Tecido!</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* COMPARATIVO: KIT COMPLETO VS SOMENTE A BANDEIRA (REFIL)                   */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase rounded-full mb-3">
              Comparativo Inteligente
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
              Quando Vale a Pena Comprar <span className="text-gradient-brand">Somente a Bandeira</span>?
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Entenda por que encomendar o refil avulso é a escolha mais econômica para o seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Somente a Bandeira (Destaque) */}
            <div className="product-card p-8 border-2 border-blue-600 bg-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-black uppercase px-4 py-1.5 rounded-bl-xl tracking-wider">
                Melhor Custo-Benefício
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                  🚩
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Somente Bandeira (Refil Avulso)
                  </h3>
                  <p className="text-xs text-blue-600 font-semibold">
                    Para quem já tem a haste e a base
                  </p>
                </div>
              </div>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-start text-sm text-slate-700">
                  <svg className="w-5 h-5 text-emerald-500 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Economia de até 60%</strong> em relação ao kit completo.</span>
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <svg className="w-5 h-5 text-emerald-500 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Troca fácil em segundos</strong>: basta deslizar o tecido na haste antiga.</span>
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <svg className="w-5 h-5 text-emerald-500 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Ideal para campanhas sazonais</strong> (Black Friday, Natal, Dia das Mães, Promoções Semanais).</span>
                </li>
                <li className="flex items-start text-sm text-slate-700">
                  <svg className="w-5 h-5 text-emerald-500 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Frete muito mais barato e leve</strong> para todo o Brasil.</span>
                </li>
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal w-full justify-center text-sm font-bold py-3.5"
              >
                Comprar Refil Avulso
              </a>
            </div>

            {/* Card 2: Kit Completo */}
            <div className="product-card p-8 bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl">
                  🏗️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Kit Completo Wind Banner
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    Para quem está começando do zero
                  </p>
                </div>
              </div>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-start text-sm text-slate-600">
                  <svg className="w-5 h-5 text-slate-400 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Inclui Bandeira em Tecido + Haste de Fibra de Vidro + Base com peso.</span>
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <svg className="w-5 h-5 text-slate-400 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Indicado para primeira compra ou expansão de pontos de venda.</span>
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <svg className="w-5 h-5 text-slate-400 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Volume e peso maiores para transporte e envio.</span>
                </li>
                <li className="flex items-start text-sm text-slate-600">
                  <svg className="w-5 h-5 text-slate-400 mr-2.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Valor de investimento completo.</span>
                </li>
              </ul>

              <Link
                href="/wind-banner-barueri"
                className="btn-outline w-full justify-center text-sm font-bold py-3.5"
              >
                Ver Kits Completos
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BENEFÍCIOS E DIFERENCIAIS DA IMPRESSÃO SUBLIMÁTICA LIBRACOM               */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase rounded-full mb-3">
              Qualidade de Fábrica
            </span>
            <h2 className="section-title text-slate-900 font-heading">
              Diferenciais da Nossa <span className="text-gradient-brand">Bandeira Avulsa</span>
            </h2>
            <p className="section-subtitle">
              Conheça as tecnologias e materiais que fazem do refil Libracom o mais resistente e durável do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefício 1 */}
            <div className="glass-card p-8 border border-slate-200 hover:border-blue-500 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl mb-6 shadow-sm">
                ☀️
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                Sublimação Digital Ultra HD (1440 DPI)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Impressão digital com termotransferência a 200°C. As tintas penetram diretamente nas moléculas do tecido, proporcionando cores ultra vivas, alta nitidez fotográfica e total resistência a raios solares UV sem desbotar.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="glass-card p-8 border border-slate-200 hover:border-blue-500 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl mb-6 shadow-sm">
                🧵
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                Tecido 100% Poliéster Flag Náutico
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tecido especial de microfibra de poliéster com gramatura ideal para fluidez ao vento. Material leve, resistente a rasgos e intempéries, que não absorve água e seca instantaneamente após chuvas fortes.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="glass-card p-8 border border-slate-200 hover:border-blue-500 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center text-2xl mb-6 shadow-sm">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                Costura Dupla & Bainha Perimetral
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Acabamento industrial reforçado com linha de alta tenacidade em toda a borda. Passador (túnel da haste) confeccionado com reforço de curvatura na ponteira para não furar com a rotação contínua da haste.
              </p>
            </div>

            {/* Benefício 4 */}
            <div className="glass-card p-8 border border-slate-200 hover:border-blue-500 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center text-2xl mb-6 shadow-sm">
                🔄
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                Face Única ou Dupla Face Real
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Escolha a opção Face Única (com vazamento térmico de 100%, visível nos dois lados com efeito espelhado) ou a opção Dupla Face com camada interna de blackout, permitindo artes diferentes e leitura perfeita de ambos os lados.
              </p>
            </div>

            {/* Benefício 5 */}
            <div className="glass-card p-8 border border-slate-200 hover:border-blue-500 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center text-2xl mb-6 shadow-sm">
                🧼
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                100% Lavável e Reutilizável
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pegou poeira da rua ou chuva de lama? Lave a bandeira na máquina no ciclo delicado com sabão neutro. O tecido sai como novo, não desbota e volta a esticar sem rugas assim que montado na haste.
              </p>
            </div>

            {/* Benefício 6 */}
            <div className="glass-card p-8 border border-slate-200 hover:border-blue-500 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center text-2xl mb-6 shadow-sm">
                📐
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                Encaixe Universal para Hastes
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Moldes desenvolvidos para compatibilidade com mais de 99% das hastes de fibra de vidro disponíveis no mercado brasileiro. Corte a laser e medidas milimétricas para uma bandeira esticada e sem sobras.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODELOS DE REFIL E ESPECIFICAÇÕES TÉCNICAS                                */}
      {/* ========================================================================= */}
      <section id="especificacoes" className="py-24 bg-glow-grid border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase rounded-full mb-3">
              Formatos Disponíveis
            </span>
            <h2 className="section-title text-slate-900 font-heading">
              Modelos e Medidas de <span className="text-gradient-brand">Refil de Wind Banner</span>
            </h2>
            <p className="section-subtitle">
              Fabricamos somente o tecido nos 4 principais formatos do mercado. Escolha o seu modelo:
            </p>
          </div>

          {/* Grid de Formatos de Refil */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Modelo 1: Gota */}
            <div className="product-card p-6 text-center group hover:border-blue-500">
              <div className="h-44 bg-slate-50 rounded-xl flex items-center justify-center p-4 mb-5 border border-slate-100 group-hover:bg-blue-50/50 transition-colors">
                <div className="relative w-20 h-36 border-2 border-dashed border-blue-400 rounded-t-full rounded-b-lg flex items-center justify-center bg-white shadow-sm">
                  <span className="text-xs font-bold text-blue-600 uppercase transform -rotate-90">Gota</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">Modelo Gota (Drop)</h3>
              <p className="text-xs text-slate-500 mb-4">Área de bandeira sempre esticada, excelente para logotipos redondos.</p>
              <div className="text-left bg-slate-50 p-3 rounded-lg text-xs space-y-1.5 text-slate-600 mb-5">
                <div><strong>Alturas:</strong> 2,0m | 2,60m | 3,20m | 4,0m</div>
                <div><strong>Tecido:</strong> 100% Poliéster Náutico</div>
                <div><strong>Tensão:</strong> Curvatura superior contínua</div>
              </div>
              <a
                href={`${whatsappUrl}%20Modelo%20Gota.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal w-full justify-center text-xs py-2.5"
              >
                Orçar Refil Gota
              </a>
            </div>

            {/* Modelo 2: Faca / Pena */}
            <div className="product-card p-6 text-center group hover:border-blue-500">
              <div className="h-44 bg-slate-50 rounded-xl flex items-center justify-center p-4 mb-5 border border-slate-100 group-hover:bg-blue-50/50 transition-colors">
                <div className="relative w-20 h-36 border-2 border-dashed border-emerald-400 rounded-tr-3xl rounded-bl-3xl flex items-center justify-center bg-white shadow-sm">
                  <span className="text-xs font-bold text-emerald-600 uppercase transform -rotate-90">Faca/Pena</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">Modelo Faca / Pena</h3>
              <p className="text-xs text-slate-500 mb-4">O corte mais clássico e versátil para calçadas e fachadas de lojas.</p>
              <div className="text-left bg-slate-50 p-3 rounded-lg text-xs space-y-1.5 text-slate-600 mb-5">
                <div><strong>Alturas:</strong> 2,0m | 2,60m | 3,20m | 4,0m</div>
                <div><strong>Tecido:</strong> 100% Poliéster Náutico</div>
                <div><strong>Tensão:</strong> Corte diagonal dinâmico</div>
              </div>
              <a
                href={`${whatsappUrl}%20Modelo%20Faca.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal w-full justify-center text-xs py-2.5"
              >
                Orçar Refil Faca
              </a>
            </div>

            {/* Modelo 3: Vela */}
            <div className="product-card p-6 text-center group hover:border-blue-500">
              <div className="h-44 bg-slate-50 rounded-xl flex items-center justify-center p-4 mb-5 border border-slate-100 group-hover:bg-blue-50/50 transition-colors">
                <div className="relative w-20 h-36 border-2 border-dashed border-amber-400 rounded-t-xl rounded-b-none flex items-center justify-center bg-white shadow-sm">
                  <span className="text-xs font-bold text-amber-600 uppercase transform -rotate-90">Vela</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">Modelo Vela (Blade)</h3>
              <p className="text-xs text-slate-500 mb-4">Maior área útil retangular para textos longos e listas de serviços.</p>
              <div className="text-left bg-slate-50 p-3 rounded-lg text-xs space-y-1.5 text-slate-600 mb-5">
                <div><strong>Alturas:</strong> 2,0m | 2,60m | 3,20m | 4,0m</div>
                <div><strong>Tecido:</strong> 100% Poliéster Náutico</div>
                <div><strong>Tensão:</strong> Formato reto na base</div>
              </div>
              <a
                href={`${whatsappUrl}%20Modelo%20Vela.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal w-full justify-center text-xs py-2.5"
              >
                Orçar Refil Vela
              </a>
            </div>

            {/* Modelo 4: Retangular / Reto */}
            <div className="product-card p-6 text-center group hover:border-blue-500">
              <div className="h-44 bg-slate-50 rounded-xl flex items-center justify-center p-4 mb-5 border border-slate-100 group-hover:bg-blue-50/50 transition-colors">
                <div className="relative w-20 h-36 border-2 border-dashed border-purple-400 rounded-none flex items-center justify-center bg-white shadow-sm">
                  <span className="text-xs font-bold text-purple-600 uppercase transform -rotate-90">Retangular</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">Modelo Retangular</h3>
              <p className="text-xs text-slate-500 mb-4">100% de área plana com haste horizontal superior para máxima leitura.</p>
              <div className="text-left bg-slate-50 p-3 rounded-lg text-xs space-y-1.5 text-slate-600 mb-5">
                <div><strong>Alturas:</strong> 2,0m | 2,60m | 3,20m</div>
                <div><strong>Tecido:</strong> 100% Poliéster Náutico</div>
                <div><strong>Tensão:</strong> Haste com braço superior</div>
              </div>
              <a
                href={`${whatsappUrl}%20Modelo%20Retangular.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-royal w-full justify-center text-xs py-2.5"
              >
                Orçar Refil Retangular
              </a>
            </div>

          </div>

          {/* Tabela de Especificações Técnicas */}
          <div className="max-w-4xl mx-auto glass-card overflow-hidden border border-slate-200 shadow-md">
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
              <h3 className="font-bold text-lg font-heading">
                Ficha Técnica: Somente Bandeira Wind Banner (Refil Avulso)
              </h3>
              <span className="text-xs bg-blue-600 px-3 py-1 rounded-full font-bold uppercase">
                Padrão Industrial
              </span>
            </div>

            <div className="divide-y divide-slate-100 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 hover:bg-slate-50/60">
                <span className="font-bold text-slate-900">Composição do Tecido</span>
                <span className="sm:col-span-2 text-slate-700">100% Microfibra de Poliéster Especial (Flag Náutico com trama anti-desfiamento).</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 hover:bg-slate-50/60">
                <span className="font-bold text-slate-900">Tecnologia de Impressão</span>
                <span className="sm:col-span-2 text-slate-700">Sublimação Digital Térmica Direta (1440 DPI) com fixação molecular de cor a 200°C.</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 hover:bg-slate-50/60">
                <span className="font-bold text-slate-900">Tipos de Impressão</span>
                <span className="sm:col-span-2 text-slate-700">Face Única (com 100% de vazamento de cor para o verso) ou Dupla Face com blackout intermediário.</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 hover:bg-slate-50/60">
                <span className="font-bold text-slate-900">Acabamento e Costura</span>
                <span className="sm:col-span-2 text-slate-700">Bainha perimetral dupla reforçada com linha de alta tenacidade e passador (túnel) elástico com ponteira reforçada.</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 hover:bg-slate-50/60">
                <span className="font-bold text-slate-900">Resistência Climática</span>
                <span className="sm:col-span-2 text-slate-700">Proteção UV contra desbotamento solar, resistente a chuvas ácidas, intempéries e ventos de até 45 km/h.</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 hover:bg-slate-50/60">
                <span className="font-bold text-slate-900">Lavabilidade</span>
                <span className="sm:col-span-2 text-slate-700">100% Lavável à mão ou na máquina de lavar (ciclo suave com sabão neutro). Secagem rápida.</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 hover:bg-slate-50/60">
                <span className="font-bold text-slate-900">Formatos Compatíveis</span>
                <span className="sm:col-span-2 text-slate-700">Gota (Drop), Pena / Faca (Feather), Vela (Blade) e Retangular / Reto.</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 hover:bg-slate-50/60">
                <span className="font-bold text-slate-900">Compatibilidade de Hastes</span>
                <span className="sm:col-span-2 text-slate-700">Compatível com hastes de fibra de vidro ou alumínio de 2,0m, 2,60m, 3,20m e 4,0m.</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 hover:bg-slate-50/60">
                <span className="font-bold text-slate-900">O que está incluso</span>
                <span className="sm:col-span-2 text-emerald-800 font-semibold">Exclusivamente o tecido impresso personalizado com passador e bainha (sem haste e sem base).</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* PASSO A PASSO: COMO MEDIR E PEDIR SEU REFIL                                */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold uppercase rounded-full mb-3">
              Simples e Rápido
            </span>
            <h2 className="section-title text-slate-900 font-heading">
              Como Encomendar <span className="text-gradient-brand">Somente a Bandeira</span> do seu Wind Banner
            </h2>
            <p className="section-subtitle">
              Siga os 4 passos fáceis para renovar a arte do seu wind banner sem complicação:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            
            {/* Passo 1 */}
            <div className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center shadow-md font-heading text-lg">
                1
              </span>
              <div className="mt-4">
                <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">Identifique o Modelo</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Verifique se a sua haste é formato <strong>Gota</strong>, <strong>Faca</strong>, <strong>Vela</strong> ou <strong>Retangular</strong>. Na dúvida, tire uma foto do wind banner montado.
                </p>
              </div>
            </div>

            {/* Passo 2 */}
            <div className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center shadow-md font-heading text-lg">
                2
              </span>
              <div className="mt-4">
                <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">Confirme as Medidas</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Informe a altura total da haste (2m, 2.6m ou 3.2m) ou passe a medida aproximada do tecido antigo esticado para nossa equipe conferir.
                </p>
              </div>
            </div>

            {/* Passo 3 */}
            <div className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center shadow-md font-heading text-lg">
                3
              </span>
              <div className="mt-4">
                <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">Envie a Arte ou Logotipo</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Envie seu arquivo por WhatsApp. Nossos designers montam o <strong>mockup virtual 100% gratuito</strong> para você aprovar antes de estampar.
                </p>
              </div>
            </div>

            {/* Passo 4 */}
            <div className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-emerald-600 text-white font-black flex items-center justify-center shadow-md font-heading text-lg">
                4
              </span>
              <div className="mt-4">
                <h3 className="font-bold text-lg text-slate-900 mb-2 font-heading">Produção & Envio Rápido</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Produzimos seu refil avulso em 24h a 48h com entrega expressa para SP ou despacho rápido para todo o território nacional.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-base sm:text-lg inline-flex items-center gap-2"
            >
              <Image
                src="/images/WhatsApp_icon.png"
                alt="WhatsApp"
                width={22}
                height={22}
              />
              Enviar Medidas pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* GALERIA DE FOTOS COM ALT OTIMIZADO                                        */}
      {/* ========================================================================= */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase rounded-full mb-3">
              Portfólio Real
            </span>
            <h2 className="section-title text-slate-900 font-heading">
              Galeria: <span className="text-gradient-brand">Somente Bandeira Wind Banner</span>
            </h2>
            <p className="section-subtitle">
              Veja o resultado da nossa impressão em tecido sublimático com alta saturação e acabamento profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Foto 1 */}
            <div className="product-card group overflow-hidden bg-white">
              <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/bandeira_impressao.jpg"
                  alt="Somente bandeira wind banner - Tecido avulso sublimado com alta definição de cores"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 font-heading">Impressão Sublimática Direta</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Somente bandeira wind banner com cores vivas e secagem rápida para ações externas.
                </p>
              </div>
            </div>

            {/* Foto 2 */}
            <div className="product-card group overflow-hidden bg-white">
              <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/wind_banner_mpd.jpeg"
                  alt="Somente bandeira wind banner gota e faca instalada em evento corporativo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 font-heading">Refil para Eventos e Construtoras</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Troca rápida de tecido para novos lançamentos imobiliários e feiras de negócios.
                </p>
              </div>
            </div>

            {/* Foto 3 */}
            <div className="product-card group overflow-hidden bg-white">
              <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/wind_marabraz_entrega24hs_alphaville.png"
                  alt="Somente bandeira wind banner comercial personalizada com entrega expressa"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 font-heading">Refil para Comércio e Lojas</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Destaque promoções de calçada renovando apenas a bandeira com baixo custo.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FAQ - PERGUNTAS FREQUENTES                                                */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold uppercase rounded-full mb-3">
              Tire Suas Dúvidas
            </span>
            <h2 className="section-title text-slate-900 font-heading">
              Perguntas Frequentes sobre <span className="text-gradient-brand">Somente a Bandeira</span>
            </h2>
            <p className="section-subtitle">
              Respostas claras sobre refil de tecido avulso, compatibilidade de hastes, lavagem e prazos de entrega.
            </p>
          </div>

          <RefilFAQ />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CTA FINAL / BANNER DE CONVERSÃO                                           */}
      {/* ========================================================================= */}
      <section className="py-20 hero-gradient relative overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              🚀 Pronto para Renovar sua Comunicação?
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 font-heading leading-tight">
              Encomende <span className="text-gradient-brand">Somente a Bandeira</span> do seu Wind Banner Hoje!
            </h2>

            <p className="text-base sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Economize reutilizando suas hastes e bases antigas. Atendimento rápido, montagem gratuita de arte e envio com garantia de fábrica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-lg sm:text-xl px-10 py-4 shadow-xl group w-full sm:w-auto text-center"
              >
                <Image
                  src="/images/WhatsApp_icon.png"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  className="mr-3 transition-transform group-hover:scale-110 shrink-0 inline-block"
                />
                Falar com Especialista no WhatsApp
              </a>

              <a
                href="tel:11954997799"
                className="btn-outline text-base px-8 py-4 w-full sm:w-auto text-center"
              >
                Ligar: (11) 95499-7799
              </a>
            </div>

            <p className="text-xs text-slate-500 mt-6">
              Atendimento de Segunda a Sexta das 9h às 18h | Sábados das 9h às 13h
            </p>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOOTER OFICIAL                                                            */}
      {/* ========================================================================= */}
      <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* Col 1: Brand */}
            <div className="md:col-span-2">
              <Image
                src="/images/libracom_logo_preto_navbar.png"
                alt="Libracom Wind Banners"
                width={140}
                height={45}
                className="mb-4 brightness-0 invert opacity-90"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-4">
                A Libracom é fabricante especialista em Wind Banners, refis de bandeiras avulsas em tecido sublimático e soluções completas de comunicação visual de alto impacto.
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Produção própria e envio rápido para todo o Brasil.
              </div>
            </div>

            {/* Col 2: Links Rápidos */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 font-heading">
                Páginas do Site
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                    Página Inicial
                  </Link>
                </li>
                <li>
                  <Link href="/somente-bandeira-wind-banner" className="text-emerald-400 font-semibold hover:underline">
                    Somente Bandeira (Refil)
                  </Link>
                </li>
                <li>
                  <Link href="/wind-banner-barueri" className="text-slate-400 hover:text-white transition-colors">
                    Wind Banner em Barueri
                  </Link>
                </li>
                <li>
                  <Link href="/wind-banner-personalizado-eventos" className="text-slate-400 hover:text-white transition-colors">
                    Wind Banner para Eventos
                  </Link>
                </li>
                <li>
                  <Link href="/wind-banner-vs-bandeira-comum" className="text-slate-400 hover:text-white transition-colors">
                    Wind Banner vs Bandeira Comum
                  </Link>
                </li>
                <li>
                  <Link href="/entrega-rapida-24h" className="text-slate-400 hover:text-white transition-colors">
                    Entrega Rápida 24h
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Contato */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 font-heading">
                Fale Conosco
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://wa.me/5511954997799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <Image
                      src="/images/WhatsApp_icon.png"
                      alt="WhatsApp"
                      width={18}
                      height={18}
                    />
                    (11) 95499-7799
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato.libracom@gmail.com"
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contato.libracom@gmail.com
                  </a>
                </li>
                <li className="text-slate-400 flex items-start gap-2">
                  <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Barueri e Alphaville - SP (Atendimento Nacional)</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Libracom Wind Banners. Todos os direitos reservados.</p>
            <p>CNPJ e Fabricação Própria de Material Promocional e Refil de Wind Banner.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
