import { cities, products, SITE_URL } from "../lib/site";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    "name": "Libracom Wind Banners",
    "description": "Fábrica de Wind Banner personalizado nos modelos Gota, Faca, Pena, Vela e Reto (Retangular / Quadrado) em Barueri e Alphaville. Bandeiras, hastes e bases.",
    "url": "https://www.libracomwindbanner.com.br",
    "logo": "https://www.libracomwindbanner.com.br/images/libracom_logo_preto_navbar.png",
    "image": [
      "https://www.libracomwindbanner.com.br/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (1).png",
      "https://www.libracomwindbanner.com.br/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (2).jpg"
    ],
    "telephone": "+55 11 95499-7799",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barueri",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5107,
      "longitude": -46.8761
    },
    "areaServed": ["Barueri", ...cities.map((c) => c.name)].map((name) => ({ "@type": "City", name })),
    "serviceType": [
      "Wind Banner Gota",
      "Wind Banner Faca",
      "Wind Banner Pena",
      "Wind Banner Vela",
      "Wind Banner Retangular",
      "Wind Banner Quadrado",
      "Wind Banner Reto",
      "Bandeira de Vento"
    ],
    "priceRange": "R$ 220 - R$ 480",
    "openingHours": "Mo-Fr 08:00-18:00",
    "email": "contato.libracom@gmail.com",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Comunicação visual",
      "itemListElement": products.map((p) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": p.name, "url": `${SITE_URL}${p.slug === "/" ? "" : p.slug}` },
      })),
    }
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wind Banner Personalizado (Gota, Faca, Pena, Vela e Reto)",
    "description": "Wind Banner personalizado nos modelos Gota, Faca, Pena, Vela e Reto (Retangular / Quadrado), de alta qualidade, completo com base e haste ou somente bandeira avulsa.",
    "image": [
      "https://www.libracomwindbanner.com.br/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (1).png",
      "https://www.libracomwindbanner.com.br/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (2).jpg"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Libracom"
    },
    "offers": {
      "@type": "Offer",
      "price": "350",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "seller": { "@id": `${SITE_URL}/#business` }
    },
    "category": "Marketing Materials"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productData),
        }}
      />
    </>
  );
} 