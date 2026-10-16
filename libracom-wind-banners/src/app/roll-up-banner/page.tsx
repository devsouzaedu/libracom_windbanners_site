import ProductPage from "../components/ProductPage";
import { pageMetadata } from "../lib/site";

const path = "/roll-up-banner";

export const metadata = pageMetadata({
  title: "Roll Up Banner em Barueri com Entrega Rápida | Libracom",
  description:
    "Roll up banner personalizado em Barueri, Alphaville e região, com entrega rápida. Banner retrátil com estrutura de alumínio e bolsa para eventos, feiras e recepções. Orçamento no WhatsApp.",
  path,
  image: "/images/roll_up_banner_em_barueri_alphaville_sao_paulo_entrega_rapida.png",
});

export default function Page() {
  return (
    <ProductPage
      path={path}
      crumb="Roll Up Banner"
      h1="Roll Up Banner em Barueri"
      subtitle="Personalizado, com estrutura e entrega rápida"
      intro={[
        "O roll up banner é um banner retrátil: a impressão fica enrolada dentro de uma base de alumínio e sobe em segundos, presa por uma haste. Monta sem ferramentas, cabe em uma bolsa e é o banner mais prático para eventos, feiras, recepções e pontos de venda.",
        "A Libracom produz roll up banner em Barueri com entrega rápida para Alphaville, Osasco, Santana de Parnaíba e toda a região. Precisa para amanhã? Fale com a gente.",
      ]}
      hero={{
        src: "/images/roll_up_banner_em_barueri_alphaville_sao_paulo_entrega_rapida.png",
        alt: "Roll up banner personalizado com estrutura retrátil de alumínio em Barueri",
      }}
      features={[
        { title: "Entrega rápida", text: "Produção em Barueri e entrega ágil em Alphaville e cidades vizinhas, ideal para eventos de última hora." },
        { title: "Kit completo", text: "Impressão, estrutura retrátil de alumínio e bolsa de transporte. É só abrir e usar." },
        { title: "Monta em 1 minuto", text: "Sem ferramentas: puxe a lona, encaixe a haste e pronto. Uma pessoa monta sozinha." },
        { title: "Impressão nítida", text: "Impressão digital em alta resolução, com cores fortes e texto legível de longe." },
      ]}
      optionsTitle="Opções de roll up banner"
      options={[
        "Tamanhos mais pedidos: 80 x 200 cm, 85 x 200 cm e 100 x 200 cm",
        "Estrutura retrátil de alumínio com pés de apoio",
        "Bolsa de transporte inclusa",
        "Reposição só da lona para quem já tem a estrutura",
        "Outros tamanhos sob consulta",
      ]}
      usesTitle="Onde usar o roll up"
      uses={[
        "Feiras, congressos e estandes",
        "Recepção de empresas, clínicas e escritórios",
        "Palestras, treinamentos e convenções",
        "Lojas, vitrines e pontos de venda",
        "Fotos de eventos e confraternizações",
      ]}
      gallery={[
        { src: "/images/roll_up_banner_em_barueri_alphaville_sao_paulo_entrega_rapida.png", alt: "Roll up banner para confraternização de empresa em Alphaville", caption: "Roll up para evento corporativo" },
        { src: "/images/backdrop_eventos_fundo_palco_banner.png", alt: "Backdrop e banners para evento em Barueri", caption: "Comunicação visual para eventos" },
        { src: "/images/totem_backlight_eventos_totem_iluminado_barueri_alphaville.jpg", alt: "Totem para evento em Barueri e Alphaville", caption: "Totens e displays" },
      ]}
      faqs={[
        { q: "Qual o prazo de entrega do roll up banner?", a: "Produzimos em Barueri e entregamos rapidamente em Barueri, Alphaville e cidades vizinhas. Com a arte aprovada, informamos o prazo exato no orçamento. Para urgências, consulte a entrega em 24h." },
        { q: "O roll up banner vem com estrutura?", a: "Sim. O roll up vem com a impressão já instalada na estrutura retrátil de alumínio, haste e bolsa para transporte." },
        { q: "Qual o tamanho mais comum de roll up?", a: "O mais pedido é o 80 x 200 cm. Para mais impacto, o 100 x 200 cm. Fazemos outros tamanhos sob consulta." },
        { q: "Vocês trocam só a lona do roll up?", a: "Sim. Se você já tem a estrutura, fazemos apenas a impressão nova para reposição." },
        { q: "Qual a diferença entre roll up e pop up banner?", a: "O roll up é um banner único retrátil, ideal para recepções e estandes. O pop up é uma estrutura maior, tipo painel ou backdrop, usada como fundo de estande, palco ou área de fotos." },
      ]}
      whatsappMessage="Olá! Gostaria de um orçamento de roll up banner."
      ctaTitle="Precisa de roll up banner com entrega rápida?"
      cityLabel="Roll up banner"
    />
  );
}
