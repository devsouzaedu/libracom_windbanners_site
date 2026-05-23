"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#produtos", label: "Produtos" },
    { href: "#configurador", label: "Simulador" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#faq", label: "Dúvidas" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 border-b border-slate-200 shadow-sm py-3.5 backdrop-blur-md"
          : "bg-white/80 border-b border-slate-100 py-5 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo - Native dark color on light backdrop */}
        <Link href="/" className="flex items-center group relative">
          <Image
            src="/images/LIBRACOM_png.png"
            alt="Libracom - Wind Banners e Comunicação Visual em Barueri e Alphaville"
            width={125}
            height={38}
            className="transition-transform duration-300 group-hover:scale-102"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Nav with modern, simple indicators */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-50 border border-slate-100 px-2 py-1.5 rounded-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3.5 py-1.5 text-xs xl:text-sm font-bold text-slate-600 hover:text-brand-700 transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-700 transition-all duration-200 group-hover:w-1/2 rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5511954997799"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-sm"
          >
            <Image
              src="/images/WhatsApp_icon.png"
              alt="WhatsApp"
              width={16}
              height={16}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <span className="hidden sm:inline">Orçamento Grátis</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 border border-slate-200 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all"
            aria-label="Menu de Navegação"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100 border-t border-slate-200" : "max-h-0 opacity-0 pointer-events-none"
        } bg-white`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3.5 text-xs md:text-sm text-slate-700 hover:text-brand-700 hover:bg-slate-50 rounded-xl transition-all duration-200 font-bold border border-transparent flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-slate-400">→</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
