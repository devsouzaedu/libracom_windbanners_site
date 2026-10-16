import HomeContent from "./components/HomeContent";
import JsonLd, { faqLd } from "./components/JsonLd";
import { homeFaqs } from "./lib/homeFaqs";
import { pageMetadata } from "./lib/site";

export const metadata = pageMetadata({
  title: "Wind Banner Personalizado em Barueri | Libracom - Gota, Faca, Pena, Vela e Reto",
  description:
    "Fábrica de wind banner personalizado em Barueri e Alphaville nos modelos gota, faca, pena, vela e reto. Kit com haste e base a partir de R$ 350, arte grátis e entrega em 24h em Barueri e região.",
  path: "/",
  image: "/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (1).png",
  imageAlt: "Wind banner personalizado em Barueri e Alphaville - Libracom",
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(homeFaqs.map((f) => ({ q: f.question, a: f.answer })))} />
      <HomeContent />
    </>
  );
}
