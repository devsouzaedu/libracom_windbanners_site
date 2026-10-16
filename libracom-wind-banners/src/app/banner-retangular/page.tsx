import ProductPage from "../components/ProductPage";
import { pageMetadata } from "../lib/site";

const path = "/banner-retangular";

export const metadata = pageMetadata({
  title: "Banner Retangular Personalizado em Lona ou Tecido | Libracom Barueri",
  description:
    "Banner retangular personalizado com bastão e cordão, em lona ou tecido, em qualquer medida. Impressão digital de alta qualidade em Barueri com entrega rápida em Alphaville e região.",
  path,
  image: "/images/banner_impressao_digital_cabo_pendurar_barueri_alphaville.png",
});

export default function Page() {
  return (
    <ProductPage
      path={path}
      crumb="Banner Retangular"
      h1="Banner Retangular Personalizado"
      subtitle="Em lona ou tecido, com bastão e cordão"
      intro={[
        "O banner retangular é o banner clássico: uma peça impressa com acabamento em bastão (madeira ou PVC) e cordão para pendurar em paredes, vitrines, grades e fachadas. Simples, barato e muito eficiente para avisos, promoções e identificação.",
        "Fazemos banner retangular em Barueri na medida que você precisar, impresso em lona ou em tecido, com entrega rápida em Alphaville e cidades vizinhas.",
      ]}
      hero={{
        src: "/images/banner_impressao_digital_cabo_pendurar_barueri_alphaville.png",
        alt: "Banner retangular 60x90 cm com bastão e cordão impresso em Barueri",
      }}
      features={[
        { title: "Qualquer medida", text: "Dos tamanhos padrão às medidas sob encomenda para a sua parede ou vitrine." },
        { title: "Lona ou tecido", text: "Lona para uso externo e durabilidade, tecido para um acabamento mais elegante." },
        { title: "Pronto para pendurar", text: "Acabamento com bastão e cordão, ou com ilhós para amarrar em grades." },
        { title: "Preço acessível", text: "É uma das formas mais baratas de comunicar uma promoção ou identificar o seu negócio." },
      ]}
      optionsTitle="Opções de banner retangular"
      options={[
        "Tamanhos comuns: 60 x 90 cm, 80 x 120 cm, 90 x 120 cm e 100 x 150 cm",
        "Medidas personalizadas sob consulta",
        "Impressão em lona ou em tecido",
        "Acabamento com bastão e cordão, ou com ilhós",
        "Também fazemos wind banner no formato retangular (bandeira reta)",
      ]}
      usesTitle="Onde usar o banner retangular"
      uses={[
        "Vitrines e paredes de lojas",
        "Cardápios e promoções em restaurantes",
        "Igrejas, escolas e eventos",
        "Grades e fachadas (com ilhós)",
        "Feiras e pontos de venda",
      ]}
      gallery={[
        { src: "/images/banner_impressao_digital_cabo_pendurar_barueri_alphaville.png", alt: "Banner retangular com bastão e cordão", caption: "Banner 60 x 90 cm com bastão e cordão" },
        { src: "/images/bandeira_impressao.jpg", alt: "Banner retangular em tecido impresso por sublimação", caption: "Impressão retangular em tecido" },
        { src: "/images/roll_up_banner_em_barueri_alphaville_sao_paulo_entrega_rapida.png", alt: "Roll up banner retangular com estrutura", caption: "Banner retangular com estrutura (roll up)" },
      ]}
      faqs={[
        { q: "Qual o tamanho mais usado de banner retangular?", a: "Os mais pedidos são 60 x 90 cm e 80 x 120 cm. Mas fazemos na medida exata que você precisar." },
        { q: "É melhor banner de lona ou de tecido?", a: "A lona é mais resistente para uso externo e tem custo menor. O tecido tem acabamento mais sofisticado, não reflete luz e é mais leve, ideal para ambientes internos e eventos." },
        { q: "O banner já vem pronto para pendurar?", a: "Sim. Entregamos com bastão e cordão, ou com ilhós se for para amarrar em grades e estruturas." },
        { q: "Vocês fazem wind banner retangular?", a: "Sim. Além do banner de parede, fazemos wind banner com bandeira no formato reto (retangular), que dá mais área para texto e informações." },
      ]}
      whatsappMessage="Olá! Gostaria de um orçamento de banner retangular."
      ctaTitle="Faça seu banner retangular na medida certa"
      cityLabel="Banner retangular"
    />
  );
}
