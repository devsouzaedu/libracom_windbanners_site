export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Libracom Wind Banners",
    "description": "Especialistas em Wind Banner personalizado em Barueri e Alphaville. Bandeira de vento para eventos, feiras e ações promocionais.",
    "url": "https://libracomwindbanner.com.br",
    "logo": "https://libracomwindbanner.com.br/images/LIBRACOM_png.png",
    "image": [
      "https://libracomwindbanner.com.br/images/wind_banner_sitebg.webp",
      "https://libracomwindbanner.com.br/images/wind_banner_mpd.jpeg",
      "https://libracomwindbanner.com.br/images/backdrop_eventos_fundo_palco_banner.png",
      "https://libracomwindbanner.com.br/images/totem_backlight_eventos_totem_iluminado_barueri_alphaville.jpg"
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
      "Wind Banner",
      "Bandeira de Vento",
      "Banner Personalizado",
      "Material Promocional"
    ],
    "priceRange": "R$ 350 - R$ 420",
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [
      "https://wa.me/5511954997799"
    ]
  };

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wind Banner Personalizado",
    "description": "Wind Banner de alta qualidade para eventos, feiras e ações promocionais em Barueri e Alphaville",
    "image": [
      "https://libracomwindbanner.com.br/images/wind_banner_sitebg.webp",
      "https://libracomwindbanner.com.br/images/wind_banner_mpd.jpeg",
      "https://libracomwindbanner.com.br/images/backdrop_eventos_fundo_palco_banner.png"
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