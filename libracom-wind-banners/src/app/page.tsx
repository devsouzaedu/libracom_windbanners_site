import HomeContent from "./components/HomeContent";
import JsonLd, { faqLd } from "./components/JsonLd";
import { homeFaqs } from "./lib/homeFaqs";
import { pageMetadata } from "./lib/site";

export const metadata = pageMetadata({
  title: "Wind Banners, Roll Up Banners e Bandeiras em Barueri | Libracom",
  description:
    "Fábrica de Wind Banners (Gota, Faca, Vela, Reto), Roll Up Banners (80x220, 100x220, 120x220), refil somente tecido e bandeiras de mão retangulares em Barueri e Alphaville. Arte grátis e entrega expressa.",
  path: "/",
  image: "/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (1).png",
  imageAlt: "Wind banner, roll up banner e bandeiras personalizadas - Libracom",
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(homeFaqs.map((f) => ({ q: f.question, a: f.answer })))} />
      <HomeContent />
    </>
  );
}
