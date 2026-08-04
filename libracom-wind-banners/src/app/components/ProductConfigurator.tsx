"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

interface ProductSize {
  label: string;
  price: number;
}

interface Product {
  id: string;
  name: string;
  icon: string;
  description: string;
  sizes: ProductSize[];
  perUnit?: string;
}

const products: Product[] = [
  {
    id: "wind-banner-completo",
    name: "Wind Banner Completo",
    icon: "🏳️",
    description: "Kit completo (modelo retangular/quadrado): tecido premium com 20% de transparência (estampa visível e legível em ambos os lados), haste flexível de alta durabilidade e base de sustentação inclusas.",
    sizes: [
      { label: "2,0m - Pequeno", price: 280 },
      { label: "2,60m - Médio (Mais Vendido)", price: 320 },
      { label: "3,20m - Grande", price: 360 },
    ],
  },
  {
    id: "bandeira-avulsa",
    name: "Somente Bandeira",
    icon: "🚩",
    description: "Apenas a bandeira impressa para reposição no formato retangular/quadrado. Tecido de alta gramatura com 20% de transparência para cores vibrantes visíveis de ambos os lados. Não acompanha haste nem base.",
    sizes: [
      { label: "2,0m - Pequeno", price: 150 },
      { label: "2,60m - Médio", price: 180 },
      { label: "3,20m - Grande", price: 200 },
    ],
  },
];

function getDiscount(qty: number): number {
  if (qty >= 10) return 0.15;
  if (qty >= 5) return 0.10;
  if (qty >= 3) return 0.05;
  return 0;
}

function getDiscountLabel(qty: number): string | null {
  if (qty >= 10) return "15% OFF - Lote Atacado";
  if (qty >= 5) return "10% OFF - Lote Comercial";
  if (qty >= 3) return "5% OFF - Lote Progressivo";
  return null;
}

export default function ProductConfigurator() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products[selectedProduct];
  const size = product.sizes[selectedSize];
  const discount = getDiscount(quantity);
  const discountLabel = getDiscountLabel(quantity);
  const unitPrice = size.price * (1 - discount);
  const totalPrice = unitPrice * quantity;
  const perUnit = product.perUnit || "";

  // Progress percentage to next discount tier
  const discountProgress = useMemo(() => {
    if (quantity >= 10) return 100;
    if (quantity >= 5) return 50 + ((quantity - 5) / 5) * 50;
    if (quantity >= 3) return 25 + ((quantity - 3) / 2) * 25;
    return (quantity / 3) * 25;
  }, [quantity]);

  const whatsappMessage = useMemo(() => {
    const msg = `Olá, Libracom! Estive no simulador do site e gostaria de solicitar um orçamento para:\n\n📦 Produto: ${product.name}\n📐 Modelo/Tamanho: ${size.label}\n🔢 Quantidade: ${quantity}${perUnit ? " m²" : " unidades"}\n💰 Preço Estimado: R$ ${totalPrice.toFixed(2).replace(".", ",")}${discountLabel ? ` (${discountLabel})` : ""}\n🎨 Criação de arte: Inclusa (Grátis!)\n\nPoderiam me ajudar com os detalhes e arte para produção?`;
    return `https://wa.me/5511954997799?text=${encodeURIComponent(msg)}`;
  }, [product, size, quantity, totalPrice, discountLabel, perUnit]);

  return (
    <section id="configurador" className="py-24 bg-white border-t border-slate-100 scroll-mt-16 text-slate-800">
      <div className="container mx-auto px-4">
        {/* Visual Badge Header */}
        <div className="flex justify-center mb-3">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-blue-100">
            ⚙️ Simulador de Orçamento
          </span>
        </div>

        <h2 className="section-title text-slate-950 font-heading">
          Simule seu Pedido e <span className="text-gradient-brand">Garanta o Preço da Promoção</span>
        </h2>
        <p className="section-subtitle">
          Selecione o produto, modelo e quantidade ideal. Visualize o mockup digital correspondente e peça direto pelo WhatsApp!
        </p>

        <div className="max-w-5xl mx-auto mt-12">
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedProduct(i);
                  setSelectedSize(0);
                  setQuantity(1);
                }}
                className={`
                  px-5 py-3 rounded-xl font-bold text-xs md:text-sm transition-all duration-200 border flex items-center justify-center gap-2
                  ${selectedProduct === i
                    ? "bg-brand-700 border-brand-700 text-white shadow-md shadow-brand-700/10 scale-102"
                    : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }
                `}
              >
                <span>{p.icon}</span>
                {p.name}
              </button>
            ))}
          </div>

          {/* Configurator Box Layout */}
          <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative z-10">
              {/* LEFT: Configuration Options (7 columns) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Product Bio */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-2xl">{product.icon}</span>
                    <h3 className="text-xl font-black text-slate-950 font-heading">
                      {product.name}
                    </h3>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                      Arte 100% Inclusa
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Size / Type Selector */}
                <div className="space-y-2.5">
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    1. Selecione o Tamanho / Modelo
                  </label>
                  <div className="space-y-2">
                    {product.sizes.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedSize(i)}
                        className={`
                          w-full flex items-center justify-between px-5 py-3.5 rounded-xl transition-all duration-200 text-left border relative overflow-hidden group
                          ${selectedSize === i
                            ? "bg-white border-brand-700 text-slate-950 shadow-sm"
                            : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                          }
                        `}
                      >
                        {selectedSize === i && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-700"></div>
                        )}
                        <span className="font-bold text-sm flex items-center gap-2">
                          {selectedSize === i ? "✓ " : ""}
                          {s.label}
                        </span>
                        <div className="text-right">
                          <span className={`font-black text-sm md:text-base ${selectedSize === i ? "text-brand-700" : "text-slate-800"}`}>
                            R$ {s.price.toFixed(2).replace(".", ",")}{perUnit}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Discount Meter */}
                <div className="space-y-3">
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    2. Informe a Quantidade (Desconto Progressivo)
                  </label>
                  <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                    
                    {/* Controls */}
                    <div className="flex items-center gap-2 bg-white border border-slate-200 p-1.5 rounded-xl">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 text-lg font-bold transition-all flex items-center justify-center"
                        type="button"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={100}
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                        className="w-12 h-9 text-center bg-transparent text-slate-800 text-base font-bold focus:outline-none"
                      />
                      <button
                        onClick={() => setQuantity(Math.min(100, quantity + 1))}
                        className="w-9 h-9 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 text-lg font-bold transition-all flex items-center justify-center"
                        type="button"
                      >
                        +
                      </button>
                    </div>

                    {/* Progress Slider Display */}
                    <div className="flex-1 w-full space-y-1.5">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-400">Escala de Desconto:</span>
                        <span className="text-brand-700">{quantity >= 10 ? "Desconto máximo ativado! 🏆" : "A partir de 3 un."}</span>
                      </div>
                      <div className="discount-progress-container">
                        <div
                          className="discount-progress-bar"
                          style={{ width: `${discountProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Progressive discount badges */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { min: 3, label: "3+ un: 5% OFF" },
                      { min: 5, label: "5+ un: 10% OFF" },
                      { min: 10, label: "10+ un: 15% OFF" },
                    ].map((tier) => {
                      const isActive = quantity >= tier.min;
                      return (
                        <div
                          key={tier.min}
                          className={`
                            text-center py-2 px-1 text-[10px] font-bold rounded-lg border transition-all duration-350
                            ${isActive
                              ? "bg-brand-50 text-brand-700 border-brand-100"
                              : "bg-white border-slate-200 text-slate-400"
                            }
                          `}
                        >
                          {isActive ? "✓ " : ""}
                          {tier.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RIGHT: Live Preview & Summary (5 columns) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-5 lg:space-y-0">
                {/* 3D Mockup Visual Display */}
                <div className="space-y-2">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center lg:text-left">
                    Mockup Digital Simulado
                  </span>
                  
                  {/* The Preview Box Frame */}
                  <div className="preview-box">
                    <div className="mockup-wind-banner">
                      {/* Straight rectangular pole */}
                      <div className="mockup-wb-pole" style={{ height: "230px" }}></div>
                      {/* Top horizontal arm/rod for holding the rectangular flag */}
                      <div className="absolute left-[30px] top-[24px] w-[65px] h-[3.5px] bg-[#475569] z-10"></div>
                      
                      {/* Rectangular Flag */}
                      <div 
                        className="mockup-wb-flag" 
                        style={{ 
                          borderRadius: "0", 
                          top: "27px", 
                          left: "33.5px", 
                          width: "60px", 
                          height: "198px", 
                          opacity: selectedProduct === 1 ? 0.8 : 1,
                          border: "1px dashed rgba(255, 255, 255, 0.3)"
                        }}
                      >
                        <span className="text-white text-[11px] font-black uppercase tracking-wider text-center pt-8">
                          Libracom
                        </span>
                        <span className="text-white/80 text-[7px] font-black mt-1 text-center bg-black/15 py-0.5 px-1.5 rounded">
                          {size.label.split(" - ")[0]}
                        </span>
                        <span className="text-white/70 text-[5.5px] font-bold mt-2 text-center border-t border-white/20 pt-1">
                          20% TRANSP.
                        </span>
                      </div>
                      
                      {/* Base rendered only for Complete Kit */}
                      {selectedProduct === 0 && <div className="mockup-wb-base"></div>}
                      <div className="mockup-wb-shadow"></div>
                    </div>
                  </div>
                </div>

                {/* Summary details */}
                <div className="bg-white rounded-2xl p-4.5 border border-slate-200 space-y-2.5 mt-3 shadow-xs">
                  <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    <span>Resumo</span>
                    <span className="text-brand-700">Arte Grátis Inclusa!</span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Material</span>
                      <span className="text-slate-900 font-bold">{product.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Dimensão</span>
                      <span className="text-slate-900 font-bold">{size.label.split(" - ")[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Quantidade</span>
                      <span className="text-slate-900 font-bold">{quantity} {perUnit ? "m²" : "un."}</span>
                    </div>

                    {discountLabel && (
                      <div className="flex justify-between items-center text-emerald-700 font-bold bg-emerald-50 p-2 rounded-lg border border-emerald-100 mt-1">
                        <span>Desconto Ativado</span>
                        <span>{discountLabel.split(" - ")[0]}</span>
                      </div>
                    )}
                  </div>

                  <div className="separator-glow my-2.5"></div>

                  {/* Calculated Price */}
                  <div className="flex justify-between items-end">
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest pb-0.5">
                      Total Estimado
                    </span>
                    <div className="text-right">
                      {discountLabel && (
                        <span className="text-slate-400 text-[10px] line-through block">
                          R$ {(size.price * quantity).toFixed(2).replace(".", ",")}
                        </span>
                      )}
                      <span className="text-xl md:text-2xl font-black text-slate-950 font-heading tracking-tight">
                        R$ {totalPrice.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta w-full justify-center py-3.5 mt-3 group relative overflow-hidden"
                >
                  <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="mr-2 transition-transform duration-200 group-hover:scale-110"
                  />
                  Garantir Preço & Enviar no WhatsApp
                </a>

                <p className="text-center text-[9px] text-slate-400 mt-2 font-medium">
                  * Valores promocionais válidos por tempo limitado. Faturamento corporativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
