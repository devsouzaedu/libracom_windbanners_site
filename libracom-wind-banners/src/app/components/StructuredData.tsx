export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Libracom Wind Banners",
    "description": "Especialistas em Wind Banner Retangular e Quadrado (Modelo Reto) personalizado em Barueri e Alphaville. Bandeiras com 20% de transparência, hastes e bases.",
    "url": "https://libracomwindbanner.com.br",
    "logo": "https://libracomwindbanner.com.br/images/libracom_logo_preto_navbar.png",
    "image": [
      "https://libracomwindbanner.com.br/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (1).png",
      "https://libracomwindbanner.com.br/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (2).jpg"
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
    "areaServed": [
      {
        "@type": "City",
        "name": "Barueri"
      },
      {
        "@type": "City", 
        "name": "Alphaville"
      },
      {
        "@type": "City",
        "name": "São Paulo"
      }
    ],
    "serviceType": [
      "Wind Banner Retangular",
      "Wind Banner Quadrado",
      "Wind Banner Reto",
      "Bandeira de Vento"
    ],
    "priceRange": "R$ 220 - R$ 480",
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [
      "https://wa.me/5511954997799"
    ]
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wind Banner Retangular e Quadrado (Modelo Reto)",
    "description": "Wind Banner Modelo Reto (Retangular / Quadrado) personalizado de alta qualidade, completo com base e haste ou somente bandeira avulsa.",
    "image": [
      "https://libracomwindbanner.com.br/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (1).png",
      "https://libracomwindbanner.com.br/images/wind_banner_reto_retangular_quadrado_24hrs_sao_paulo_barueri (2).jpg"
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
      "seller": {
        "@type": "Organization",
        "name": "Libracom Wind Banners"
      }
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