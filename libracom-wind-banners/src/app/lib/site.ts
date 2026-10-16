import type { Metadata } from "next";

export const SITE_URL = "https://www.libracomwindbanner.com.br";
export const SITE_NAME = "Libracom Wind Banners";
export const PHONE_DISPLAY = "(11) 95499-7799";
export const PHONE_E164 = "+5511954997799";
export const EMAIL = "contato.libracom@gmail.com";

/** Preços do wind banner (mesmos da home). */
export const PRICES = [
  { size: "2 m", kit: "R$ 350,00", flag: "R$ 220,00" },
  { size: "2,60 m", kit: "R$ 410,00", flag: "R$ 280,00" },
  { size: "3 m", kit: "R$ 480,00", flag: "R$ 320,00" },
];

export function whatsappUrl(message?: string) {
  const base = "https://wa.me/5511954997799";
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Metadata padrão de página: canonical próprio + Open Graph apontando para a URL da página. */
export function pageMetadata({
  title,
  description,
  path,
  image = "/images/wind_banner_sitebg.webp",
  imageAlt,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
      images: [{ url: image, alt: imageAlt ?? title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export type Product = {
  slug: string;
  name: string;
  short: string;
  image: string;
  imageAlt: string;
};

/** Produtos com página própria (usado no menu, rodapé, home e sitemap). */
export const products: Product[] = [
  {
    slug: "/",
    name: "Wind Banner",
    short: "Kit completo com haste e base. Modelos gota, faca, pena, vela e reto.",
    image: "/images/imagens_2026_wind_banner_personalizado_barueri_osasco_sao_paulo_sp (1).jpg",
    imageAlt: "Wind banner personalizado com mastro e base",
  },
  {
    slug: "/somente-bandeira-wind-banner",
    name: "Wind Banner Somente Bandeira",
    short: "Refil / reposição só do tecido para o mastro que você já tem.",
    image: "/images/wind_banner_somente_bandeira_refil.png",
    imageAlt: "Wind banner somente bandeira, refil em tecido sem mastro",
  },
  {
    slug: "/roll-up-banner",
    name: "Roll Up Banner",
    short: "Banner retrátil com estrutura de alumínio e bolsa. Entrega rápida.",
    image: "/images/roll_up_banner_em_barueri_alphaville_sao_paulo_entrega_rapida.png",
    imageAlt: "Roll up banner com estrutura retrátil para eventos",
  },
  {
    slug: "/pop-up-banner",
    name: "Pop Up Banner",
    short: "Backdrop pop up de tecido para feiras, palcos e fotos de evento.",
    image: "/images/backdrop_eventos_fundo_palco_banner.png",
    imageAlt: "Pop up banner backdrop de tecido para eventos",
  },
  {
    slug: "/banner-retangular",
    name: "Banner Retangular",
    short: "Banner em lona ou tecido com bastão e cordão, em qualquer medida.",
    image: "/images/banner_impressao_digital_cabo_pendurar_barueri_alphaville.png",
    imageAlt: "Banner retangular impresso com bastão e cordão",
  },
  {
    slug: "/bandeira-de-tecido",
    name: "Bandeira de Tecido",
    short: "Bandeiras personalizadas para empresas, atléticas, times e eventos.",
    image: "/images/bandeira_impressao.jpg",
    imageAlt: "Bandeira de tecido personalizada impressa por sublimação",
  },
  {
    slug: "/impressao-em-tecido",
    name: "Impressão em Tecido",
    short: "Sublimação digital em tecido: bandeiras, faixas, backdrops e mais.",
    image: "/images/imagens_2026_wind_banner_personalizado_barueri_osasco_sao_paulo_sp (2).jpeg",
    imageAlt: "Impressão em tecido por sublimação com cores vivas",
  },
];

export type City = {
  slug: string;
  name: string;
  /** Preposição correta: "em Itapevi", "no Alphaville" etc. */
  prep: string;
  intro: string;
  neighborhoods: string[];
  uses: string[];
  delivery: string;
};

/**
 * Cidades atendidas com página própria em /wind-banner/[slug].
 * Barueri tem página dedicada em /wind-banner-barueri.
 * Cada cidade precisa de texto próprio: páginas quase idênticas são tratadas pelo Google como "doorway pages".
 */
export const cities: City[] = [
  {
    slug: "alphaville",
    name: "Alphaville",
    prep: "em Alphaville",
    intro:
      "Alphaville concentra escritórios, lojas, clínicas, restaurantes e eventos corporativos. É onde o wind banner mais trabalha: na calçada de um showroom, na entrada de um condomínio empresarial ou no estande de um evento.",
    neighborhoods: ["Alphaville Empresarial", "Alphaville Centro Comercial", "Tamboré", "Calçada das Flores e Calçada dos Pássaros"],
    uses: ["Lançamentos imobiliários e stands de vendas", "Clínicas, academias e restaurantes", "Eventos corporativos e convenções", "Concessionárias e lojas de rua"],
    delivery: "Estamos ao lado: Alphaville tem entrega em até 24h para pedidos aprovados até as 12h.",
  },
  {
    slug: "itapevi",
    name: "Itapevi",
    prep: "em Itapevi",
    intro:
      "Itapevi tem um comércio de rua forte e muitas empresas instaladas ao longo da Rodovia Castello Branco e da Estrada de Itapevi. O wind banner é a forma mais barata de fazer a sua loja ser vista por quem passa de carro ou a pé.",
    neighborhoods: ["Centro", "Amador Bueno", "Jardim Santa Rita", "Cohab"],
    uses: ["Lojas e comércio de rua", "Lava-rápidos, oficinas e estacionamentos", "Igrejas e eventos comunitários", "Indústrias e centros de distribuição"],
    delivery: "Itapevi é vizinha de Barueri e fica dentro da nossa área de entrega expressa em 24h.",
  },
  {
    slug: "jandira",
    name: "Jandira",
    prep: "em Jandira",
    intro:
      "Jandira fica colada em Barueri, o que significa entrega rápida e atendimento próximo. Atendemos comércios, escolas, igrejas e empresas que precisam chamar atenção na rua ou em eventos.",
    neighborhoods: ["Centro", "Jardim Alvorada"],
    uses: ["Comércio do centro e avenidas principais", "Escolas e cursos com matrículas abertas", "Festas, quermesses e eventos de igreja", "Pet shops, mercados e farmácias"],
    delivery: "Jandira está dentro da nossa área de entrega expressa em 24h.",
  },
  {
    slug: "carapicuiba",
    name: "Carapicuíba",
    prep: "em Carapicuíba",
    intro:
      "Carapicuíba tem um dos comércios de bairro mais movimentados da região oeste. Wind banners na calçada aumentam a visibilidade de lojas, restaurantes e prestadores de serviço sem precisar de reforma na fachada.",
    neighborhoods: ["Centro", "Vila Dirce", "Cohab", "Jardim Ana Estela", "Aldeia de Carapicuíba", "Vila Silviânia"],
    uses: ["Restaurantes, lanchonetes e açaíterias", "Lojas de roupas e calçados", "Assistências técnicas e serviços", "Feiras e eventos culturais"],
    delivery: "Carapicuíba está dentro da nossa área de entrega expressa em 24h.",
  },
  {
    slug: "osasco",
    name: "Osasco",
    prep: "em Osasco",
    intro:
      "Osasco é um dos maiores polos comerciais da Grande São Paulo, com o calçadão da Rua Antônio Agú, grandes avenidas e muitos escritórios. Em um lugar com tanta concorrência visual, um wind banner em movimento é o que faz o cliente olhar para a sua porta.",
    neighborhoods: ["Centro", "Vila Yara", "Presidente Altino", "Km 18", "Jardim das Flores", "Bela Vista"],
    uses: ["Lojas do calçadão e do centro", "Concessionárias e revendas de veículos", "Escritórios e empresas de serviço", "Inaugurações e promoções"],
    delivery: "Osasco está dentro da nossa área de entrega expressa em 24h.",
  },
  {
    slug: "santana-de-parnaiba",
    name: "Santana de Parnaíba",
    prep: "em Santana de Parnaíba",
    intro:
      "De Alphaville ao centro histórico, Santana de Parnaíba reúne empresas, condomínios, restaurantes e eventos turísticos. Fazemos wind banners para quem quer ser visto tanto no comércio quanto nos eventos da cidade.",
    neighborhoods: ["Centro Histórico", "Alphaville (lado Santana)", "Tamboré", "Fazendinha", "Cidade São Pedro", "Colinas da Anhanguera"],
    uses: ["Restaurantes e comércio do centro histórico", "Eventos culturais e turísticos", "Empresas e escritórios", "Imobiliárias e lançamentos"],
    delivery: "Santana de Parnaíba está dentro da nossa área de entrega expressa em 24h.",
  },
  {
    slug: "cotia",
    name: "Cotia",
    prep: "em Cotia",
    intro:
      "Na Granja Viana e ao longo da Rodovia Raposo Tavares, Cotia tem restaurantes, feiras, escolas e muito comércio de beira de estrada. Wind banners são ideais para ser visto de longe por quem está passando de carro.",
    neighborhoods: ["Granja Viana", "Centro", "Caucaia do Alto"],
    uses: ["Restaurantes e empórios na Raposo Tavares", "Feiras e eventos na Granja Viana", "Escolas e academias", "Garden centers e comércio de estrada"],
    delivery: "Entregamos em Cotia com agilidade. Consulte o prazo para o seu endereço pelo WhatsApp.",
  },
  {
    slug: "sao-paulo",
    name: "São Paulo",
    prep: "em São Paulo",
    intro:
      "Atendemos empresas da capital, principalmente da Zona Oeste, que precisam de wind banners com rapidez para feiras, eventos, lojas e ações promocionais. Produzimos em Barueri e entregamos em São Paulo.",
    neighborhoods: ["Lapa", "Pinheiros", "Butantã", "Vila Leopoldina", "Jaguaré", "Perdizes"],
    uses: ["Feiras e eventos em centros de convenções", "Lojas, restaurantes e franquias", "Ações promocionais e de rua", "Agências de marketing e eventos"],
    delivery: "A Zona Oeste de São Paulo está na nossa área de entrega expressa em 24h. Para outras regiões da capital, consulte o prazo.",
  },
  {
    slug: "cajamar",
    name: "Cajamar",
    prep: "em Cajamar",
    intro:
      "Cajamar é um dos maiores polos logísticos do estado, ao longo da Rodovia Anhanguera, e também tem comércio forte em Jordanésia e Polvilho. Fazemos wind banners para sinalização de portaria, eventos internos e lojas.",
    neighborhoods: ["Jordanésia", "Polvilho", "Centro"],
    uses: ["Centros de distribuição e sinalização de portaria", "Eventos internos e SIPAT", "Comércio de Jordanésia e Polvilho", "Recrutamento e vagas abertas"],
    delivery: "Entregamos em Cajamar. Consulte o prazo para o seu endereço pelo WhatsApp.",
  },
  {
    slug: "pirapora-do-bom-jesus",
    name: "Pirapora do Bom Jesus",
    prep: "em Pirapora do Bom Jesus",
    intro:
      "Pirapora do Bom Jesus recebe romarias, festas religiosas e muitos visitantes durante o ano. Wind banners ajudam restaurantes, pousadas e comerciantes a se destacar quando a cidade está cheia.",
    neighborhoods: ["Centro", "Região do Santuário"],
    uses: ["Restaurantes e lanchonetes", "Pousadas e comércio turístico", "Festas religiosas e romarias", "Eventos da cidade"],
    delivery: "Entregamos em Pirapora do Bom Jesus. Consulte o prazo para o seu endereço pelo WhatsApp.",
  },
];
