"use client";

import { useState, useEffect } from "react";
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
    src: "/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (4).jpg",
    alt: "Bandeira de Vento Retangular - Libracom",
    label: "Wind Banner Quadrado Premium",
    loc: "Barueri, SP",
    desc: "Tecido especial com 20% de transparência para leitura perfeita de ambos os lados.",
    whatsappText: "Olá! Vi a foto do Wind Banner Quadrado Premium com 20% de transparência e queria um orçamento..."
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
    label: "Wind Banner Reto 3,00m",
    loc: "Tamboré, SP",
    desc: "Modelo completo com haste ultra-resistente e base robusta.",
    whatsappText: "Olá! Gostei do Wind Banner Reto de 3,00m completo e gostaria de um orçamento..."
  },
  {
    src: "/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (1).png",
    alt: "Wind Banner Retangular Modelo Reto - Libracom Barueri",
    label: "Wind Banner Retangular 2,60m",
    loc: "Barueri, SP",
    desc: "Bandeira retangular premium com cores vivas e caimento impecável.",
    whatsappText: "Olá! Vi a foto do Wind Banner Retangular de 2,60m no portfólio e gostaria de um orçamento..."
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

const trustStats = [
  { value: "5.0 ★", label: "Nota no Google" },
  { value: "+128", label: "Avaliações 5 estrelas" },
  { value: "24h", label: "Produção expressa" },
  { value: "Grátis", label: "Criação da arte" }
];

const bannerSizes = [
  { height: "2,00m", kit: "R$ 350,00", flag: "R$ 220,00", use: "Entradas de lojas, calçadas e balcões" },
  { height: "2,60m", kit: "R$ 410,00", flag: "R$ 280,00", use: "O mais vendido: equilíbrio entre destaque e portabilidade", featured: true },
  { height: "3,00m", kit: "R$ 480,00", flag: "R$ 320,00", use: "Postos, estacionamentos, feiras e eventos ao ar livre" }
];

const kitComponents = [
  { icon: "🏳️", title: "Bandeira", desc: "Poliéster premium com 20% de transparência, impressão Ultra HD e costura reforçada." },
  { icon: "🎋", title: "Haste", desc: "Fibra de vidro flexível de alta resistência, que mantém a bandeira reta e esticada." },
  { icon: "🧱", title: "Base", desc: "Base reforçada e estável para uso em calçadas, pisos e áreas externas." }
];

const howItWorksSteps = [
  { title: "Peça seu orçamento", desc: "Chame no WhatsApp e informe o tamanho e a quantidade que precisa." },
  { title: "Criamos sua arte grátis", desc: "Nossa equipe desenvolve ou ajusta o layout com a sua marca, sem custo." },
  { title: "Você aprova", desc: "Receba a prévia virtual e só produzimos depois da sua aprovação." },
  { title: "Produção e entrega", desc: "Fabricação própria em Barueri, com produção expressa em até 24h." }
];

export default function Home() {
  const [activeHeroImageIndex, setActiveHeroImageIndex] = useState(0);

  // Auto-advance the hero carousel; restarting on index change keeps manual picks on screen for a full cycle
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveHeroImageIndex((i) => (i + 1) % new2026Photos.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeHeroImageIndex]);

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans scroll-smooth relative">
      {/* Header */}
      <Header />

      {/* Floating WhatsApp */}
      <WhatsAppFloat />

      {/* ===== HERO CAROUSEL (FULL-WIDTH PHOTOS) ===== */}
      <section className="relative min-h-[600px] h-[90vh] max-h-[860px] flex items-end overflow-hidden bg-slate-900">
        {new2026Photos.map((photo, index) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ${index === activeHeroImageIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {/* Dark gradient to keep the copy legible over any photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-slate-950/20 z-10"></div>

        <div className="container mx-auto px-4 relative z-20 pb-14 md:pb-20 pt-28">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0 space-y-4 md:space-y-6">
            <span className="inline-block bg-white/10 backdrop-blur text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
              Fábrica própria em Barueri · Modelo Reto
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white font-heading">
              Venda mais com Wind Banners de <span className="text-blue-300">Destaque Absoluto</span>
            </h1>

            <p className="text-sm md:text-lg text-slate-200 leading-relaxed font-medium">
              Wind Banners Retangulares e Quadrados com tecido premium de <strong className="text-white">20% de transparência</strong>: sua marca legível dos dois lados, cores vivas e produção expressa em 24h.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
              <a
                href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá, Libracom! Gostaria de um orçamento do Wind Banner Retangular Modelo Reto a partir de R$ 350,00. Podem me ajudar com a arte?")}`}
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
                Solicitar Orçamento
              </a>

              <a
                href="#produtos"
                className="btn-outline px-6 py-4 text-xs font-bold uppercase tracking-wider bg-transparent border-white/30 text-white hover:bg-white hover:text-slate-900"
              >
                Kits a partir de R$ 350
              </a>
            </div>

            {/* Carousel position indicators */}
            <div className="flex gap-2 pt-4 justify-center md:justify-start">
              {new2026Photos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setActiveHeroImageIndex(index)}
                  aria-label={`Ver foto ${index + 1}: ${photo.label}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === activeHeroImageIndex ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST NUMBERS BAR ===== */}
      <section className="bg-brand-700 text-white">
        <div className="container mx-auto px-4 py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustStats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-4xl font-black font-heading">{stat.value}</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-blue-100 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== AVISO PRINCIPAL EM DESTAQUE GERAL ===== */}
      <section className="py-5 md:py-8 bg-amber-500 text-amber-950 font-black border-y border-amber-600">
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

      {/* ===== WHAT IS A WIND BANNER (EDUCATIONAL / SEO) ===== */}
      <section id="o-que-e" className="py-12 md:py-24 bg-white scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
              <Image
                src="/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (3).jpg"
                alt="Wind Banner retangular instalado em frente a comércio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4 text-center lg:text-left">
              <span className="inline-block bg-blue-50 text-brand-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100">
                📖 Entenda o Produto
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-heading leading-tight">
                O que é um <span className="text-brand-700">Wind Banner</span>?
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                O wind banner, também chamado de <strong>bandeira de vento</strong> ou bandeira de calçada, é uma peça de comunicação visual formada por uma bandeira impressa presa a uma haste flexível e fixada em uma base. Com o vento, ela se movimenta e chama a atenção de quem passa, a pé ou de carro.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                No <strong>modelo reto (retangular ou quadrado)</strong>, a bandeira fica sempre esticada, oferecendo a maior área útil para o seu logo e sua oferta. É ideal para fachadas de lojas, inaugurações, feiras, postos, eventos e ações promocionais, e pode ser montado e desmontado em minutos.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-semibold text-slate-700 pt-2 text-left max-w-md mx-auto lg:mx-0">
                <li>✓ Alta visibilidade o dia inteiro</li>
                <li>✓ Leitura dos dois lados</li>
                <li>✓ Portátil e reutilizável</li>
                <li>✓ Excelente custo-benefício</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS GRID (MINIMALIST & PRICE UPDATE) ===== */}
      <section id="produtos" className="py-12 md:py-24 bg-slate-50 border-t border-slate-100 scroll-mt-16 text-slate-750">
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
                      <li className="flex justify-between"><span>Altura 2,00m</span> <span className="text-slate-900 font-bold">R$ 350,00</span></li>
                      <li className="flex justify-between"><span>Altura 2,60m</span> <span className="text-brand-700 font-black">R$ 410,00 (Destaque)</span></li>
                      <li className="flex justify-between"><span>Altura 3,00m</span> <span className="text-slate-900 font-bold">R$ 480,00</span></li>
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
                  <span className="text-xl font-black text-brand-700 font-heading">R$ 350<span className="text-xs text-slate-400 font-medium">/un</span></span>
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
                      <li className="flex justify-between"><span>Altura 2,00m</span> <span className="text-slate-900 font-bold">R$ 220,00</span></li>
                      <li className="flex justify-between"><span>Altura 2,60m</span> <span className="text-brand-700 font-black">R$ 280,00</span></li>
                      <li className="flex justify-between"><span>Altura 3,00m</span> <span className="text-slate-900 font-bold">R$ 320,00</span></li>
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
                  <span className="text-xl font-black text-brand-700 font-heading">R$ 220<span className="text-xs text-slate-400 font-medium">/un</span></span>
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

      {/* ===== SPECIFICATIONS: SIZES & KIT COMPOSITION ===== */}
      <section id="especificacoes" className="py-12 md:py-24 bg-white scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-3">
            <span className="bg-blue-50 text-brand-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100">
              📐 Especificações
            </span>
          </div>
          <h2 className="section-title text-slate-950 font-heading">
            Tamanhos dos <span className="text-gradient-brand">Wind Banners</span>
          </h2>
          <p className="section-subtitle !text-slate-500">
            Três alturas para cada tipo de espaço. Todas no modelo reto, com a mesma qualidade de acabamento
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {bannerSizes.map((size) => (
              <div
                key={size.height}
                className={`rounded-2xl p-6 text-center border bg-white relative ${size.featured ? "border-brand-700 shadow-md" : "border-slate-200 shadow-xs"}`}
              >
                {size.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-700 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    Mais vendido
                  </span>
                )}
                <div className="text-4xl md:text-5xl font-black text-slate-950 font-heading">{size.height}</div>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px]">{size.use}</p>
                <div className="mt-5 pt-5 border-t border-slate-100 space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500 font-semibold">Kit completo</span><span className="font-black text-brand-700">{size.kit}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500 font-semibold">Somente bandeira</span><span className="font-bold text-slate-900">{size.flag}</span></div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-black text-slate-950 font-heading text-center mt-16 mb-8">
            O que vem no Kit Completo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {kitComponents.map((item) => (
              <div key={item.title} className="flex gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-white text-2xl flex items-center justify-center border border-slate-200">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 font-heading">{item.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="como-funciona" className="py-12 md:py-24 bg-slate-50 border-t border-slate-100 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-3">
            <span className="bg-blue-50 text-brand-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100">
              🚀 Como Funciona
            </span>
          </div>
          <h2 className="section-title text-slate-950 font-heading">
            Seu Wind Banner em <span className="text-gradient-brand">4 Passos Simples</span>
          </h2>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
            {howItWorksSteps.map((step, i) => (
              <li key={step.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-brand-700 text-white font-black text-lg flex items-center justify-center font-heading">
                  {i + 1}
                </div>
                <h3 className="font-bold text-slate-950 font-heading mt-4">{step.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-2">{step.desc}</p>
              </li>
            ))}
          </ol>

          <div className="flex justify-center mt-10">
            <a
              href={`https://wa.me/5511954997799?text=${encodeURIComponent("Olá, Libracom! Quero começar meu pedido de Wind Banner. Podem me ajudar?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta px-8 py-4 text-sm font-bold uppercase tracking-wider group shadow-md"
            >
              <Image src="/images/WhatsApp_icon.png" alt="WhatsApp" width={20} height={20} className="mr-2" />
              Começar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== DIFFERENTIALS (MINIMALIST & WHITE) ===== */}
      <section id="sobre" className="py-12 md:py-24 bg-white text-slate-800 relative">
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
          <div className="mt-10 md:mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
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
      <section id="portfolio" className="py-12 md:py-24 bg-slate-50 text-slate-900 border-t border-slate-200 scroll-mt-16">
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
      <section className="py-12 md:py-24 bg-white text-slate-900 border-t border-slate-100">
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
          <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-center gap-5 mb-8 md:mb-12">
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
      <section id="contato" className="py-12 md:py-24 bg-slate-50 border-t border-slate-200 scroll-mt-16 text-slate-800">
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
      <footer className="bg-slate-900 text-white py-10 md:py-16 border-t border-slate-800 text-slate-400">
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
                <li><Link href="/somente-bandeira-wind-banner" className="hover:text-white transition-colors text-emerald-400 font-semibold">Somente Bandeira (Refil)</Link></li>
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

          <div className="separator-glow mt-8 mb-6 !bg-slate-800"></div>
          
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
