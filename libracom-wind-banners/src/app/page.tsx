"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import ProductConfigurator from "./components/ProductConfigurator";
import InfiniteBrandSlider from "./components/InfiniteBrandSlider";
import FAQ from "./components/FAQ";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Portfolio database with categories and customized WhatsApp leads
const portfolioItems = [
  {
    src: "/images/wind_banner_mpd.jpeg",
    alt: "Wind Banner Corporativo MPD Alphaville",
    label: "Wind Banner Corporativo",
    loc: "Alphaville, SP",
    category: "wind-banner",
    whatsappText: "Olá, Libracom! Vi o Wind Banner Corporativo de Alphaville no portfólio do site de vocês e gostaria de solicitar um orçamento para a minha empresa..."
  },
  {
    src: "/images/wind_marabraz_entrega24hs_alphaville.png",
    alt: "Wind Banner Marabraz - entrega em 24h Barueri",
    label: "Wind Banner Marabraz",
    loc: "Barueri, SP",
    category: "wind-banner",
    whatsappText: "Olá, Libracom! Gostei muito do Wind Banner da Marabraz do portfólio. Gostaria de cotar um parecido para a minha loja..."
  },
  {
    src: "/images/roll_up_banner_em_barueri_alphaville_sao_paulo_entrega_rapida.png",
    alt: "Roll Up Banner personalizado em Barueri",
    label: "Roll Up Premium",
    loc: "Alphaville, SP",
    category: "rollup",
    whatsappText: "Olá! Vi o Roll Up Premium de Alphaville no seu portfólio e gostaria de cotar um banner retrátil..."
  },
  {
    src: "/images/faixa_gigantes (1).jpeg",
    alt: "Faixas Promocionais personalizadas",
    label: "Faixas Promocionais",
    loc: "Barueri, SP",
    category: "lona-faixa",
    whatsappText: "Olá! Vi as faixas gigantes promocionais no portfólio e queria um orçamento de faixa..."
  },
  {
    src: "/images/banner_impressao_digital_cabo_pendurar_barueri_alphaville.png",
    alt: "Banner Impressão Digital em Lona",
    label: "Banner em Lona HD",
    loc: "Alphaville, SP",
    category: "lona-faixa",
    whatsappText: "Olá! Quero cotar um Banner em Lona HD com bastão igual ao que vi no portfólio do site de vocês..."
  },
  {
    src: "/images/backdrop_eventos_fundo_palco_banner.png",
    alt: "Backdrop para evento corporativo em Alphaville",
    label: "Backdrop para Evento",
    loc: "Alphaville, SP",
    category: "outros",
    whatsappText: "Olá! Vi o Backdrop para Evento de Alphaville no portfólio e gostaria de solicitar um orçamento para o meu evento..."
  },
  {
    src: "/images/tenda_inflavel_em_barueri_alphaville_pronta_entrega.png",
    alt: "Tenda inflável personalizada em Barueri",
    label: "Tenda Inflável",
    loc: "Barueri, SP",
    category: "outros",
    whatsappText: "Olá! Gostaria de cotar uma Tenda Inflável parecida com a que está no portfólio de vocês..."
  },
  {
    src: "/images/totem_backlight_eventos_totem_iluminado_barueri_alphaville.jpg",
    alt: "Totem backlight iluminado para eventos corporativos",
    label: "Totem Backlight",
    loc: "Evento Tamboré",
    category: "outros",
    whatsappText: "Olá! Gostaria de saber mais e cotar o Totem Backlight iluminado que vi no portfólio de vocês..."
  },
  {
    src: "/images/portal_portico_inflavel_entrega_rapida.jpg",
    alt: "Portal inflável para eventos e ações promocionais",
    label: "Portal Inflável",
    loc: "Ação Promocional SP",
    category: "outros",
    whatsappText: "Olá, Libracom! Vi o Portal Inflável no portfólio de vocês e gostaria de fazer um orçamento de inflável promocional..."
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredPortfolio = useMemo(() => {
    if (activeCategory === "todos") return portfolioItems;
    return portfolioItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans scroll-smooth relative">
      {/* Header */}
      <Header />

      {/* Floating WhatsApp */}
      <WhatsAppFloat />

      {/* ===== HERO SECTION ===== */}
      <section className="hero-gradient min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content Column */}
            <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
              
              {/* Dynamic Announcement Ticker Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/25 to-teal-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider px-4.5 py-2 rounded-full border border-emerald-500/30 shadow-lg shadow-emerald-500/5 backdrop-blur-md animate-bounce-subtle">
                <span>⚡ OFERTA EXCLUSIVA:</span>
                <span className="text-white">Arte 100% Grátis + Entrega Rápida 24h na Região!</span>
              </div>

              {/* Headline with moving gradients */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight font-heading">
                Sua Marca em <br />
                <span className="text-gradient-moving">Destaque Absoluto</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Wind Banners, Roll Ups, Adesivos, Faixas e Lonas personalizados com <strong className="text-white border-b-2 border-cyan-400">impressão digital Ultra HD</strong>. Direto de fábrica para seu comércio e eventos em Barueri, Alphaville e grande São Paulo.
              </p>

              {/* Grid of Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0 pt-4">
                {[
                  { text: "⭐ 5.0 no Google", color: "text-amber-400" },
                  { text: "🚚 Entrega em 24h", color: "text-blue-400" },
                  { text: "🎨 Arte Inclusa", color: "text-cyan-400" },
                  { text: "🏢 CNPJ Faturado", color: "text-emerald-400" }
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center lg:justify-start gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md text-xs font-bold text-slate-200"
                  >
                    <span className={badge.color}>✔</span>
                    {badge.text}
                  </div>
                ))}
              </div>

              {/* Pricing teaser and CTA Row */}
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 justify-center lg:justify-start">
                <div className="glass-card px-6 py-4 flex flex-col items-center sm:items-start border border-white/10 shadow-lg">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Wind Banner Completo</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-emerald-400 text-sm font-bold">A partir de R$</span>
                    <span className="text-white text-3xl font-black font-heading tracking-tight">350</span>
                    <span className="text-slate-400 text-xs font-medium">,00 / un</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <a
                    href="https://wa.me/5511954997799?text=Ol%C3%A1%2C%20Libracom!%20Vi%20as%20promo%C3%A7%C3%B5es%20no%20site%20e%20gostaria%20de%20garantir%20minha%20ARTE%20GR%C3%81TIS%20e%20solicitar%20um%20or%C3%A7amento%20de%20Wind%20Banner..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta text-base md:text-lg font-black uppercase tracking-wider px-8 py-4 relative overflow-hidden group shadow-xl"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-light-sweep"></div>
                    <Image
                      src="/images/WhatsApp_icon.png"
                      alt="WhatsApp"
                      width={22}
                      height={22}
                      className="mr-2 transition-transform duration-300 group-hover:scale-110"
                    />
                    Pedir Orçamento Grátis
                  </a>

                  <a
                    href="#configurador"
                    className="btn-outline text-sm font-bold uppercase tracking-wider px-6 py-4 border-white/20 hover:border-white/40 hover:bg-white/10"
                  >
                    ⚙️ Simular Pedido
                  </a>
                </div>
              </div>
            </div>

            {/* Right Stacked Gallery Column */}
            <div className="w-full lg:w-2/5 relative flex justify-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-[420px] aspect-[4/3] md:aspect-[1.1] flex items-center justify-center">
                
                {/* Visual Glow Aura behind image stack */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-3xl pointer-events-none rounded-full"></div>
                
                {/* Main Mockup Cover */}
                <div className="relative w-[85%] rounded-3xl overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.6)] border border-white/10 scale-100 hover:scale-102 transition-transform duration-500 z-20 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                    <span className="text-white text-xs font-bold bg-blue-600/80 px-3 py-1 rounded-full">Wind Banner de Alta Resistência</span>
                  </div>
                  <Image
                    src="/images/wind_banner_mpd.jpeg"
                    alt="Wind Banner personalizado entregue em Alphaville - Libracom"
                    width={520}
                    height={400}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    priority
                  />
                </div>

                {/* Floating Rollup Cover (Bottom-Left) */}
                <div className="absolute -bottom-6 -left-6 w-36 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 hidden md:block hover:-translate-y-2 hover:rotate-3 transition-all duration-500 z-35 animate-float">
                  <Image
                    src="/images/roll_up_banner_em_barueri_alphaville_sao_paulo_entrega_rapida.png"
                    alt="Roll Up Banner personalizado para feiras e recepções corporativas"
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>

                {/* Floating Backdrop Cover (Top-Right) */}
                <div className="absolute -top-6 -right-6 w-36 h-28 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 hidden md:block hover:translate-y-2 hover:-rotate-3 transition-all duration-500 z-10 animate-float delay-500">
                  <Image
                    src="/images/backdrop_eventos_fundo_palco_banner.png"
                    alt="Backdrop iluminado e banners para eventos e palcos"
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE PRODUCT SECTION ===== */}
      <section id="produtos" className="py-24 bg-glow-grid border-t border-white/5 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-3">
            <span className="bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-500/20">
              🏷️ Catálogo de Fábrica
            </span>
          </div>
          <h2 className="section-title text-white">
            Nossa Linha de <span className="text-gradient-brand">Comunicação Visual</span>
          </h2>
          <p className="section-subtitle">
            Materiais de altíssimo padrão com acabamento premium e durabilidade reforçada contra as ações do tempo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            
            {/* 1. Wind Banner */}
            <div className="product-card group relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="relative h-60 overflow-hidden">
                  {/* Subtle top shine */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                  <Image
                    src="/images/wind_banner_mpd.jpeg"
                    alt="Wind Banner Personalizado - Bandeira de vento de alta resistência"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                      🔥 Mais Vendido
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white font-heading">Wind Banner Personalizado</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Bandeira de vento com estrutura completa flexível em fibra de vidro, tecido de poliéster lavável com proteção UV de alta gramatura e base robusta. Não desbota e não quebra!
                  </p>
                  
                  {/* Tech specifications list */}
                  <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-350 font-semibold">
                    <span className="flex items-center gap-1">🛡️ Anti-UV</span>
                    <span className="flex items-center gap-1">🌪️ Haste Flexível</span>
                    <span className="flex items-center gap-1">💧 Lavável</span>
                    <span className="flex items-center gap-1">🏳️ Base Inclusa</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/5 bg-slate-950/20 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">A partir de</span>
                  <span className="text-2xl font-black text-emerald-400 font-heading">R$ 350<span className="text-xs text-slate-500 font-medium">/un</span></span>
                </div>
                <a
                  href="https://wa.me/5511954997799?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20Wind%20Banner%20Personalizado%20que%20vi%20na%20grade%20de%20produtos..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-blue-500/20 hover:border-blue-500 flex items-center gap-1.5"
                >
                  Orçar WhatsApp
                </a>
              </div>
            </div>

            {/* 2. Roll Up */}
            <div className="product-card group relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                  <Image
                    src="/images/roll_up_banner_em_barueri_alphaville_sao_paulo_entrega_rapida.png"
                    alt="Roll Up Banner Personalizado com estrutura retrátil em alumínio"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-cyan-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                      👜 Super Portátil
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white font-heading">Roll Up Personalizado</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Banner retrátil premium montável em apenas 15 segundos. Fabricado em alumínio anodizado superleve, acompanha mola interna reforçada e bolsa para transporte.
                  </p>
                  
                  <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-350 font-semibold">
                    <span className="flex items-center gap-1">👜 Bolsa Inclusa</span>
                    <span className="flex items-center gap-1">⚙️ Retrátil Mola</span>
                    <span className="flex items-center gap-1">鋁 Alumínio Leve</span>
                    <span className="flex items-center gap-1">⏱️ Monta em 15s</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/5 bg-slate-950/20 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">A partir de</span>
                  <span className="text-2xl font-black text-emerald-400 font-heading">R$ 190<span className="text-xs text-slate-500 font-medium">/un</span></span>
                </div>
                <a
                  href="https://wa.me/5511954997799?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20Roll%20Up%20Personalizado%20que%20vi%20na%20grade%20de%20produtos..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-blue-500/20 hover:border-blue-500 flex items-center gap-1.5"
                >
                  Orçar WhatsApp
                </a>
              </div>
            </div>

            {/* 3. Adesivos */}
            <div className="product-card group relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                  <Image
                    src="/images/adesivo_personalizado.jpg"
                    alt="Adesivos personalizados em vinil à prova d'água"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-purple-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                      ✂️ Recorte Custom
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white font-heading">Adesivos Personalizados</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Adesivos impressos em vinil fosco ou brilhante de altíssima fidelidade cromática. À prova d&apos;água, recortados digitalmente sob qualquer formato para vitrines, veículos e rótulos.
                  </p>
                  
                  <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-350 font-semibold">
                    <span className="flex items-center gap-1">💧 Resistente à Água</span>
                    <span className="flex items-center gap-1">✂️ Recorte Livre</span>
                    <span className="flex items-center gap-1">☀️ Proteção Solar</span>
                    <span className="flex items-center gap-1">🏷️ Rótulo/Vitrines</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/5 bg-slate-950/20 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">A partir de</span>
                  <span className="text-2xl font-black text-emerald-400 font-heading">R$ 45<span className="text-xs text-slate-500 font-medium">/m²</span></span>
                </div>
                <a
                  href="https://wa.me/5511954997799?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20Adesivos%20Personalizados%20que%20vi%20na%20grade%20de%20produtos..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-blue-500/20 hover:border-blue-500 flex items-center gap-1.5"
                >
                  Orçar WhatsApp
                </a>
              </div>
            </div>

            {/* 4. Banner / Lona */}
            <div className="product-card group relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                  <Image
                    src="/images/banner_impressao_digital_cabo_pendurar_barueri_alphaville.png"
                    alt="Banners e lonas personalizadas com ilhós e bastão"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white font-heading">Banners & Lonas</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Impressão digital UV de grande formato em lona brilhante de alta resistência (440g). Perfeita para sinalizações, fachadas comerciais, letreiros, coberturas e palcos.
                  </p>
                  
                  <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-350 font-semibold">
                    <span className="flex items-center gap-1">🖼️ Lona 440g Forte</span>
                    <span className="flex items-center gap-1">🧵 Ilhós ou Bastão</span>
                    <span className="flex items-center gap-1">🏢 Fachadas Lojas</span>
                    <span className="flex items-center gap-1">🌟 Brilho Premium</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/5 bg-slate-950/20 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">A partir de</span>
                  <span className="text-2xl font-black text-emerald-400 font-heading">R$ 60<span className="text-xs text-slate-500 font-medium">/m²</span></span>
                </div>
                <a
                  href="https://wa.me/5511954997799?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20Banners%20e%20Lonas%20que%20vi%20na%20grade%20de%20produtos..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-blue-500/20 hover:border-blue-500 flex items-center gap-1.5"
                >
                  Orçar WhatsApp
                </a>
              </div>
            </div>

            {/* 5. Faixa */}
            <div className="product-card group relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                  <Image
                    src="/images/faixa_gigantes (1).jpeg"
                    alt="Faixas promocionais para frente de lojas e calçadas"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white font-heading">Faixas Promocionais</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Comunicação promocional ágil e de altíssimo impacto para frentes de lojas, inaugurações, ofertas relâmpago e liquidações. Acompanha bastão de madeira lateral e fitas de amarração.
                  </p>
                  
                  <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-350 font-semibold">
                    <span className="flex items-center gap-1">📏 Tamanhos Sob Medida</span>
                    <span className="flex items-center gap-1">🪵 Bastões Laterais</span>
                    <span className="flex items-center gap-1">⚡ Montagem Prática</span>
                    <span className="flex items-center gap-1">📈 Impacto Comercial</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/5 bg-slate-950/20 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">A partir de</span>
                  <span className="text-2xl font-black text-emerald-400 font-heading">R$ 80<span className="text-xs text-slate-500 font-medium">/un</span></span>
                </div>
                <a
                  href="https://wa.me/5511954997799?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20Faixas%20Promocionais%20que%20vi%20na%20grade%20de%20produtos..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-blue-500/20 hover:border-blue-500 flex items-center gap-1.5"
                >
                  Orçar WhatsApp
                </a>
              </div>
            </div>

            {/* 6. Backdrop e Eventos */}
            <div className="product-card group relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                  <Image
                    src="/images/backdrop_eventos_fundo_palco_banner.png"
                    alt="Backdrops fundos de palco e portais infláveis personalizados"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-amber-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                      🎪 Projetos Corporativos
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white font-heading">Eventos & Infláveis</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Backdrops de metal pantográfico para fundos de palco, pórticos e tendas infláveis de alto impacto promocional, balões e totens sob medida para destacar seu estande corporativo.
                  </p>
                  
                  <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-350 font-semibold">
                    <span className="flex items-center gap-1">🎪 Feiras/Congressos</span>
                    <span className="flex items-center gap-1">🎈 Infláveis Fortes</span>
                    <span className="flex items-center gap-1">⚙️ Estruturas BoxTruss</span>
                    <span className="flex items-center gap-1">📐 Projeto Sob Demanda</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/5 bg-slate-950/20 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold">Orçamentos</span>
                  <span className="text-lg font-black text-cyan-400 font-heading">Sob Consulta</span>
                </div>
                <a
                  href="https://wa.me/5511954997799?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20consulta%20de%20Backdrop%20%2F%20Material%20para%20Eventos%20e%20Infl%C3%A1veis..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-blue-500/20 hover:border-blue-500 flex items-center gap-1.5"
                >
                  Consultar Equipe
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== WHY LIBRACOM / B2B ADVANTAGES ===== */}
      <section id="sobre" className="py-24 bg-white text-slate-900 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-3">
            <span className="bg-blue-500/10 text-blue-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-500/20">
              💎 Diferenciais Libracom
            </span>
          </div>
          <h2 className="section-title text-slate-950 font-heading">
            Por que Escolher a <span className="text-gradient-brand">Libracom</span>?
          </h2>
          <p className="section-subtitle !text-slate-500">
            Diferenciais que nos tornam a maior referência em comunicação visual rápida de Barueri e Alphaville
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: "🛡️",
                title: "Tecido Premium Lavável",
                desc: "Poliéster de alta gramatura com costuras reforçadas e proteção UV. Pode chover ou bater sol que a lona e a bandeira continuam vibrantes e intactas por meses."
              },
              {
                icon: "⏱️",
                title: "Entrega em 24 Horas",
                desc: "Produção local ultra-rápida direto de nossa fábrica. Ideal para agências e marcas com demandas urgentes para inaugurações e feiras corporativas."
              },
              {
                icon: "🎨",
                title: "Arte 100% Gratuita",
                desc: "Nossos designers criam a arte do seu Wind Banner ou ajustam o logotipo para você sem custos adicionais. Basta enviar sua ideia e nós cuidamos do resto."
              },
              {
                icon: "💳",
                title: "Faturamento facilitado",
                desc: "Atendemos agências de marketing e empresas de todos os portes com faturamento facilitado via boleto bancário bancário sob cadastro de CNPJ."
              }
            ].map((differential, i) => (
              <div
                key={i}
                className="product-card-light text-center p-8 group hover:-translate-y-2.5 transition-all duration-300 relative border border-slate-200 shadow-sm"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2">
                  {differential.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">
                  {differential.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {differential.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Special Corporate Callout Board */}
          <div className="mt-16 bg-slate-950 text-white rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                💼 Setor Corporativo & Agências
              </span>
              <h3 className="text-2xl md:text-3xl font-black font-heading leading-tight">
                Participando de Feiras no Tamboré ou Alphaville?
              </h3>
              <p className="text-slate-350 text-sm md:text-base leading-relaxed">
                Temos soluções completas em comunicação visual expressa para agências e marcas. Faturamento direto via boleto corporativo e suporte de arte prioritário.
              </p>
            </div>

            <a
              href="https://wa.me/5511954997799?text=Ol%C3%A1!%20Represento%20uma%20empresa%2Fag%C3%AAncia%20e%20gostaria%20de%20falar%20com%20um%20consultor%20B2B%20sobre%20demandas%20de%20comunica%C3%A7%C3%A3o%20visual..."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-sm font-black uppercase tracking-wider px-6 py-4 shadow-xl shrink-0 group relative overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-light-sweep"></div>
              Atendimento Corporativo
            </a>
          </div>
        </div>
      </section>

      {/* ===== THE LIVE CONFIGURATOR COMPONENT ===== */}
      <ProductConfigurator />

      {/* ===== FILTERABLE PORTFOLIO SHOWCASE ===== */}
      <section id="portfolio" className="py-24 bg-slate-50 text-slate-900 scroll-mt-16 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-3">
            <span className="bg-cyan-500/10 text-cyan-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-cyan-500/20">
              📸 Galeria de Sucessos
            </span>
          </div>
          <h2 className="section-title text-slate-950 font-heading">
            Nosso <span className="text-gradient-brand">Portfólio de Entregas</span>
          </h2>
          <p className="section-subtitle !text-slate-500">
            Veja fotos reais dos projetos sob medida que já entregamos para marcas e comércios parceiros na região
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
            {[
              { id: "todos", label: "Ver Todos" },
              { id: "wind-banner", label: "Wind Banners" },
              { id: "rollup", label: "Roll Ups" },
              { id: "lona-faixa", label: "Banners & Faixas" },
              { id: "outros", label: "Eventos & Outros" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`
                  px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 border
                  ${activeCategory === tab.id
                    ? "bg-slate-950 border-slate-950 text-white shadow-lg"
                    : "bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid Portfolio container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {filteredPortfolio.map((item, i) => (
              <div
                key={i}
                className="product-card-light group overflow-hidden border border-slate-200 bg-white relative flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Subtle dark gradient overlay on hover */}
                  <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4 z-20">
                    <span className="text-white text-sm font-bold text-center">{item.label}</span>
                    <a
                      href={`https://wa.me/5511954997799?text=${encodeURIComponent(item.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded-full shadow-lg transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-sm">💬</span> Solicitar Igual
                    </a>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between border-t border-slate-100 bg-white">
                  <h3 className="font-bold text-slate-800 text-sm md:text-base font-heading">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 font-semibold">
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
            <span className="bg-emerald-500/10 text-emerald-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-emerald-500/20">
              ⭐ Avaliações Google
            </span>
          </div>
          <h2 className="section-title text-slate-950 font-heading">
            O que Nossos <span className="text-gradient-brand">Clientes</span> dizem
          </h2>
          <p className="section-subtitle !text-slate-500">
            Satisfação máxima garantida em Barueri, Alphaville e São Paulo. Confiança direto de fábrica!
          </p>

          {/* Aggregate Rating Widget Header */}
          <div className="max-w-xl mx-auto bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="text-center sm:text-left">
              <span className="text-5xl font-black text-slate-900 block font-heading">5.0</span>
              <div className="flex gap-1 justify-center sm:justify-start mt-1">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
            </div>
            <div className="separator-glow h-0.5 w-12 sm:w-0.5 sm:h-12 bg-slate-300"></div>
            <div className="text-center sm:text-left space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                <span className="text-emerald-500 text-xs">✔</span>
                <span className="text-xs font-black uppercase text-slate-700 tracking-wider">Perfil Recomendado</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Baseado em mais de 128 avaliações auditadas no Google Meu Negócio em Barueri e Alphaville.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcos Costa",
                role: "Organizador de Eventos Corporativos",
                initials: "MC",
                text: "Os wind banners e os backdrops da Libracom foram essenciais para o sucesso do nosso estande no evento corporativo em Barueri. Qualidade Ultra HD incrível, cores vivas e entrega rápida. Recomendo de olhos fechados!",
              },
              {
                name: "Ana Silva",
                role: "Gerente de Marketing - Startups Tamboré",
                initials: "AS",
                text: "Ficamos impressionadas com os roll ups e adesivos de vinil que compramos para a feira. O time comercial nos ofereceu faturamento facilitado via CNPJ no boleto, e a criação de arte gratuita nos poupou muito tempo e dinheiro.",
              },
              {
                name: "Ricardo Lima",
                role: "Proprietário de Comércio de Rua",
                initials: "RL",
                text: "Adquiri dois wind banners de 3 metros na promoção para colocar na calçada da minha loja em Barueri. O material é muito forte, suporta chuva e ventos fortes sem cair e nem rasgar. Melhor investimento que fiz!",
              },
            ].map((t, i) => (
              <div key={i} className="product-card-light p-8 border border-slate-200 shadow-sm flex flex-col justify-between bg-white hover:border-blue-500 transition-all duration-300">
                <div className="space-y-4">
                  {/* Rating stars */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 italic text-sm md:text-base leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-black text-sm shadow-md">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">{t.name}</h4>
                    <p className="text-[11px] text-slate-500 font-semibold">{t.role}</p>
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

      {/* ===== CONTACT / INTEGRATION MAP SECTION ===== */}
      <section id="contato" className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <div className="flex justify-center">
              <span className="bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-cyan-500/20">
                💬 Contato Imediato
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white font-heading">
              Pronto para <span className="text-gradient-brand">Destacar</span> sua Marca?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Fale conosco agora! Receba uma consultoria comercial gratuita de design e logística de entrega para Alphaville, Barueri e grande São Paulo.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10 text-left items-stretch">
              
              {/* Left detail card (5 cols) */}
              <div className="lg:col-span-5 glass-card p-8 border border-white/10 flex flex-col justify-between">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white font-heading">Canais de Atendimento</h3>
                  
                  <div className="space-y-5">
                    <a href="tel:11954997799" className="flex items-center gap-3.5 text-slate-350 hover:text-white transition-colors group text-sm md:text-base font-semibold">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center group-hover:bg-blue-600/35 transition-colors border border-blue-500/20">
                        📞
                      </div>
                      (11) 95499-7799
                    </a>
                    
                    <a href="mailto:contato.libracom@gmail.com" className="flex items-center gap-3.5 text-slate-350 hover:text-white transition-colors group text-sm md:text-base font-semibold">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center group-hover:bg-blue-600/35 transition-colors border border-blue-500/20">
                        ✉️
                      </div>
                      contato.libracom@gmail.com
                    </a>
                    
                    <div className="flex items-center gap-3.5 text-slate-350 text-sm md:text-base font-semibold">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center border border-blue-500/20">
                        📍
                      </div>
                      Barueri, Alphaville e São Paulo
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 mt-8 space-y-4">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Horários Comercial</h4>
                  <div className="grid grid-cols-2 gap-4 text-xs font-bold text-slate-350">
                    <div>
                      <span>Segunda a Sexta</span>
                      <span className="block text-white mt-1">9h às 18h</span>
                    </div>
                    <div>
                      <span>Sábado</span>
                      <span className="block text-white mt-1">9h às 13h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right WhatsApp Form Teaser card (7 cols) */}
              <div className="lg:col-span-7 glass-card p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4 relative z-10">
                  <h3 className="text-xl font-bold text-white font-heading">Fale Conosco Diretamente</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Clique no botão abaixo para ir direto para o WhatsApp de atendimento prioritário. Nossa equipe criará seu design grátis e calculará as opções de entrega expressa no mesmo dia!
                  </p>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3 mt-4">
                    <div className="flex items-center gap-2.5 text-xs text-slate-300 font-bold">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <span>Consultores online agora</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                      Envie-nos seu logo pelo chat. Geramos um layout virtual do Wind Banner ou Roll Up sem cobrar nada antes de fechar o pedido!
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/5511954997799?text=Ol%C3%A1!%20Acessei%20o%20site%20e%20gostaria%20de%20falar%20com%20um%20atendente%20sobre%20or%C3%A7amentos%20de%20Wind%20Banners%20e%20Roll%20Up..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta w-full justify-center text-sm md:text-base py-4 mt-8 animate-pulse-glow group relative overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-light-sweep"></div>
                  <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="mr-3 transition-transform duration-300 group-hover:scale-110"
                  />
                  Fale Conosco no WhatsApp
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand details */}
            <div className="md:col-span-1 space-y-4">
              <Image
                src="/images/LIBRACOM_png.png"
                alt="Libracom Wind Banners Logo"
                width={140}
                height={45}
                className="brightness-0 invert opacity-90 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
                style={{ width: "auto", height: "auto" }}
              />
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                Especialistas em Wind Banners, Roll Ups, Adesivos, Banners, Lonas e Faixas. Qualidade digital Ultra HD com entrega expressa 24h em Barueri, Alphaville e São Paulo.
              </p>
            </div>

            {/* Catalog Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">Nossos Produtos</h4>
              <ul className="space-y-2 text-xs md:text-sm text-slate-400">
                <li><a href="#produtos" className="hover:text-white transition-colors">Wind Banners</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors">Roll Up Retrátil</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors">Adesivos Personalizados</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors">Banners & Lonas</a></li>
                <li><a href="#produtos" className="hover:text-white transition-colors">Faixas Promocionais</a></li>
              </ul>
            </div>

            {/* Routing Page Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">Links de Destaque</h4>
              <ul className="space-y-2 text-xs md:text-sm text-slate-400">
                <li><Link href="/wind-banner-barueri" className="hover:text-white transition-colors">Wind Banner em Barueri</Link></li>
                <li><Link href="/wind-banner-personalizado-eventos" className="hover:text-white transition-colors">Wind Banner para Eventos</Link></li>
                <li><Link href="/wind-banner-vs-bandeira-comum" className="hover:text-white transition-colors">Wind Banner vs Bandeira Comum</Link></li>
                <li><Link href="/entrega-rapida-24h" className="hover:text-white transition-colors">Entrega Rápida em 24h</Link></li>
              </ul>
            </div>

            {/* Local business details */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-200">Fale de Fábrica</h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-400 font-semibold">
                <li>
                  <a href="tel:11954997799" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-emerald-400 text-sm">📞</span> (11) 95499-7799
                  </a>
                </li>
                <li>
                  <a href="mailto:contato.libracom@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-blue-400 text-sm">✉️</span> contato.libracom@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="text-cyan-400 text-sm">📍</span> Barueri, Alphaville - SP
                </li>
              </ul>
            </div>
          </div>

          <div className="separator-glow mt-12 mb-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-bold">
            <p>© {new Date().getFullYear()} Libracom Wind Banners. Todos os direitos reservados. CNPJ: 12.345.678/0001-90</p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5511954997799"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp Corporativo"
              >
                <Image src="/images/WhatsApp_icon.png" alt="WhatsApp" width={22} height={22} className="opacity-50 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
