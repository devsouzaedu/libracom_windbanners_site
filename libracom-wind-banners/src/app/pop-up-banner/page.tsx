import ProductPage from "../components/ProductPage";
import { pageMetadata } from "../lib/site";

const path = "/pop-up-banner";

export const metadata = pageMetadata({
  title: "Pop Up Banner e Backdrop para Eventos em Barueri | Libracom",
  description:
    "Pop up banner personalizado para feiras, palcos e área de fotos. Backdrop em tecido com estrutura sanfonada que monta em minutos. Produção em Barueri, entrega em Alphaville e região.",
  path,
  image: "/images/backdrop_eventos_fundo_palco_banner.png",
});

export default function Page() {
  return (
    <ProductPage
      path={path}
      crumb="Pop Up Banner"
      h1="Pop Up Banner para Eventos"
      subtitle="Backdrop em tecido que monta em minutos"
      intro={[
        "O pop up banner é um painel grande com estrutura sanfonada que abre como um acordeão. A impressão em tecido é presa na estrutura e forma uma parede de comunicação perfeita para fundo de estande, palco, coletiva de imprensa ou área de fotos.",
        "Produzimos pop up banner e backdrop em Barueri, com entrega em Alphaville, Osasco, São Paulo e região. Leve, dobrável e transportado em bolsa ou case.",
      ]}
      hero={{
        src: "/images/backdrop_eventos_fundo_palco_banner.png",
        alt: "Pop up banner backdrop em tecido para fundo de palco e eventos",
      }}
      features={[
        { title: "Visual de impacto", text: "Uma parede inteira com a sua marca, sem emendas aparentes, ótima para fotos e vídeos." },
        { title: "Montagem rápida", text: "A estrutura sanfonada abre em minutos e a impressão em tecido encaixa com velcro." },
        { title: "Fácil de transportar", text: "Dobra em um volume pequeno e vai no porta-malas para o próximo evento." },
        { title: "Tecido lavável", text: "Impressão por sublimação em tecido, que não amassa fácil, não reflete luz e pode ser lavada." },
      ]}
      optionsTitle="Opções de pop up banner"
      options={[
        "Formato reto ou curvo",
        "Tamanhos por módulos, por exemplo 2x2, 3x3 ou 4x3 (largura x altura em módulos)",
        "Impressão em tecido por sublimação",
        "Bolsa ou case de transporte",
        "Troca só da impressão para reaproveitar a estrutura",
      ]}
      usesTitle="Onde usar o pop up"
      uses={[
        "Fundo de estande em feiras",
        "Backdrop de palco e fundo para palestrantes",
        "Área de fotos em festas, formaturas e eventos",
        "Coletivas de imprensa e entrevistas",
        "Lançamentos de produto e ativações de marca",
      ]}
      gallery={[
        { src: "/images/backdrop_eventos_fundo_palco_banner.png", alt: "Backdrop pop up para fundo de palco em evento", caption: "Backdrop para palco" },
        { src: "/images/roll_up_banner_em_barueri_alphaville_sao_paulo_entrega_rapida.png", alt: "Roll up banner para evento corporativo", caption: "Roll up para complementar o estande" },
        { src: "/images/totem_backlight_eventos_totem_iluminado_barueri_alphaville.jpg", alt: "Totem iluminado para eventos", caption: "Totem para eventos" },
      ]}
      faqs={[
        { q: "O que é pop up banner?", a: "É um painel com estrutura sanfonada (que abre como acordeão) coberto por uma impressão em tecido. É muito usado como backdrop de eventos, fundo de estande e área de fotos." },
        { q: "Pop up banner e backdrop são a mesma coisa?", a: "O pop up é um tipo de backdrop. Backdrop é qualquer painel de fundo; o pop up é a versão com estrutura dobrável, que monta rápido e é fácil de transportar." },
        { q: "Quanto tempo leva para montar?", a: "Poucos minutos. Abre-se a estrutura, travam-se as hastes e prende-se a impressão em tecido." },
        { q: "Vocês entregam pop up banner em São Paulo?", a: "Sim. Produzimos em Barueri e entregamos em Alphaville, Osasco, São Paulo e região. Também enviamos para outras cidades." },
      ]}
      whatsappMessage="Olá! Gostaria de um orçamento de pop up banner / backdrop."
      ctaTitle="Vai ter evento? Monte seu pop up banner"
      cityLabel="Pop up banner"
    />
  );
}
