"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
  icon?: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "O que vem no pedido de 'somente bandeira wind banner'?",
    answer:
      "O pedido de somente a bandeira (refil avulso) inclui exclusivamente o tecido 100% poliéster personalizado com impressão sublimática de alta definição, costura industrial dupla, bainha perimetral e passador (túnel) reforçado para encaixe da haste. NÃO inclui haste de fibra de vidro nem base de sustentação. É ideal para quem já tem a estrutura e quer apenas renovar a arte!",
    icon: "🚩"
  },
  {
    question: "Como ter certeza de que o refil vai servir na minha haste antiga?",
    answer:
      "Nossos refis seguem o padrão universal do mercado nacional (modelos Gota, Pena/Faca, Vela e Retangular nas medidas 2,0m, 2,60m, 3,20m e 4,0m). Basta nos informar pelo WhatsApp a altura da sua haste ou enviar uma foto do seu wind banner montado. Nossa equipe técnica confere as medidas exatas para garantir o encaixe perfeito e esticado sem folgas.",
    icon: "📏"
  },
  {
    question: "Qual a diferença entre impressão Face Única e Dupla Face?",
    answer:
      "Na Face Única (mais popular e econômica), a impressão digital é feita em tecido com transparência mínima e vazamento térmico de cor de 100%, permitindo que a imagem seja vista com nitidez em ambos os lados (o verso fica espelhado). Já na Dupla Face, confeccionamos com duas camadas de tecido e uma camada interna de blackout, possibilitando artes diferentes na frente e no verso com leitura direta dos dois lados.",
    icon: "🔄"
  },
  {
    question: "O tecido da bandeira do wind banner desbota no sol ou mancha na chuva?",
    answer:
      "Não! Utilizamos tecnologia de sublimação digital com termofixação a mais de 200°C. A tinta penetra diretamente nas fibras do poliéster, tornando o tecido resistente a raios UV, chuvas intensas, ventos fortes e poluição urbana, mantendo as cores vivas por muito mais tempo sem desbotar ou craquelar.",
    icon: "☀️"
  },
  {
    question: "O refil do wind banner pode ser lavado?",
    answer:
      "Sim, é 100% lavável! Você pode lavar a bandeira à mão ou na máquina de lavar no ciclo delicado com sabão neutro. A secagem é ultra rápida por ser tecido 100% poliéster. Não solta tinta e não precisa passar a ferro, pois o tecido estica naturalmente ao ser colocado na haste.",
    icon: "🧼"
  },
  {
    question: "Vocês cobram para criar ou ajustar a arte do refil?",
    answer:
      "A criação e adaptação da arte é 100% GRATUITA na Libracom! Você nos envia o seu logotipo ou as informações que deseja pelo WhatsApp, e nossos designers profissionais preparam o mockup virtual para você aprovar antes de iniciar a produção. Sem surpresas e sem custo extra de design.",
    icon: "🎨"
  },
  {
    question: "Qual o prazo de confecção e entrega de somente a bandeira?",
    answer:
      "Por termos fabricação própria local, a produção do refil avulso é extremamente rápida (em média 24 a 48 horas úteis após aprovação da arte). Realizamos entrega expressa em Barueri, Alphaville, Santana de Parnaíba e Grande São Paulo, além de envio rápido via Correios ou transportadora para todo o território brasileiro.",
    icon: "⚡"
  },
];

export default function RefilFAQ({ faqs = defaultFaqs }: { faqs?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`
              rounded-2xl transition-all duration-300 border overflow-hidden
              ${
                isOpen
                  ? "bg-white border-blue-500/40 shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/20"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
              }
            `}
          >
            <button
              className="w-full flex items-center justify-between py-5 px-6 text-left transition-colors duration-200"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              type="button"
            >
              <span className="font-bold text-sm md:text-base text-slate-900 flex items-center gap-3 font-heading leading-tight">
                {faq.icon && <span className="text-xl shrink-0">{faq.icon}</span>}
                <span>{faq.question}</span>
              </span>

              <div
                className={`
                  w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ml-4
                  ${
                    isOpen
                      ? "bg-blue-600 text-white rotate-180 shadow-sm"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }
                `}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <div
              className={`
                transition-all duration-300 ease-in-out overflow-hidden
                ${isOpen ? "max-h-[400px] opacity-100 border-t border-slate-100 bg-slate-50/50" : "max-h-0 opacity-0"}
              `}
            >
              <div className="p-6 text-slate-600 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
