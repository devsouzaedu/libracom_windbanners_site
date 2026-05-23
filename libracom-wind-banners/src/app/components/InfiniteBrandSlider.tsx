"use client";

import Image from "next/image";
import { useState } from "react";

const brands = [
  { src: "/images/marca1.png", alt: "Cliente parceiro 1" },
  { src: "/images/marca2.png", alt: "Cliente parceiro 2" },
  { src: "/images/marca3.png", alt: "Cliente parceiro 3" },
  { src: "/images/marca4.png", alt: "Cliente parceiro 4" },
  { src: "/images/marca5.png", alt: "Cliente parceiro 5" },
  { src: "/images/marca6.png", alt: "Cliente parceiro 6" },
  { src: "/images/marca7.png", alt: "Cliente parceiro 7" },
  { src: "/images/marca8.png", alt: "Cliente parceiro 8" },
];

export default function InfiniteBrandSlider() {
  return (
    <section className="py-16 bg-glow-grid">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">
          Empresas que <span className="text-gradient-brand">Confiam</span> na Libracom
        </h2>
        <p className="section-subtitle">
          Grandes marcas escolhem nossos produtos para destacar seus negócios
        </p>
      </div>
      <div className="infinite-scroll-container mt-8">
        <div className="infinite-scroll-track">
          {/* Render brands twice for seamless infinite loop */}
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 flex items-center justify-center group"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={160}
                height={80}
                className="object-contain max-h-16 md:max-h-20 opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
