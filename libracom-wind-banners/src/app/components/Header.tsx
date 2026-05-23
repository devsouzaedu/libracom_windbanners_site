"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/85 border-b border-white/10 shadow-lg shadow-black/35 py-3 backdrop-blur-md"
          : "bg-transparent py-5 backdrop-blur-[2px]"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Glow */}
        <Link href="/" className="flex items-center group relative">
          {/* Logo glow background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <Image
            src="/images/LIBRACOM_png.png"
            alt="Libracom - Wind Banners e Comunicação Visual em Barueri e Alphaville"
            width={130}
            height={40}
            className="brightness-0 invert transition-all duration-300 group-hover:scale-102 drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Nav with animated indicator */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-xs xl:text-sm font-semibold text-slate-300 hover:text-white transition-all duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-350 group-hover:w-1/2 rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5511954997799"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta !px-5 !py-2.5 text-xs font-black uppercase tracking-wider relative overflow-hidden group shadow-lg"
          >
            {/* Light sweep effect */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-light-sweep"></div>
            
            <Image
              src="/images/WhatsApp_icon.png"
              alt="WhatsApp"
              width={18}
              height={18}
              className="mr-1.5 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:inline">Falar com Consultor</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
            aria-label="Menu de Navegação"
          >
            <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100 border-b border-white/10" : "max-h-0 opacity-0 pointer-events-none"
        } bg-slate-950/95 backdrop-blur-xl`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 font-bold border border-transparent hover:border-white/5 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-slate-500">→</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
