"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Como funciona a criação da minha arte? É mesmo gratuita?",
    answer:
      "Sim, 100% gratuita! Nossa equipe de designers profissionais cria o layout completo para você ou adapta o seu logotipo existente. Você envia sua ideia ou arquivos pelo WhatsApp, nós geramos um mockup virtual realista e você só fecha o pedido quando estiver totalmente satisfeito com o resultado visual. Sem cobranças antecipadas!",
    icon: "🎨"
  },
  {
    question: "Qual o formato de arquivo que posso enviar para meu logotipo?",
    answer:
      "Você pode enviar praticamente qualquer formato pelo WhatsApp: PNG, JPG, PDF, CorelDraw (CDR), Illustrator (AI), EPS ou SVG. Nossos designers cuidam da vetorização e ajuste de resolução para garantir que a impressão saia em Ultra HD nítido.",
    icon: "📂"
  },
  {
    question: "Como funciona a entrega expressa em 24 horas?",
    answer:
      "Temos fabricação própria local em Barueri. Para pedidos aprovados (arte e pagamento) até as 12:00, produzimos e despachamos seu Wind Banner, Roll Up ou Lona no mesmo dia, realizando a entrega em até 24 horas em Barueri, Alphaville, Tamboré, Santana de Parnaíba e região Oeste de São Paulo.",
    icon: "⚡"
  },
  {
    question: "Vocês atendem empresas e fazem faturamento no boleto?",
    answer:
      "Com certeza! Atendemos empresas de todos os portes e agências de marketing corporativo. Oferecemos faturamento facilitado via boleto bancário bancário para CNPJ sob análise cadastral simplificada. Fale com nossos consultores para habilitar as condições B2B.",
    icon: "🏢"
  },
  {
    question: "Os Wind Banners resistem bem a chuva e ventos fortes?",
    answer:
      "Sim! Nossos Wind Banners são fabricados com tecido micro-poliéster premium de alta gramatura e costuras reforçadas de dupla face. A haste é feita de fibra de vidro flexível de alta tração (a mesma tecnologia de varas de pesca profissionais), que verga mas não quebra. A base de suporte garante máxima estabilidade em ventos fortes e ações externas.",
    icon: "🌪️"
  },
  {
    question: "Quais as opções de pagamento disponíveis?",
    answer:
      "Oferecemos desconto especial para pagamentos via PIX ou transferência. Também parcelamos em até 12x no cartão de crédito corporativo ou pessoal. Para compras recorrentes ou grandes volumes B2B, facilitamos no boleto faturado.",
    icon: "💳"
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-glow-grid border-t border-white/5 scroll-mt-16">
      <div className="container mx-auto px-4">
        
        {/* visual Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-cyan-500/20 backdrop-blur-sm">
            💬 Respostas Rápidas
          </span>
        </div>

        <h2 className="section-title text-white">
          Dúvidas <span className="text-gradient-brand">Frequentes</span>
        </h2>
        <p className="section-subtitle">
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
                    ? "bg-slate-900/80 border-blue-500/40 shadow-lg shadow-blue-500/5"
                    : "glass-card border-white/5 hover:border-white/10"
                  }
                `}
              >
                <button
                  className="w-full flex items-center justify-between py-5 px-6 text-left transition-colors duration-200"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  type="button"
                >
                  <span className="font-bold text-sm md:text-base text-white flex items-center gap-3 font-heading leading-tight">
                    <span className="text-lg md:text-xl shrink-0 opacity-80">{faq.icon}</span>
                    {faq.question}
                  </span>
                  
                  {/* Glowing Arrow Icon */}
                  <div
                    className={`
                      w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ml-4
                      ${isOpen
                        ? "bg-blue-500/20 text-blue-400 rotate-180"
                        : "bg-white/5 text-slate-500 group-hover:bg-white/10"
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
                    ${isOpen ? "max-h-[300px] opacity-100 border-t border-white/5 bg-slate-950/20" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="p-6 text-slate-400 text-xs md:text-sm leading-relaxed">
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
