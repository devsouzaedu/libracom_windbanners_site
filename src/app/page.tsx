'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      {/* Header */}
      <header className="fixed w-full z-50 bg-blue-900 shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center animate-fade-in mb-6 md:mb-0">
            <Image
              src="/images/LIBRACOM_png.png"
              alt="Libracom Wind Banners Logo"
              width={150}
              height={50}
              className="mr-4 hover-scale brightness-0 invert"
            />
          </div>
          <nav className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 animate-fade-in mb-6 md:mb-0">
            <a href="#sobre" className="flex items-center justify-center text-gray-100 hover:text-white font-medium transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Sobre
            </a>
            <a href="#contato" className="flex items-center justify-center text-gray-100 hover:text-white font-medium transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contato
            </a>
          </nav>
          <a
            href="https://wa.me/5511954997799"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary animate-fade-in w-full md:w-auto text-center"
          >
            <Image
              src="/images/WhatsApp_icon.png"
              alt="WhatsApp"
              width={24}
              height={24}
              className="mr-2"
            />
            <span>Orçamento</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-40 md:pt-0">
        <Image
          src="/images/wind_banner_sitebg.webp"
          alt="Wind Banners em Barueri"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-4 py-20 md:py-0">
            <div className="flex flex-col md:flex-row items-center justify-between min-h-screen">
              {/* Conteúdo Principal */}
              <div className="text-white w-full md:w-1/2 mt-20 md:mt-32 space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Wind Banners<br />Personalizados
                </h1>
                <p className="text-lg md:text-xl max-w-2xl">
                  Destaque sua marca em Barueri e Alphaville com nossos Wind Banners de alta qualidade
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 space-y-6">
                  <h3 className="text-xl md:text-2xl font-bold flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Preços Especiais:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Wind Banner 2m - R$350,00
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Wind Banner 2.60m - R$400,00
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Wind Banner 3m - R$420,00
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="https://wa.me/5511954997799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-base md:text-lg text-center group w-full sm:w-auto"
                  >
                    <Image
                      src="/images/WhatsApp_icon.png"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="mr-2 group-hover:animate-bounce"
                    />
                    Fazer Pedido
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 md:py-20 bg-white">
        <div className="container mx-auto px-4">
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-24 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 md:py-12">
        <div className="container mx-auto px-4">
        </div>
      </footer>
    </div>
  );
} 