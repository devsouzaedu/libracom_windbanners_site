"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

const products = [
  {
    id: "wind-banner",
    name: "Wind Banner",
    icon: "🏳️",
    description: "Bandeira de vento com estrutura flexível em fibra de vidro e base reforçada. Perfeita para calçadas, frentes de loja e eventos externos.",
    sizes: [
      { label: "Pequeno - 2,0m", price: 350 },
      { label: "Médio - 2,60m (Mais Vendido)", price: 400 },
      { label: "Grande - 3,0m", price: 420 },
    ],
  },
  {
    id: "roll-up",
    name: "Roll Up",
    icon: "🎞️",
    description: "Banner retrátil portátil em alumínio leve com mola de alta tração. Acompanha bolsa de transporte. Perfeito para feiras e recepções.",
    sizes: [
      { label: "Standard - 80×200cm", price: 190 },
      { label: "Corporativo - 100×200cm", price: 230 },
      { label: "Grande - 120×200cm", price: 280 },
    ],
  },
  {
    id: "adesivo",
    name: "Adesivo",
    icon: "🏷️",
    description: "Adesivo em Vinil Brilho ou Fosco com recorte digital personalizado de alta precisão. À prova d'água e resistente ao sol.",
    sizes: [
      { label: "Folha / m² Avulso", price: 45 },
      { label: "Grade Comercial (1 a 3m²)", price: 40 },
      { label: "Lote Industrial (acima de 3m²)", price: 35 },
    ],
    perUnit: "/m²",
  },
  {
    id: "banner-lona",
    name: "Banner / Lona",
    icon: "🖼️",
    description: "Impressão digital Ultra HD em lona de alta gramatura com acabamento profissional em bastão e cordão ou ilhós metálico reforçado.",
    sizes: [
      { label: "Formato Padrão (até 2m²)", price: 60 },
      { label: "Grande Formato (2 a 5m²)", price: 55 },
      { label: "Fachada Comercial (acima de 5m²)", price: 50 },
    ],
    perUnit: "/m²",
  },
  {
    id: "faixa",
    name: "Faixa",
    icon: "📏",
    description: "Faixa promocional resistente de alto impacto. Excelente para inaugurações, ofertas temporárias, datas comemorativas e calçadas.",
    sizes: [
      { label: "Compacta - 3×0,70m", price: 80 },
      { label: "Comercial - 4×0,80m", price: 110 },
      { label: "Expandida - 5×1,00m", price: 150 },
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
  if (qty >= 10) return "15% OFF - Super Desconto!";
  if (qty >= 5) return "10% OFF - Lote Ativado!";
  if (qty >= 3) return "5% OFF - Desconto Progressivo!";
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
    const msg = `Olá, Libracom! Estive simulando o meu pedido no configurador interativo do site e gostaria de garantir a promoção:\n\n📦 Produto: ${product.name}\n📐 Modelo/Tamanho: ${size.label}\n🔢 Quantidade: ${quantity}${perUnit ? " m²" : " unidades"}\n💰 Preço Estimado: R$ ${totalPrice.toFixed(2).replace(".", ",")}${discountLabel ? ` (${discountLabel})` : ""}\n🎨 Criação de arte: Inclusa (Grátis!)\n\nPodem me ajudar com a finalização do design e orçamento?`;
    return `https://wa.me/5511954997799?text=${encodeURIComponent(msg)}`;
  }, [product, size, quantity, totalPrice, discountLabel, perUnit]);

  return (
    <section id="configurador" className="py-24 bg-glow-grid scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Visual Badge Header */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-cyan-500/30 backdrop-blur-sm">
            ⚙️ Simulador em Tempo Real
          </span>
        </div>

        <h2 className="section-title text-white">
          Monte & Simule seu <span className="text-gradient-brand">Pedido Especial</span>
        </h2>
        <p className="section-subtitle">
          Escolha os parâmetros exatos do seu material promocional, visualize um mockup simulado e garanta descontos progressivos direto com o time comercial
        </p>

        <div className="max-w-5xl mx-auto mt-12">
          {/* Tab buttons */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-3 mb-8">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedProduct(i);
                  setSelectedSize(0);
                  setQuantity(1);
                }}
                className={`
                  px-4 py-3 md:px-6 md:py-3.5 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 border
                  ${selectedProduct === i
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 border-blue-400 text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "glass-card border-white/5 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/10"
                  }
                `}
              >
                <span className="text-lg md:text-xl">{p.icon}</span>
                {p.name}
              </button>
            ))}
          </div>

          {/* Configurator Box Layout */}
          <div className="glass-card p-6 md:p-10 border border-white/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
              {/* LEFT: Configuration Options (7 columns) */}
              <div className="lg:col-span-7 space-y-8">
                {/* Product Bio */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{product.icon}</span>
                    <h3 className="text-2xl font-black text-white font-heading">
                      {product.name}
                    </h3>
                    <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                      Arte 100% Grátis
                    </span>
                  </div>
                  <p className="text-slate-350 text-sm mt-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Size / Type Selector */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                      1. Escolha o Tamanho / Modelo
                    </label>
                    <span className="text-xs text-blue-400 font-semibold">Base completa inclusa</span>
                  </div>
                  <div className="space-y-3">
                    {product.sizes.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedSize(i)}
                        className={`
                          w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 text-left border relative overflow-hidden group
                          ${selectedSize === i
                            ? "bg-blue-600/15 border-blue-500/60 text-white shadow-md shadow-blue-500/5"
                            : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:border-white/10 hover:text-white"
                          }
                        `}
                      >
                        {selectedSize === i && (
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500"></div>
                        )}
                        <span className="font-bold text-sm md:text-base flex items-center gap-2">
                          {selectedSize === i ? "✓ " : ""}
                          {s.label}
                        </span>
                        <div className="text-right">
                          <span className="text-xs text-slate-500 block">Preço de fábrica</span>
                          <span className={`font-black text-base md:text-lg ${selectedSize === i ? "text-emerald-400" : "text-slate-300 group-hover:text-white"}`}>
                            R$ {s.price.toFixed(2).replace(".", ",")}{perUnit}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Discount Meter */}
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    2. Escolha a Quantidade (Desconto Progressivo)
                  </label>
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    {/* Controls */}
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-1.5 rounded-2xl">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xl font-bold transition-all flex items-center justify-center"
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
                        className="w-16 h-11 text-center bg-transparent text-white text-xl font-bold focus:outline-none"
                      />
                      <button
                        onClick={() => setQuantity(Math.min(100, quantity + 1))}
                        className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xl font-bold transition-all flex items-center justify-center"
                        type="button"
                      >
                        +
                      </button>
                    </div>

                    {/* Progress Slider Display */}
                    <div className="flex-1 w-full space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-400">Escala de Descontos:</span>
                        <span className="text-emerald-400">{quantity >= 10 ? "Máximo atingido! 🔥" : "Mais quantidade = Mais Desconto!"}</span>
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
                  <div className="mt-4 grid grid-cols-3 gap-2">
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
                            text-center py-2 px-1 text-[11px] font-bold rounded-xl border transition-all duration-500
                            ${isActive
                              ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/40 animate-pulse"
                              : "bg-white/5 border-white/5 text-slate-500"
                            }
                          `}
                        >
                          {isActive ? "🏆 " : ""}
                          {tier.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RIGHT: Live Preview & Summary (5 columns) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:space-y-0">
                {/* 3D Mockup Visual Display */}
                <div className="space-y-3">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest text-center lg:text-left">
                    Visualização do Mockup (Simulado)
                  </span>
                  
                  {/* The Preview frame Box */}
                  <div className="preview-box">
                    {/* Dynamic Graphic representation based on index */}
                    {selectedProduct === 0 && (
                      <div className="mockup-wind-banner">
                        <div className="mockup-wb-pole"></div>
                        <div className="mockup-wb-pole-curve"></div>
                        <div className="mockup-wb-flag">
                          <span className="text-white text-xs font-black uppercase tracking-wider text-center pt-8">
                            Libracom
                          </span>
                          <span className="text-white/80 text-[8px] font-bold mt-1 text-center bg-black/20 py-0.5 px-1.5 rounded">
                            {size.label.split(" ")[0]}
                          </span>
                        </div>
                        <div className="mockup-wb-base"></div>
                        <div className="mockup-wb-shadow"></div>
                      </div>
                    )}

                    {selectedProduct === 1 && (
                      <div className="mockup-roll-up">
                        <div className="mockup-ru-canvas">
                          <div className="mockup-ru-banner-text">LIBRACOM</div>
                          <div className="text-[9px] text-white/50 font-bold mt-2 uppercase tracking-wide">
                            {size.label.split(" ")[0]}
                          </div>
                        </div>
                        <div className="mockup-ru-base"></div>
                        <div className="mockup-ru-feet">
                          <div className="mockup-ru-foot"></div>
                          <div className="mockup-ru-foot"></div>
                        </div>
                      </div>
                    )}

                    {selectedProduct === 2 && (
                      <div className="mockup-stickers">
                        <div className="mockup-sticker text-white text-[8px] font-black">Libracom</div>
                        <div className="mockup-sticker text-white text-[8px] font-black bg-gradient-to-tr from-cyan-500 to-blue-500">ADESIVO</div>
                        <div className="mockup-sticker text-white text-[8px] font-black bg-gradient-to-tr from-emerald-400 to-cyan-500">VINIL</div>
                        <div className="mockup-sticker text-white text-[8px] font-black bg-gradient-to-tr from-yellow-400 to-amber-500">HD</div>
                        <div className="mockup-sticker text-white text-[8px] font-black bg-gradient-to-tr from-purple-500 to-pink-500">CORTE</div>
                        <div className="mockup-sticker text-white text-[8px] font-black bg-gradient-to-tr from-blue-600 to-emerald-400">BRILHO</div>
                      </div>
                    )}

                    {selectedProduct === 3 && (
                      <div className="mockup-banner-lona">
                        <div className="mockup-grommet grommet-tl"></div>
                        <div className="mockup-grommet grommet-tr"></div>
                        <div className="mockup-grommet grommet-bl"></div>
                        <div className="mockup-grommet grommet-br"></div>
                        <div className="text-center p-4">
                          <div className="text-white text-xs font-black uppercase tracking-widest">IMPRESSÃO ULTRA HD</div>
                          <div className="text-cyan-400 text-[10px] font-bold mt-1 uppercase">Lona Premium</div>
                        </div>
                      </div>
                    )}

                    {selectedProduct === 4 && (
                      <div className="mockup-faixa">
                        <div className="mockup-faixa-pole pole-l"></div>
                        <div className="mockup-faixa-pole pole-r"></div>
                        <div className="mockup-faixa-rope rope-tl"></div>
                        <div className="mockup-faixa-rope rope-tr"></div>
                        <div className="mockup-faixa-rope rope-bl"></div>
                        <div className="mockup-faixa-rope rope-br"></div>
                        <div className="text-center px-4">
                          <div className="text-white text-[10px] font-extrabold uppercase tracking-wide">FAIXA DE ALTO IMPACTO</div>
                          <div className="text-yellow-300 text-[8px] font-medium tracking-tight mt-0.5">RESISTENTE AO TEMPO - FRENTE DE LOJAS</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Summary details */}
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-3 mt-4">
                  <div className="flex justify-between text-xs text-slate-400 uppercase tracking-widest">
                    <span>Resumo</span>
                    <span className="text-blue-400">Arte Grátis Inclusa!</span>
                  </div>

                  <div className="space-y-2 text-sm pt-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Material</span>
                      <span className="text-white font-bold">{product.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Dimensão</span>
                      <span className="text-white font-bold">{size.label.split(" - ")[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Quantidade</span>
                      <span className="text-white font-bold">{quantity} {perUnit ? "m²" : "un."}</span>
                    </div>

                    {discountLabel && (
                      <div className="flex justify-between items-center text-emerald-400 font-bold bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
                        <span>Desconto Ativado</span>
                        <span className="text-xs">{discountLabel.split(" - ")[0]}</span>
                      </div>
                    )}
                  </div>

                  <div className="separator-glow my-3"></div>

                  {/* Calculated Price */}
                  <div className="flex justify-between items-end">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest pb-1">
                      Total Estimado
                    </span>
                    <div className="text-right">
                      {discountLabel && (
                        <span className="text-slate-500 text-xs line-through block">
                          R$ {(size.price * quantity).toFixed(2).replace(".", ",")}
                        </span>
                      )}
                      <span className="text-2xl md:text-3xl font-black text-white font-heading tracking-tight">
                        R$ {totalPrice.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Premium WhatsApp Button */}
                <a
                  href={whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta w-full justify-center text-sm md:text-base py-3.5 md:py-4 mt-4 animate-pulse-glow group relative overflow-hidden"
                >
                  {/* Subtle sweep */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-light-sweep"></div>
                  
                  <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp"
                    width={22}
                    height={22}
                    className="mr-2 transition-transform duration-300 group-hover:scale-110"
                  />
                  Garantir Desconto & Chamar no WhatsApp
                </a>

                <p className="text-center text-[10px] text-slate-500 mt-2">
                  * Valores promocionais de fábrica. Faturamento facilitado para empresas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
