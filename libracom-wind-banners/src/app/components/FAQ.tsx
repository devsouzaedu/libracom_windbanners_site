"use client";

import { useState } from "react";

import { homeFaqs as faqs } from "../lib/homeFaqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-24 bg-white border-t border-slate-100 scroll-mt-16">
      <div className="container mx-auto px-4">
        
        {/* visual Badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-blue-50 text-brand-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100">
            💬 Respostas Rápidas
          </span>
        </div>

        <h2 className="section-title text-slate-950 font-heading">
          Dúvidas <span className="text-gradient-brand">Frequentes</span>
        </h2>
        <p className="section-subtitle !text-slate-500">
          Tudo o que você precisa saber para comprar com total segurança e receber o melhor material promocional
        </p>

        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`
                  rounded-2xl transition-all duration-500 border overflow-hidden
                  ${isOpen
                    ? "bg-white border-brand-700 shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                  }
                `}
              >
                <button
                  className="w-full flex items-center justify-between py-5 px-6 text-left transition-colors duration-200"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  type="button"
                >
                  <span className="font-bold text-sm md:text-base text-slate-900 flex items-center gap-3 font-heading leading-tight">
                    <span className="text-lg md:text-xl shrink-0 opacity-80">{faq.icon}</span>
                    {faq.question}
                  </span>
                  
                  {/* Glowing Arrow Icon */}
                  <div
                    className={`
                      w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ml-4
                      ${isOpen
                        ? "bg-blue-50 text-brand-700 rotate-180"
                        : "bg-slate-100 text-slate-500"
                      }
                    `}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Sliding Accordion Container */}
                <div
                  className={`
                    transition-all duration-500 ease-in-out overflow-hidden
                    ${isOpen ? "max-h-[300px] opacity-100 border-t border-slate-100 bg-slate-50" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="p-6 text-slate-600 text-xs md:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
