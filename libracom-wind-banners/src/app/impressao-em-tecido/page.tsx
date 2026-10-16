import ProductPage from "../components/ProductPage";
import { pageMetadata } from "../lib/site";

const path = "/impressao-em-tecido";

export const metadata = pageMetadata({
  title: "Impressão em Tecido por Sublimação em Barueri | Libracom",
  description:
    "Impressão em tecido por sublimação em Barueri: bandeiras, wind banners, backdrops, faixas e painéis com cores vivas e alta durabilidade. Entrega rápida em Alphaville, Osasco e região.",
  path,
  image: "/images/imagens_2026_wind_banner_personalizado_barueri_osasco_sao_paulo_sp (2).jpeg",
});

export default function Page() {
  return (
    <ProductPage
      path={path}
      crumb="Impressão em Tecido"
      h1="Impressão em Tecido em Barueri"
      subtitle="Sublimação digital com cores vivas"
      intro={[
        "Fazemos impressão em tecido por sublimação: a tinta é transferida com calor e passa a fazer parte da fibra do tecido. Por isso a impressão não descasca, não racha, tem toque macio e mantém as cores vivas mesmo após lavagem.",
        "É a mesma tecnologia que usamos nos nossos wind banners e bandeiras. Atendemos empresas, agências, eventos e revendedores em Barueri, Alphaville, Osasco e região.",
      ]}
      hero={{
        src: "/images/imagens_2026_wind_banner_personalizado_barueri_osasco_sao_paulo_sp (2).jpeg",
        alt: "Impressão em tecido por sublimação em wind banners personalizados",
      }}
      features={[
        { title: "Durabilidade", text: "A tinta penetra na fibra: nada de estampa rachando ou descascando." },
        { title: "Cores vivas", text: "Sublimação digital em alta resolução, com cores fortes e degradês suaves." },
        { title: "Não reflete luz", text: "O tecido fosco é ótimo para fotos, vídeos e ambientes iluminados." },
        { title: "Leve e lavável", text: "Mais fácil de transportar que a lona e pode ser lavado." },
      ]}
      optionsTitle="O que imprimimos em tecido"
      options={[
        "Wind banners e bandeiras de vento",
        "Bandeiras de mastro, de mão e de atlética",
        "Backdrops e pop up banners",
        "Faixas e banners de tecido",
        "Painéis e testeiras para estandes",
      ]}
      usesTitle="Para quem é"
      uses={[
        "Empresas e lojas",
        "Agências de publicidade e de eventos",
        "Organizadores de feiras e congressos",
        "Atléticas, times e escolas",
        "Revendedores de comunicação visual",
      ]}
      gallery={[
        { src: "/images/imagens_2026_wind_banner_personalizado_barueri_osasco_sao_paulo_sp (2).jpeg", alt: "Wind banners impressos em tecido por sublimação", caption: "Wind banners em tecido" },
        { src: "/images/bandeira_impressao.jpg", alt: "Bandeira impressa em tecido por sublimação", caption: "Bandeira sublimada" },
        { src: "/images/backdrop_eventos_fundo_palco_banner.png", alt: "Backdrop impresso em tecido para evento", caption: "Backdrop em tecido" },
      ]}
      faqs={[
        { q: "O que é impressão em tecido por sublimação?", a: "É um processo em que a tinta vira gás com o calor e se fixa nas fibras do tecido de poliéster. A estampa passa a fazer parte do tecido, por isso não descasca nem racha." },
        { q: "Qual tecido pode ser sublimado?", a: "A sublimação funciona em tecidos de poliéster. Usamos tecidos próprios para cada aplicação: wind banner, bandeira, backdrop ou faixa." },
        { q: "Impressão em tecido ou em lona: qual escolher?", a: "A lona é mais barata e muito resistente para uso externo fixo. O tecido é mais leve, não reflete luz, pode ser lavado e tem visual mais sofisticado, ideal para eventos, bandeiras e wind banners." },
        { q: "Vocês fazem impressão em tecido para revenda?", a: "Sim. Atendemos agências e revendedores de comunicação visual. Fale com a gente pelo WhatsApp." },
      ]}
      whatsappMessage="Olá! Gostaria de um orçamento de impressão em tecido."
      ctaTitle="Precisa imprimir em tecido? Fale com a gente"
      cityLabel="Impressão em tecido"
    />
  );
}
