"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import ProductConfigurator from "./components/ProductConfigurator";
import InfiniteBrandSlider from "./components/InfiniteBrandSlider";
import FAQ from "./components/FAQ";
import WhatsAppFloat from "./components/WhatsAppFloat";

// New 2026 high-resolution product photos database
const new2026Photos = [
  {
    src: "/images/fotos novas 2026 wind banners em barueri libracom (10).jpeg",
    alt: "Wind Banners Promocionais 2026 - Libracom Barueri",
    label: "Wind Banners Calçada Premium",
    loc: "Barueri, SP",
    desc: "Acabamento superior de costuras duplas e zero transparência.",
    whatsappText: "Olá! Gostei das fotos dos Wind Banners de calçada do portfólio (Foto 10) e gostaria de solicitar um orçamento..."
  },
  {
    src: "/images/fotos novas 2026 wind banners em barueri libracom (9).jpeg",
    alt: "Wind Banner Corporativo 2026 - Libracom Tamboré",
    label: "Wind Banner Corporativo",
    loc: "Tamboré, SP",
    desc: "Impressão digital Ultra HD de alta fidelidade de cores.",
    whatsappText: "Olá! Gostei do Wind Banner Corporativo do portfólio (Foto 9) e gostaria de fazer uma cotação para minha marca..."
  },
  {
    src: "/images/fotos novas 2026 wind banners em barueri libracom (8).jpeg",
    alt: "Wind Banners Comerciais 2026 - Libracom Alphaville",
    label: "Wind Banner Destaque Comercial",
    loc: "Alphaville, SP",
    desc: "Formato gota de alta visibilidade ideal para frentes de lojas.",
    whatsappText: "Olá! Vi o Wind Banner de calçada comercial do portfólio (Foto 8) e gostaria de um orçamento..."
  },
  {
    src: "/images/fotos novas 2026 wind banners em barueri libracom (7).jpeg",
    alt: "Wind Banners Premium Zero Transparência 2026",
    label: "Wind Banner Zero Transparência",
    loc: "Barueri, SP",
    desc: "Poliéster especial de alta gramatura com cores vivas em ambos os lados.",
    whatsappText: "Olá! Vi o Wind Banner com zero transparência do portfólio (Foto 7) e queria fazer uma cotação..."
  },
  {
    src: "/images/fotos novas 2026 wind banners em barueri libracom (6).jpeg",
    alt: "Wind Banner Calçada Entrada de Loja 2026",
    label: "Wind Banner Entrada de Loja",
    loc: "Alphaville, SP",
    desc: "Haste reforçada flexível e base resistente.",
    whatsappText: "Olá! Vi o Wind Banner para entrada de loja do portfólio (Foto 6) e queria um orçamento..."
  },
  {
    src: "/images/fotos novas 2026 wind banners em barueri libracom (5).jpeg",
    alt: "Wind Banner Frente de Comércio 2026",
    label: "Wind Banner Frente de Comércio",
    loc: "Barueri, SP",
    desc: "Chame a atenção dos clientes que passam em frente do seu comércio.",
    whatsappText: "Olá! Vi o Wind Banner para frente de comércio do portfólio (Foto 5) e gostaria de orçamento..."
  },
  {
    src: "/images/fotos novas 2026 wind banners em barueri libracom (4).jpeg",
    alt: "Wind Banner Evento Corporativo Tamboré 2026",
    label: "Wind Banner para Eventos",
    loc: "Tamboré, SP",
    desc: "Estrutura premium leve e muito fácil de montar.",
    whatsappText: "Olá! Vi o Wind Banner de eventos do portfólio (Foto 4) e gostaria de cotação..."
  },
  {
    src: "/images/fotos novas 2026 wind banners em barueri libracom (3).jpeg",
    alt: "Wind Banners Dupla Face Alto Impacto 2026",
    label: "Wind Banner Dupla Face",
    loc: "Barueri, SP",
    desc: "Costuras industriais reforçadas com durabilidade prolongada contra chuva.",
    whatsappText: "Olá! Vi o Wind Banner dupla face de calçada do portfólio (Foto 3) e queria um orçamento..."
  },
  {
    src: "/images/fotos novas 2026 wind banners em barueri libracom (2).jpeg",
    alt: "Wind Banner Impressão Ultra HD 2026",
    label: "Wind Banner Ultra HD",
    loc: "Alphaville, SP",
    desc: "Impressão digital direta de altíssima nitidez de logotipos.",
    whatsappText: "Olá! Gostei do Wind Banner em alta resolução do portfólio (Foto 2) e gostaria de cotar um parecido..."
  },
  {
    src: "/images/fotos novas 2026 wind banners em barueri libracom (1).jpeg",
    alt: "Wind Banners Comerciais Barueri 2026",
    label: "Wind Banner Comercial Clássico",
    loc: "Barueri, SP",
    desc: "A melhor e mais barata ferramenta de marketing de calçada.",
    whatsappText: "Olá, Libracom! Vi o Wind Banner clássico de Barueri no portfólio (Foto 1) e gostaria de cotar um..."
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
                <span className="text-slate-800">Wind Banner a partir de R$ 320,00!</span>
              </div>

              {/* Minimalist Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 font-heading">
                Divulgue seu negócio com <br />
                <span className="text-brand-700">Destaque Absoluto</span>
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Chame a atenção de quem passa em frente do seu comércio! Wind Banners completos com base e haste, modelo premium com <strong className="text-slate-950 font-bold border-b border-brand-700">acabamento superior e zero transparência</strong>.
              </p>

              {/* Promotional Table Card */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 max-w-md mx-auto lg:mx-0 shadow-xs">
                <h3 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">Tabela Promocional 2026</h3>
                <div className="space-y-2.5 text-xs md:text-sm">
                  <div className="flex justify-between items-center text-slate-700">
                    <span className="font-semibold">Wind Banner Completo 2,0m</span>
                    <span className="font-black text-slate-900">R$ 320,00</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span className="font-semibold">Wind Banner Completo 2,60m</span>
                    <span className="font-black text-brand-700">R$ 380,00 <span className="text-[10px] text-slate-400 font-bold uppercase ml-1">Kit Médio</span></span>
                  </div>
                  <div className="flex justify-between items-center text-slate-700">
                    <span className="font-semibold">Wind Banner Completo 3,0m</span>
                    <span className="font-black text-slate-900">R$ 430,00</span>
                  </div>
                  <div className="separator-glow my-2"></div>
                  <div className="flex justify-between items-center text-slate-700 font-bold">
                    <span>Bandeira Avulsa (Reposição)</span>
                    <span className="text-emerald-600 font-black">A partir de R$ 200,00</span>
                  </div>
                </div>
              </div>

              {/* Simple CTA Row */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
                <a
                  href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá, Libracom! Gostaria de garantir a promoção especial do Wind Banner Completo com zero transparência a partir de R$ 320,00. Podem me ajudar?")}`}
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

            {/* Right Column - Clean Showcase Slider (Melhora Hero + Mais fotos) */}
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
                      <span className="text-[10px] text-brand-700 uppercase tracking-widest font-black block">Foto real do produto</span>
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

              {/* Thumbnails indicator list (10 new photos preview) */}
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
                💡 Clique nos quadradinhos acima para navegar por todas as 10 novas fotos de 2026!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS GRID (MINIMALIST & PRICE UPDATE) ===== */}
      <section id="produtos" className="py-24 bg-slate-50 border-t border-slate-100 scroll-mt-16 text-slate-750">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-3">
            <span className="bg-blue-50 text-brand-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100">
              💎 Nosso Catálogo Comercial
            </span>
          </div>
          <h2 className="section-title text-slate-950 font-heading">
            Sinalização de <span className="text-gradient-brand">Alto Padrão</span>
          </h2>
          <p className="section-subtitle !text-slate-500">
            Estruturas reforçadas e acabamento impecável para atrair a atenção do seu público e converter mais vendas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            
            {/* 1. Wind Banner Completo */}
            <div className="product-card group flex flex-col justify-between h-full bg-white border border-slate-200">
              <div>
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/fotos novas 2026 wind banners em barueri libracom (10).jpeg"
                    alt="Wind Banner Completo 2026 - Bandeira, Haste e Base"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-brand-700 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded">
                      Promoção 2026
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">Wind Banner Completo</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Kit completo contendo haste flexível de fibra de vidro de alta resistência, base reforçada e bandeira impressa em poliéster premium zero transparência.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1 pt-1.5">
                    <li>✓ Modelo Premium costura superior</li>
                    <li>✓ Zero transparência no tecido</li>
                    <li>✓ Haste flexível e Base inclusa</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Completo por</span>
                  <span className="text-xl font-black text-brand-700 font-heading">R$ 320<span className="text-xs text-slate-400 font-medium">/un</span></span>
                </div>
                <a
                  href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá! Gostaria de encomendar o Wind Banner Completo R$ 320,00 da promoção...")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>

            {/* 2. Bandeira Avulsa */}
            <div className="product-card group flex flex-col justify-between h-full bg-white border border-slate-200">
              <div>
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/fotos novas 2026 wind banners em barueri libracom (2).jpeg"
                    alt="Bandeira avulsa de reposição wind banner"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded">
                      Reposição
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">Bandeira Avulsa</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Apenas a bandeira impressa em poliéster premium de alta gramatura com costuras reforçadas e proteção UV. Ideal para reposição utilizando sua base e hastes existentes.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1 pt-1.5">
                    <li>✓ Tecido Micro-Poliéster impermeável</li>
                    <li>✓ Estampa Ultra HD frente e verso</li>
                    <li>✓ Encaixe padrão universal</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Avulsa por</span>
                  <span className="text-xl font-black text-brand-700 font-heading">R$ 200<span className="text-xs text-slate-400 font-medium">/un</span></span>
                </div>
                <a
                  href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá! Gostaria de encomendar a Bandeira Avulsa de reposição a partir de R$ 200,00...")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>

            {/* 3. Roll Up */}
            <div className="product-card group flex flex-col justify-between h-full bg-white border border-slate-200">
              <div>
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/roll_up_banner_em_barueri_alphaville_sao_paulo_entrega_rapida.png"
                    alt="Roll Up Banner Retrátil"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">Roll Up Retrátil</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Banner retrátil premium montável em 15 segundos. Fabricado em alumínio anodizado leve com mola interna de alta tração. Acompanha bolsa de transporte.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1 pt-1.5">
                    <li>✓ Acompanha bolsa para transporte</li>
                    <li>✓ Estrutura de alumínio super leve</li>
                    <li>✓ Perfeito para feiras e congressos</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">A partir de</span>
                  <span className="text-xl font-black text-brand-700 font-heading">R$ 190<span className="text-xs text-slate-400 font-medium">/un</span></span>
                </div>
                <a
                  href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá! Gostaria de um orçamento do Roll Up Banner retrátil a partir de R$ 190,00...")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>

            {/* 4. Adesivos */}
            <div className="product-card group flex flex-col justify-between h-full bg-white border border-slate-200">
              <div>
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/adesivo_personalizado.jpg"
                    alt="Adesivos personalizados em vinil impermeável"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">Adesivos Personalizados</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Adesivos impressos em vinil de alta fidelidade cromática. Impermeáveis, recortados digitalmente sob qualquer formato para vitrines e embalagens.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1 pt-1.5">
                    <li>✓ Vinil fosco ou brilhante impermeável</li>
                    <li>✓ Recorte digital sob medida</li>
                    <li>✓ Perfeito para vitrines e frotas</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">A partir de</span>
                  <span className="text-xl font-black text-brand-700 font-heading">R$ 45<span className="text-xs text-slate-400 font-medium">/m²</span></span>
                </div>
                <a
                  href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá! Gostaria de encomendar adesivos personalizados em vinil a partir de R$ 45,00/m²...")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>

            {/* 5. Banner & Lona */}
            <div className="product-card group flex flex-col justify-between h-full bg-white border border-slate-200">
              <div>
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/banner_impressao_digital_cabo_pendurar_barueri_alphaville.png"
                    alt="Banner e lona com acabamento profissional"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">Banners & Lonas</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Impressão digital UV de grande formato em lona brilhante de alta resistência (440g). Excelente para letreiros e coberturas comerciais.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1 pt-1.5">
                    <li>✓ Lona robusta de alta gramatura</li>
                    <li>✓ Acabamento com bastão e cordão ou ilhós</li>
                    <li>✓ Cores vivas de alta durabilidade externa</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">A partir de</span>
                  <span className="text-xl font-black text-brand-700 font-heading">R$ 60<span className="text-xs text-slate-400 font-medium">/m²</span></span>
                </div>
                <a
                  href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá! Gostaria de um orçamento para banners em lona a partir de R$ 60,00/m²...")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>

            {/* 6. Faixas */}
            <div className="product-card group flex flex-col justify-between h-full bg-white border border-slate-200">
              <div>
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <Image
                    src="/images/faixa_gigantes (1).jpeg"
                    alt="Faixas promocionais"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">Faixas Promocionais</h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    Comunicação rápida e de alto impacto para calçadas e fachadas de lojas. Acompanha bastão de madeira lateral e fitas de fixação.
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1 pt-1.5">
                    <li>✓ Lona resistente a intempéries</li>
                    <li>✓ Bastões de madeira inclusos</li>
                    <li>✓ Altíssimo destaque para inaugurações</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">A partir de</span>
                  <span className="text-xl font-black text-brand-700 font-heading">R$ 80<span className="text-xs text-slate-400 font-medium">/un</span></span>
                </div>
                <a
                  href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá! Gostaria de solicitar faixas promocionais a partir de R$ 80,00...")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
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
            Diferenciais que nos tornam a maior referência de comunicação rápida em Barueri e Alphaville
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: "🛡️",
                title: "Modelo Premium Zero Transparência",
                desc: "Tecido poliéster de altíssima gramatura com dupla face. As cores não passam para o outro lado, garantindo 100% de leitura de qualquer ângulo."
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
              },
              {
                icon: "🏢",
                title: "Faturamento Corporativo B2B",
                desc: "Facilitamos as compras para agências e marcas registradas com faturamento corporativo simplificado via boleto bancário bancário."
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

      {/* ===== PORTFOLIO SHOWCASE (POPULATED WITH 10 NEW 2026 PHOTOS) ===== */}
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
            Veja fotos reais dos nossos wind banners premium zero transparência entregues para clientes e comércios parceiros
          </p>

          {/* Grid Portfolio container with the 10 new 2026 photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {new2026Photos.map((item, i) => (
              <div
                key={i}
                className="product-card-light bg-white border border-slate-200 relative flex flex-col justify-between overflow-hidden group shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden w-full bg-slate-100">
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
            Confira a opinião de quem já comprou e comprova a qualidade superior dos nossos materiais
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
                text: "O material é excelente, o wind banner completo vem com haste forte e uma base firme que segura super bem na calçada. O acabamento com zero transparência garante a leitura nítida do nosso logotipo. Atendimento 10!",
              },
              {
                name: "Ana Silva",
                role: "Marketing - Tamboré",
                initials: "AS",
                text: "Adquirimos os banners roll up e adesivos de vitrine para a nossa marca. A transação comercial via faturamento no boleto foi super rápida e a criação da arte foi 100% gratuita como prometido. Recomendo muito!",
              },
              {
                name: "Ricardo Lima",
                role: "Comércio - Barueri Centro",
                initials: "RL",
                text: "Estávamos precisando de wind banners urgentes para a nossa inauguração de calçada. A Libracom produziu e nos entregou tudo em menos de 24h na nossa loja em Barueri. Qualidade premium fantástica!",
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
                  
                  <div className="space-y-3.5 text-xs md:text-sm font-semibold">
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
                  href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá! Estou no site e gostaria de falar com um consultor comercial da promoção 2026...")}`}
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
              />
              <p className="text-xs leading-relaxed">
                Referência em Wind Banners completos com base e haste, Roll Ups retráteis, Adesivos vinílicos, Banners e Lonas HD na região de Barueri e Alphaville.
              </p>
            </div>

            {/* Catalog Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">Nosso Catálogo</h4>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><a href="#produtos" className="hover:text-white transition-colors">Wind Banners</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors">Bandeiras Avulsas</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors">Roll Up Retrátil</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors">Adesivos Personalizados</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors">Banners & Lonas</a></li>
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
