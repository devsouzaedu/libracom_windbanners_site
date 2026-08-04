"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import ProductConfigurator from "./components/ProductConfigurator";
import InfiniteBrandSlider from "./components/InfiniteBrandSlider";
import FAQ from "./components/FAQ";
import WhatsAppFloat from "./components/WhatsAppFloat";

// New high-resolution Rectangular/Square product photos database
const new2026Photos = [
  {
    src: "/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (1).png",
    alt: "Wind Banner Retangular Modelo Reto - Libracom Barueri",
    label: "Wind Banner Retangular 2,60m",
    loc: "Barueri, SP",
    desc: "Bandeira retangular premium com cores vivas e caimento impecável.",
    whatsappText: "Olá! Vi a foto do Wind Banner Retangular de 2,60m no portfólio e gostaria de um orçamento..."
  },
  {
    src: "/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (2).jpg",
    alt: "Wind Banner Quadrado Promocional - Libracom Alphaville",
    label: "Wind Banner Retângulo Destaque",
    loc: "Alphaville, SP",
    desc: "Maior área útil do mercado, garantindo excelente visibilidade para logotipos.",
    whatsappText: "Olá! Vi a foto do Wind Banner Retângulo Destaque no portfólio e gostaria de um orçamento..."
  },
  {
    src: "/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (3).jpg",
    alt: "Wind Banner Reto Completo - Libracom",
    label: "Wind Banner Reto 3,20m",
    loc: "Tamboré, SP",
    desc: "Modelo completo com haste ultra-resistente e base robusta.",
    whatsappText: "Olá! Gostei do Wind Banner Reto de 3,20m completo e gostaria de um orçamento..."
  },
  {
    src: "/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (4).jpg",
    alt: "Bandeira de Vento Retangular - Libracom",
    label: "Wind Banner Quadrado Premium",
    loc: "Barueri, SP",
    desc: "Tecido especial com 20% de transparência para leitura perfeita de ambos os lados.",
    whatsappText: "Olá! Vi a foto do Wind Banner Quadrado Premium com 20% de transparência e queria um orçamento..."
  },
  {
    src: "/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (5).jpg",
    alt: "Wind Banner Reto Barueri - Libracom",
    label: "Wind Banner Retangular 2,0m",
    loc: "São Paulo, SP",
    desc: "Estrutura compacta ideal para entrada de lojas e calçadas.",
    whatsappText: "Olá! Vi a foto do Wind Banner Retangular de 2,0m no portfólio e gostaria de cotação..."
  }
];

export default function Home() {
  const [activeHeroImageIndex, setActiveHeroImageIndex] = useState(0);

  const heroImage = new2026Photos[activeHeroImageIndex];

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans scroll-smooth relative">
      {/* Header */}
      <Header />

      {/* Floating WhatsApp */}
      <WhatsAppFloat />

      {/* ===== HERO SECTION (MINIMALIST & ROYAL BLUE) ===== */}
      <section className="hero-gradient min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden">
        {/* Subtle royal blue ambient glow elements */}
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-indigo-500/3 rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column - Clean high-contrast copy */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
              
              {/* Clean Promo Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-700 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl border border-blue-100 shadow-sm animate-bounce-subtle">
                <span>🚨 PROMOÇÃO ATIVA:</span>
                <span className="text-slate-800">Wind Banner Reto a partir de R$ 280,00!</span>
              </div>

              {/* Minimalist Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 font-heading">
                Divulgue seu negócio com <br />
                <span className="text-brand-700">Destaque Absoluto</span>
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Chame a atenção de quem passa em frente do seu comércio! Wind Banners nos formatos <strong className="text-slate-950 font-bold border-b border-brand-700">Retangular e Quadrado (Modelo Reto)</strong>. Tecido premium com <strong className="text-slate-950 font-bold border-b border-brand-700">20% de transparência</strong> que garante perfeita visualização de ambos os lados, com cores vivas e excelente caimento para girar com o vento.
              </p>

              {/* Warning Box inside Hero area */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-left shadow-xs">
                <div className="flex gap-3">
                  <span className="text-2xl shrink-0">⚠️</span>
                  <div>
                    <h4 className="text-xs font-black uppercase text-amber-800 tracking-wider">Aviso Importante de Linha de Produção</h4>
                    <p className="text-xs text-amber-700 font-medium mt-1 leading-relaxed">
                      NÃO fabricamos wind banners nos modelos Gota, Faca, Pena ou Vela. Trabalhamos <strong>exclusivamente com o Modelo Reto (Retangular / Quadrado)</strong>, que oferece até 40% mais área de exibição e leitura de logo do que outros formatos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Promotional Table Card */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 max-w-md mx-auto lg:mx-0 shadow-xs">
                <h3 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">Tabela de Preços Modelo Reto 2026</h3>
                <div className="space-y-2.5 text-xs md:text-sm">
                  <div className="flex justify-between items-center text-slate-700">
                    <span className="font-semibold">Kit Completo 2,0m (Haste + Base + Bandeira)</span>
                    <span className="font-black text-slate-900">R$ 280,00</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span className="font-semibold">Kit Completo 2,60m (Mais Vendido)</span>
                    <span className="font-black text-brand-700">R$ 320,00</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span className="font-semibold">Kit Completo 3,20m</span>
                    <span className="font-black text-slate-900">R$ 360,00</span>
                  </div>
                  <div className="separator-glow my-2"></div>
                  <div className="flex justify-between items-center text-slate-700 font-bold">
                    <span>Somente Bandeira Retangular (Reposição)</span>
                    <span className="text-emerald-600 font-black">A partir de R$ 150,00</span>
                  </div>
                </div>
              </div>

              {/* Simple CTA Row */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
                <a
                  href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá, Libracom! Gostaria de garantir a promoção especial do Wind Banner Retangular Modelo Reto a partir de R$ 280,00. Podem me ajudar com a arte?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta px-8 py-4 text-sm font-bold uppercase tracking-wider relative overflow-hidden group shadow-md"
                >
                  <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Garantir Preço Especial
                </a>

                <a
                  href="#configurador"
                  className="btn-outline px-6 py-4 text-xs font-bold uppercase tracking-wider border-slate-200 text-slate-700 hover:border-brand-700 hover:text-brand-700"
                >
                  ⚙️ Simular Orçamento
                </a>
              </div>
            </div>

            {/* Right Column - Clean Showcase Slider with user's specific photos */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-3 shadow-md relative group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    className="object-cover transition-all duration-300"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Info tag overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm z-20">
                    <div>
                      <span className="text-[10px] text-brand-700 uppercase tracking-widest font-black block">Foto real do produto reto</span>
                      <h4 className="font-bold text-slate-800 text-xs md:text-sm">{heroImage.label}</h4>
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-500 font-bold px-2 py-1 rounded">📍 {heroImage.loc}</span>
                  </div>
                </div>

                {/* Left/Right simple buttons */}
                <button
                  onClick={() => setActiveHeroImageIndex(prev => (prev === 0 ? new2026Photos.length - 1 : prev - 1))}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-brand-700 transition-all z-20"
                  aria-label="Foto Anterior"
                  type="button"
                >
                  ◀
                </button>
                <button
                  onClick={() => setActiveHeroImageIndex(prev => (prev === new2026Photos.length - 1 ? 0 : prev + 1))}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/95 border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-brand-700 transition-all z-20"
                  aria-label="Próxima Foto"
                  type="button"
                >
                  ▶
                </button>
              </div>

              {/* Thumbnails indicator list (User photos preview) */}
              <div className="flex gap-2 overflow-x-auto py-2 px-1 scrollbar-hide">
                {new2026Photos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveHeroImageIndex(index)}
                    className={`
                      relative w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all duration-200
                      ${activeHeroImageIndex === index
                        ? "border-brand-700 scale-105 shadow-sm"
                        : "border-slate-200 opacity-60 hover:opacity-100"
                      }
                    `}
                    type="button"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                💡 Clique nos quadradinhos acima para navegar por fotos reais do modelo retangular!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AVISO PRINCIPAL EM DESTAQUE GERAL ===== */}
      <section className="py-8 bg-amber-500 text-amber-950 font-black border-y border-amber-600">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left">
          <span className="text-3xl">⚠️</span>
          <div>
            <h3 className="text-sm md:text-base font-black tracking-wide uppercase">SOMENTE MODELO RETO (RETANGULAR / QUADRADO)</h3>
            <p className="text-xs font-bold text-amber-900 mt-0.5 leading-relaxed">
              Não trabalhamos com wind banner modelos Faca, Pena, Vela ou Gota. Nosso foco é 100% no modelo reto, garantindo maior durabilidade e área de exibição da sua marca.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS GRID (MINIMALIST & PRICE UPDATE) ===== */}
      <section id="produtos" className="py-24 bg-slate-50 border-t border-slate-100 scroll-mt-16 text-slate-750">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-3">
            <span className="bg-blue-50 text-brand-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100">
              💎 Modelos Disponíveis
            </span>
          </div>
          <h2 className="section-title text-slate-950 font-heading">
            Sinalização no <span className="text-gradient-brand">Modelo Reto Premium</span>
          </h2>
          <p className="section-subtitle !text-slate-500">
            Estruturas reforçadas e bandeiras com acabamento impecável e 20% de transparência para atrair a atenção do seu público
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            
            {/* 1. Wind Banner Completo */}
            <div className="product-card group flex flex-col justify-between h-full bg-white border border-slate-200">
              <div>
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (1).png"
                    alt="Wind Banner Completo - Bandeira Retangular, Haste e Base"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-brand-700 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded">
                      Completo
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">Wind Banner Completo</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Kit completo contendo haste flexível em fibra de vidro de alta resistência, base reforçada estável e bandeira impressa em poliéster premium com 20% de transparência.
                  </p>
                  
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Preços dos Kits:</span>
                    <ul className="text-xs text-slate-700 space-y-1.5 font-semibold">
                      <li className="flex justify-between"><span>Altura 2,00m</span> <span className="text-slate-900 font-bold">R$ 280,00</span></li>
                      <li className="flex justify-between"><span>Altura 2,60m</span> <span className="text-brand-700 font-black">R$ 320,00 (Destaque)</span></li>
                      <li className="flex justify-between"><span>Altura 3,20m</span> <span className="text-slate-900 font-bold">R$ 360,00</span></li>
                    </ul>
                  </div>

                  <ul className="text-xs text-slate-400 space-y-1 pt-1">
                    <li>✓ Modelo Retangular/Quadrado Reto</li>
                    <li>✓ Tecido especial 20% de transparência</li>
                    <li>✓ Haste reforçada e Base inclusas</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">A partir de</span>
                  <span className="text-xl font-black text-brand-700 font-heading">R$ 280<span className="text-xs text-slate-400 font-medium">/un</span></span>
                </div>
                <a
                  href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá! Gostaria de encomendar o Kit Wind Banner Completo Modelo Reto da promoção...")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>

            {/* 2. Bandeira Avulsa */}
            <div className="product-card group flex flex-col justify-between h-full bg-white border border-slate-200">
              <div>
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (4).jpg"
                    alt="Somente Bandeira de reposição reto retangular"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded">
                      Reposição
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">Somente Bandeira</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Apenas a bandeira impressa em poliéster premium com costuras reforçadas e caimento perfeito. Ideal para reposição utilizando suas hastes e bases existentes.
                  </p>

                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-1">Preços da Bandeira:</span>
                    <ul className="text-xs text-slate-700 space-y-1.5 font-semibold">
                      <li className="flex justify-between"><span>Altura 2,00m</span> <span className="text-slate-900 font-bold">R$ 150,00</span></li>
                      <li className="flex justify-between"><span>Altura 2,60m</span> <span className="text-brand-700 font-black">R$ 180,00</span></li>
                      <li className="flex justify-between"><span>Altura 3,20m</span> <span className="text-slate-900 font-bold">R$ 200,00</span></li>
                    </ul>
                  </div>

                  <ul className="text-xs text-slate-400 space-y-1 pt-1">
                    <li>✓ Estampa Ultra HD frente e verso</li>
                    <li>✓ Tecido especial 20% transparência</li>
                    <li>✓ Encaixe padrão universal para modelo reto</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">A partir de</span>
                  <span className="text-xl font-black text-brand-700 font-heading">R$ 150<span className="text-xs text-slate-400 font-medium">/un</span></span>
                </div>
                <a
                  href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá! Gostaria de encomendar a Bandeira Avulsa de reposição do modelo reto...")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== DIFFERENTIALS (MINIMALIST & WHITE) ===== */}
      <section id="sobre" className="py-24 bg-white text-slate-800 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-3">
            <span className="bg-blue-50 text-brand-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100">
              💎 Nossos Diferenciais
            </span>
          </div>
          <h2 className="section-title text-slate-950 font-heading">
            Excelência de Fábrica com <span className="text-brand-700">Acabamento Superior</span>
          </h2>
          <p className="section-subtitle !text-slate-500">
            Diferenciais que nos tornam a maior referência de wind banners no modelo reto na região
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: "✨",
                title: "Bandeira com 20% de Transparência",
                desc: "Tecido especial com caimento ideal. Garante que a estampa seja legível e perfeitamente visível de ambos os lados mesmo imprimindo uma única face."
              },
              {
                icon: "📐",
                title: "Modelo Reto (Exclusivo)",
                desc: "Foco integral em wind banner retangular e quadrado. Maior área de sinalização do mercado para que o seu logo fique sempre esticado e legível."
              },
              {
                icon: "⏱️",
                title: "Produção Expressa em 24h",
                desc: "Fábrica própria em Barueri. Produzimos com agilidade máxima para atender inaugurações de lojas e feiras comerciais de última hora."
              },
              {
                icon: "🎨",
                title: "Criação de Arte Grátis",
                desc: "Nossa equipe de criação desenvolve ou ajusta a sua arte comercial sem custos. Você visualiza o layout e aprova antes de produzir!"
              }
            ].map((differential, i) => (
              <div
                key={i}
                className="product-card-light text-center p-8 group hover:-translate-y-1.5 transition-all duration-300 relative border border-slate-200/80 shadow-xs"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-blue-50 text-brand-700 text-2xl flex items-center justify-center border border-blue-100 shadow-xs group-hover:scale-105 transition-transform">
                  {differential.icon}
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2 font-heading">
                  {differential.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {differential.desc}
                </p>
              </div>
            ))}
          </div>

          {/* B2B board simplified */}
          <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-xl text-center md:text-left">
              <span className="bg-blue-100 text-brand-700 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded">
                💼 Agências & Compras Corporativas
              </span>
              <h3 className="text-xl md:text-2xl font-black text-slate-950 font-heading">
                Faturamento no Boleto para sua Empresa
              </h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                Adquira materiais promocionais para feiras, redes de franquia ou lojas de rua com a maior facilidade do mercado. Descontos progressivos por volume.
              </p>
            </div>

            <a
              href="https://wa.me/5511954997799?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor%20B2B%20sobre%20orçamentos%20de%20Wind%20Banners%20para%20minha%20empresa..."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal text-xs font-black uppercase tracking-wider px-6 py-4.5 shadow-md shrink-0 group relative overflow-hidden"
            >
              Atendimento Comercial B2B
            </a>
          </div>
        </div>
      </section>

      {/* ===== THE LIVE CONFIGURATOR COMPONENT ===== */}
      <ProductConfigurator />

      {/* ===== PORTFOLIO SHOWCASE (POPULATED WITH THE 5 NEW HIGH-RES PHOTOS) ===== */}
      <section id="portfolio" className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-3">
            <span className="bg-blue-50 text-brand-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100">
              📸 Galeria de Entregas 2026
            </span>
          </div>
          <h2 className="section-title text-slate-950 font-heading">
            Trabalhos Realizados na <span className="text-gradient-brand">Região de Barueri</span>
          </h2>
          <p className="section-subtitle !text-slate-500">
            Veja fotos reais dos nossos wind banners premium retangulares e quadrados entregues para comércios locais parceiros
          </p>

          {/* Grid Portfolio container with the new photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {new2026Photos.map((item, i) => (
              <div
                key={i}
                className="product-card-light bg-white border border-slate-200 relative flex flex-col justify-between overflow-hidden group shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden w-full bg-slate-100">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Clean hover trigger */}
                  <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4 z-20">
                    <h4 className="text-white text-xs font-bold text-center uppercase tracking-wider">{item.label}</h4>
                    <p className="text-slate-350 text-[10px] text-center max-w-[200px]">{item.desc}</p>
                    <a
                      href={`https://wa.me/5511954997799?text=${encodeURIComponent(item.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wider py-2 px-4 rounded-lg shadow-sm transition-colors"
                    >
                      💬 Solicitar Igual
                    </a>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between border-t border-slate-100 bg-white">
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-slate-800 text-sm font-heading">
                      {item.label}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Libracom 2026</span>
                  </div>
                  <p className="text-[10px] text-slate-500 flex items-center gap-1 font-bold bg-slate-50 px-2 py-1 rounded border border-slate-200">
                    <span>📍</span>
                    {item.loc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRANDS SLIDER ===== */}
      <InfiniteBrandSlider />

      {/* ===== SOCIAL PROOF / GOOGLE REVIEWS ===== */}
      <section className="py-24 bg-white text-slate-900 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-3">
            <span className="bg-blue-50 text-brand-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100">
              ⭐ Google Avaliações
            </span>
          </div>
          <h2 className="section-title text-slate-950 font-heading">
            Satisfação em <span className="text-gradient-brand">Primeiro Lugar</span>
          </h2>
          <p className="section-subtitle !text-slate-500">
            Confira a opinião de quem já comprou e comprova a qualidade superior das nossas bandeiras retas
          </p>

          {/* Simple Rating Widget */}
          <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-center gap-5 mb-12">
            <span className="text-4xl font-black text-slate-950 font-heading">5.0</span>
            <div className="separator-glow h-8 w-0.5 bg-slate-300"></div>
            <div>
              <div className="flex gap-0.5 text-amber-400 text-base">
                {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
              </div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                Mais de 128 avaliações nota máxima no Google
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Marcos Costa",
                role: "Organizador de Eventos",
                initials: "MC",
                text: "O material é excelente, o wind banner retangular vem com haste forte e uma base firme que segura super bem na calçada. O acabamento com 20% de transparência garante a leitura nítida do nosso logotipo em ambos os lados.",
              },
              {
                name: "Ana Silva",
                role: "Marketing - Tamboré",
                initials: "AS",
                text: "Adquirimos os wind banners de modelo reto para a frente da loja. O caimento do tecido retangular é fantástico e a transparência ideal permite visualizar de qualquer sentido da avenida. Excelente atendimento corporativo.",
              },
              {
                name: "Ricardo Lima",
                role: "Comércio - Barueri Centro",
                initials: "RL",
                text: "Estávamos precisando de bandeiras de calçada para a nossa inauguração. O formato quadrado reto chamou muita atenção por ficar esticado mesmo sem vento. Entrega super rápida em Barueri.",
              },
            ].map((t, i) => (
              <div key={i} className="product-card-light p-6 border border-slate-200 bg-white flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex gap-0.5 text-amber-400 text-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 italic text-xs md:text-sm leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-700 font-black text-xs flex items-center justify-center border border-blue-100">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs md:text-sm">{t.name}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <div id="faq">
        <FAQ />
      </div>

      {/* ===== CONTACT & DETAILS SECTION ===== */}
      <section id="contato" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-16 text-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex justify-center">
              <span className="bg-blue-50 text-brand-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100">
                💬 Atendimento Imediato
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-heading">
              Pronto para Turbinar sua Divulgação?
            </h2>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
              Nossa equipe de criação de arte e atendimento de fábrica está de prontidão para responder e planejar o design do seu material sem custos!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 text-left items-stretch">
              
              {/* Channel Detail Card */}
              <div className="product-card-light p-6 md:p-8 bg-white flex flex-col justify-between border border-slate-200 shadow-xs">
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-slate-950 font-heading">Informações de Fábrica</h3>
                  
                  <div className="space-y-3.5 text-xs md:text-sm font-semibold text-slate-650">
                    <a href="tel:11954997799" className="flex items-center gap-3 text-slate-600 hover:text-brand-700 transition-colors">
                      <span className="text-base">📞</span> (11) 95499-7799
                    </a>
                    <a href="mailto:contato.libracom@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-brand-700 transition-colors">
                      <span className="text-base">✉️</span> contato.libracom@gmail.com
                    </a>
                    <div className="flex items-center gap-3 text-slate-600">
                      <span className="text-base">📍</span> Barueri, Alphaville - SP
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 space-y-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Atendimento Comercial</span>
                  <div className="grid grid-cols-2 gap-4 text-xs font-bold text-slate-600">
                    <div>
                      <span>Segunda a Sexta</span>
                      <span className="block text-slate-800 mt-0.5">9h às 18h</span>
                    </div>
                    <div>
                      <span>Sábado</span>
                      <span className="block text-slate-800 mt-0.5">9h às 13h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Call Card */}
              <div className="product-card-light p-6 md:p-8 bg-white flex flex-col justify-between border border-slate-200 shadow-xs">
                <div className="space-y-3">
                  <h3 className="text-lg font-black text-slate-950 font-heading">Fale Conosco Online</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Clique no botão abaixo para abrir uma conversa prioritária no WhatsApp. Nossos designers profissionais geram um layout virtual da sua arte sem qualquer custo ou compromisso de compra!
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>Consultores prontos para criar sua arte</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá! Estou no site e gostaria de falar com um consultor comercial sobre os Wind Banners Retangulares...")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta w-full justify-center py-3.5 mt-6 group"
                >
                  <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="mr-2.5 transition-transform duration-200 group-hover:scale-110"
                  />
                  Chamar no WhatsApp
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800 text-slate-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Brand details */}
            <div className="md:col-span-1 space-y-4">
              <Image
                src="/images/libracom_logo_preto_navbar.png"
                alt="Libracom Wind Banners Logo"
                width={130}
                height={40}
                className="brightness-0 invert opacity-90"
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <p className="text-xs leading-relaxed text-slate-400">
                Libracom é referência em fabricação de Wind Banners modelo Reto (Retangular / Quadrado) em Barueri, Alphaville e São Paulo. Entrega rápida de fábrica e tecidos com 20% de transparência.
              </p>
            </div>

            {/* Catalog Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">Nosso Catálogo</h4>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><a href="#produtos" className="hover:text-white transition-colors">Wind Banner Completo</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors">Somente Bandeira (Reposição)</a></li>
                <li><a href="#configurador" className="hover:text-white transition-colors">Simulador de Pedido</a></li>
              </ul>
            </div>

            {/* Pages Routing Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">Rotas e Destaques</h4>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><Link href="/wind-banner-barueri" className="hover:text-white transition-colors">Wind Banner em Barueri</Link></li>
                <li><Link href="/wind-banner-personalizado-eventos" className="hover:text-white transition-colors">Wind Banner para Eventos</Link></li>
                <li><Link href="/wind-banner-vs-bandeira-comum" className="hover:text-white transition-colors">Wind Banner vs Bandeira Comum</Link></li>
                <li><Link href="/entrega-rapida-24h" className="hover:text-white transition-colors">Entrega Rápida em 24h</Link></li>
              </ul>
            </div>

            {/* Local business details */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">Contato Comercial</h4>
              <ul className="space-y-2 text-xs md:text-sm font-semibold">
                <li>
                  <a href="tel:11954997799" className="hover:text-white transition-colors flex items-center gap-2 text-slate-300">
                    <span>📞</span> (11) 95499-7799
                  </a>
                </li>
                <li>
                  <a href="mailto:contato.libracom@gmail.com" className="hover:text-white transition-colors flex items-center gap-2 text-slate-300">
                    <span>✉️</span> contato.libracom@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span>📍</span> Barueri, Alphaville - SP
                </li>
              </ul>
            </div>
          </div>

          <div className="separator-glow mt-12 mb-8 !bg-slate-800"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-bold">
            <p>© {new Date().getFullYear()} Libracom Wind Banners. Todos os direitos reservados. CNPJ: 12.345.678/0001-90</p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5511954997799"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp Comercial"
              >
                <Image src="/images/WhatsApp_icon.png" alt="WhatsApp" width={20} height={20} className="opacity-40 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
