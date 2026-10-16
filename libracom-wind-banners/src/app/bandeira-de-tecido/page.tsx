import ProductPage from "../components/ProductPage";
import { pageMetadata } from "../lib/site";

const path = "/bandeira-de-tecido";

export const metadata = pageMetadata({
  title: "Bandeira de Tecido Personalizada | Libracom Barueri e Alphaville",
  description:
    "Bandeira de tecido personalizada para empresas, atléticas, times, formaturas, igrejas e eventos. Impressão por sublimação com cores vivas, em qualquer tamanho. Barueri, Alphaville e envio para todo o Brasil.",
  path,
  image: "/images/bandeira_impressao.jpg",
});

export default function Page() {
  return (
    <ProductPage
      path={path}
      crumb="Bandeira de Tecido"
      h1="Bandeira de Tecido Personalizada"
      subtitle="Para empresas, atléticas, times e eventos"
      intro={[
        "Fazemos bandeira de tecido personalizada com a sua arte, em qualquer tamanho: bandeiras de mastro para empresas, bandeiras de atlética e torcida, bandeiras de mão para eventos e bandeiras institucionais.",
        "A impressão é feita por sublimação, que tinge o próprio tecido. O resultado são cores vivas, toque macio e uma bandeira que não descasca nem racha. Produzimos em Barueri e enviamos para todo o Brasil.",
      ]}
      hero={{
        src: "/images/bandeira_impressao.jpg",
        alt: "Bandeira de tecido personalizada de atlética universitária impressa por sublimação",
      }}
      features={[
        { title: "Qualquer tamanho", text: "De bandeiras de mão a bandeirões de torcida, na medida que você precisar." },
        { title: "Cores que não descascam", text: "A sublimação tinge o tecido, então a estampa não racha nem sai com o uso." },
        { title: "Acabamento sob medida", text: "Bainha, ilhós, cordão ou luva para mastro, conforme o uso." },
        { title: "Envio para todo o Brasil", text: "Produzimos em Barueri e enviamos para qualquer cidade." },
      ]}
      optionsTitle="Tipos de bandeira de tecido"
      options={[
        "Bandeira de mastro para empresas e condomínios",
        "Bandeira de atlética, torcida e time",
        "Bandeira de mão para eventos e campanhas",
        "Bandeira institucional e de igreja",
        "Acabamentos: bainha, ilhós, cordão ou luva para mastro",
      ]}
      usesTitle="Quem usa bandeira de tecido"
      uses={[
        "Atléticas universitárias e formaturas",
        "Times, torcidas e escolinhas de esporte",
        "Empresas, lojas e condomínios",
        "Igrejas e movimentos religiosos",
        "Eventos, festas e campanhas",
      ]}
      gallery={[
        { src: "/images/bandeira_impressao.jpg", alt: "Bandeira de atlética de medicina em tecido personalizado", caption: "Bandeira de atlética universitária" },
        { src: "/images/wind_banner_somente_bandeira_refil.png", alt: "Bandeira de tecido para wind banner", caption: "Bandeira em tecido para wind banner" },
        { src: "/images/imagens_2026_wind_banner_personalizado_barueri_osasco_sao_paulo_sp (1).jpeg", alt: "Bandeiras de vento em tecido personalizadas em Barueri", caption: "Bandeiras de vento personalizadas" },
      ]}
      faqs={[
        { q: "Qual tecido é usado na bandeira?", a: "Usamos tecido de poliéster próprio para sublimação, leve e resistente, que mantém as cores vivas. O tipo exato varia conforme o uso (interno, externo, mastro ou mão)." },
        { q: "Fazem bandeira de atlética e de torcida?", a: "Sim. Fazemos bandeiras de atléticas, torcidas e times em qualquer tamanho, inclusive bandeirões." },
        { q: "A bandeira pode ser lavada?", a: "Sim. Como a tinta faz parte do tecido, a bandeira pode ser lavada com cuidado, sem perder a estampa." },
        { q: "Vocês enviam bandeira para outras cidades?", a: "Sim. Entregamos em Barueri, Alphaville e região, e enviamos para todo o Brasil." },
      ]}
      whatsappMessage="Olá! Gostaria de um orçamento de bandeira de tecido personalizada."
      ctaTitle="Faça a bandeira da sua empresa, time ou atlética"
      cityLabel="Bandeira de tecido"
    />
  );
}
