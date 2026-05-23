"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

const products = [
  {
    id: "wind-banner",
    name: "Wind Banner Completo",
    icon: "🏳️",
    description: "Kit completo de alta resistência: tecido de poliéster com dupla face e zero transparência, haste flexível em fibra de vidro e base reforçada.",
    sizes: [
      { label: "Pequeno - 2,0m", price: 320 },
      { label: "Médio - 2,60m (Mais Vendido)", price: 380 },
      { label: "Grande - 3,0m", price: 430 },
    ],
  },
  {
    id: "bandeira-avulsa",
    name: "Bandeira Avulsa",
    icon: "🚩",
    description: "Somente a bandeira impressa em alta resolução, ideal para reposição. Tecido premium zero transparência, compatível com suas hastes existentes.",
    sizes: [
      { label: "Reposição - 2,0m", price: 200 },
      { label: "Reposição - 2,60m", price: 250 },
      { label: "Reposição - 3,0m", price: 280 },
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
                    {/* Waving Wind Banner (For index 0 or 1 - replacement flag) */}
                    {(selectedProduct === 0 || selectedProduct === 1) && (
                      <div className="mockup-wind-banner">
                        <div className="mockup-wb-pole"></div>
                        <div className="mockup-wb-pole-curve"></div>
                        <div className="mockup-wb-flag">
                          <span className="text-white text-xs font-black uppercase tracking-wider text-center pt-8">
                            Libracom
                          </span>
                          <span className="text-white/80 text-[7.5px] font-black mt-1 text-center bg-black/15 py-0.5 px-1.5 rounded">
                            {size.label.split(" ")[0] === "Reposição" ? "FLAG" : size.label.split(" ")[0]}
                          </span>
                        </div>
                        {selectedProduct === 0 && <div className="mockup-wb-base"></div>}
                        <div className="mockup-wb-shadow"></div>
                      </div>
                    )}

                    {selectedProduct === 2 && (
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

                    {selectedProduct === 3 && (
                      <div className="mockup-stickers">
                        <div className="mockup-sticker text-white text-[8px] font-black">Libracom</div>
                        <div className="mockup-sticker text-white text-[8px] font-black bg-gradient-to-tr from-brand-500 to-brand-700">ADESIVO</div>
                        <div className="mockup-sticker text-white text-[8px] font-black bg-gradient-to-tr from-brand-600 to-cyan-500">VINIL</div>
                        <div className="mockup-sticker text-white text-[8px] font-black bg-gradient-to-tr from-yellow-400 to-amber-500">HD</div>
                        <div className="mockup-sticker text-white text-[8px] font-black bg-gradient-to-tr from-purple-500 to-pink-500">CORTE</div>
                        <div className="mockup-sticker text-white text-[8px] font-black bg-gradient-to-tr from-blue-600 to-emerald-400">BRILHO</div>
                      </div>
                    )}

                    {selectedProduct === 4 && (
                      <div className="mockup-banner-lona">
                        <div className="mockup-grommet grommet-tl"></div>
                        <div className="mockup-grommet grommet-tr"></div>
                        <div className="mockup-grommet grommet-bl"></div>
                        <div className="mockup-grommet grommet-br"></div>
                        <div className="text-center p-4">
                          <div className="text-white text-xs font-black uppercase tracking-widest">IMPRESSÃO DIGITAL HD</div>
                          <div className="text-cyan-300 text-[10px] font-bold mt-1 uppercase">Lona Premium</div>
                        </div>
                      </div>
                    )}

                    {selectedProduct === 5 && (
                      <div className="mockup-faixa">
                        <div className="mockup-faixa-pole pole-l"></div>
                        <div className="mockup-faixa-pole pole-r"></div>
                        <div className="mockup-faixa-rope rope-tl"></div>
                        <div className="mockup-faixa-rope rope-tr"></div>
                        <div className="mockup-faixa-rope rope-bl"></div>
                        <div className="mockup-faixa-rope rope-br"></div>
                        <div className="text-center px-4">
                          <div className="text-white text-[10px] font-extrabold uppercase tracking-wide">FAIXA DE ALTO IMPACTO</div>
                          <div className="text-yellow-300 text-[8px] font-medium tracking-tight mt-0.5">RESISTENTE AO VENTO</div>
                        </div>
                      </div>
                    )}
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
