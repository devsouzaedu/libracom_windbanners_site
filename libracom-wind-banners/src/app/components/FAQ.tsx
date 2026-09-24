"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Como funciona a criação da minha arte? É mesmo gratuita?",
    answer:
      "Sim, 100% gratuita! Nossa equipe de designers profissionais cria o layout completo do seu Wind Banner ou adapta o seu logotipo existente. Você envia sua ideia ou arquivos pelo WhatsApp, nós geramos um mockup virtual realista e você só fecha o pedido quando estiver totalmente satisfeito com o resultado visual. Sem cobranças antecipadas!",
    icon: "🎨"
  },
  {
    question: "Qual o formato de arquivo que posso enviar para meu logotipo?",
    answer:
      "Você pode enviar praticamente qualquer formato pelo WhatsApp: PNG, JPG, PDF, CorelDraw (CDR), Illustrator (AI), EPS ou SVG. Nossos designers cuidam da vetorização e ajuste de resolução para garantir que a impressão no seu Wind Banner Retangular saia em altíssima definição.",
    icon: "📂"
  },
  {
    question: "Como funciona a entrega expressa em 24 horas?",
    answer:
      "Temos fabricação própria local em Barueri. Para pedidos aprovados (arte e pagamento) até as 12:00, produzimos e despachamos seu Wind Banner no mesmo dia, realizando a entrega em até 24 horas em Barueri, Alphaville, Tamboré, Santana de Parnaíba e região Oeste de São Paulo.",
    icon: "⚡"
  },
  {
    question: "Vocês atendem empresas e agências?",
    answer:
      "Com certeza! Atendemos empresas de todos os portes e agências de marketing, com descontos progressivos por volume. Pedidos abaixo de R$ 3.000,00 são pagos somente via PIX. A partir de R$ 3.000,00, o pagamento pode ser feito no cartão de crédito. Não trabalhamos com boleto nem faturamento.",
    icon: "🏢"
  },
  {
    question: "Os Wind Banners resistem bem a chuva e ventos fortes?",
    answer:
      "Sim! Nossos Wind Banners são fabricados com tecido micro-poliéster de alta resistência e costuras industriais reforçadas. A haste é feita de fibra de vidro flexível de alta tração, que verga mas não quebra. A base de suporte robusta garante máxima estabilidade em calçadas e ações externas.",
    icon: "🌪️"
  },
  {
    question: "Quais as opções de pagamento disponíveis?",
    answer:
      "Pedidos abaixo de R$ 3.000,00 são pagos somente via PIX. A partir de R$ 3.000,00, o pagamento pode ser feito no cartão de crédito. Não trabalhamos com boleto nem faturamento.",
    icon: "💳"
  },
];

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
