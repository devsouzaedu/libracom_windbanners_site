import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import SiteFooter from "../../components/SiteFooter";
import JsonLd, { breadcrumbLd, faqLd, serviceLd } from "../../components/JsonLd";
import { cities, pageMetadata, PRICES, products, whatsappUrl } from "../../lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ cidade: c.slug }));
}

export function generateMetadata({ params }: { params: { cidade: string } }) {
  const city = cities.find((c) => c.slug === params.cidade);
  if (!city) return {};
  return pageMetadata({
    title: `Wind Banner ${city.prep} – Personalizado com Entrega Rápida | Libracom`,
    description: `Wind banner personalizado ${city.prep} a partir de R$ 350 com haste e base. Bandeira de vento para lojas, eventos e empresas, produzida em Barueri com entrega rápida. Orçamento no WhatsApp.`,
    path: `/wind-banner/${city.slug}`,
    image: "/images/imagens_2026_wind_banner_personalizado_barueri_osasco_sao_paulo_sp (1).jpg",
  });
}

const photos = [
  { src: "/images/imagens_2026_wind_banner_personalizado_barueri_osasco_sao_paulo_sp (1).jpg", alt: "wind banner pena com base" },
  { src: "/images/wind_banner_estacione_aqui_estacionamento.jpg", alt: "wind banner para estacionamento" },
  { src: "/images/wind_banner_fachada_loja_comercio.jpg", alt: "wind banner na calçada de loja" },
  { src: "/images/imagens_2026_wind_banner_personalizado_barueri_osasco_sao_paulo_sp (2).jpg", alt: "wind banner para restaurante" },
  { src: "/images/imagens_2026_wind_banner_personalizado_barueri_osasco_sao_paulo_sp (3).jpg", alt: "kit de wind banners para empresa" },
  { src: "/images/imagens_2026_wind_banner_personalizado_barueri_osasco_sao_paulo_sp (1).jpeg", alt: "par de wind banners personalizados" },
  { src: "/images/imagens_2026_wind_banner_personalizado_barueri_osasco_sao_paulo_sp (2).jpeg", alt: "wind banners formato pena" },
  { src: "/images/wind_banner_cafeteria_entrega_24h_barueri.jpg", alt: "wind banners para cafeteria" },
];

export default function CityPage({ params }: { params: { cidade: string } }) {
  const index = cities.findIndex((c) => c.slug === params.cidade);
  if (index === -1) notFound();
  const city = cities[index];
  const path = `/wind-banner/${city.slug}`;
  const wa = whatsappUrl(`Olá! Quero um orçamento de wind banner ${city.prep}.`);
  // Fotos diferentes por cidade para as páginas não ficarem idênticas
  const gallery = [0, 1, 2].map((i) => photos[(index * 3 + i) % photos.length]);
  const others = cities.filter((c) => c.slug !== city.slug);

  const faqs = [
    { q: `Quanto custa um wind banner ${city.prep}?`, a: `O wind banner completo (bandeira, mastro e base) custa R$ 350 no tamanho 2 m, R$ 410 no 2,60 m e R$ 480 no 3 m. Somente a bandeira (refil) sai por R$ 220, R$ 280 e R$ 320. Para quantidades maiores, temos desconto progressivo.` },
    { q: `Vocês entregam wind banner ${city.prep}?`, a: city.delivery },
    { q: "O wind banner vem com base?", a: "Sim. O kit completo vem com bandeira personalizada, haste e base. Se você já tem haste e base, também vendemos somente a bandeira." },
    { q: "Posso usar o wind banner na calçada?", a: "O wind banner é muito usado em frente a lojas. Verifique as regras de publicidade da prefeitura para o seu endereço e posicione a base sem bloquear a passagem de pedestres." },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Header />
      <WhatsAppFloat />
      <JsonLd data={breadcrumbLd([{ name: "Wind Banner", path: "/" }, { name: `Wind Banner ${city.prep}`, path }])} />
      <JsonLd data={faqLd(faqs)} />
      <JsonLd data={serviceLd({ name: `Wind Banner ${city.prep}`, description: city.intro, path, areaServed: [city.name] })} />

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <nav aria-label="Você está em" className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Início</Link>
            <span className="mx-2">/</span>
            <Link href="/#cidades" className="hover:text-white">Cidades</Link>
            <span className="mx-2">/</span>
            <span>{city.name}</span>
          </nav>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Wind Banner {city.prep}</h1>
              <p className="text-2xl font-semibold mb-6 text-blue-200">Personalizado, com haste, base e entrega rápida</p>
              <p className="text-lg mb-4">{city.intro}</p>
              <p className="text-lg mb-6">
                A Libracom produz <strong>wind banner personalizado</strong> em Barueri e atende {city.name} com
                impressão por sublimação e kit completo pronto para usar.
              </p>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                <Image src="/images/WhatsApp_icon.png" alt="" width={24} height={24} className="mr-2" />
                Orçamento para {city.name}
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white aspect-[4/5] max-h-[520px] mx-auto">
                <Image
                  src={gallery[0].src}
                  alt={`Wind banner personalizado ${city.prep} - ${gallery[0].alt}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Preços de Wind Banner {city.prep}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PRICES.map((p) => (
              <div key={p.size} className="bg-gray-50 rounded-xl p-6 text-center shadow">
                <p className="text-4xl font-bold text-blue-600">{p.size}</p>
                <p className="text-gray-600 mt-2">Bandeira + haste + base</p>
                <p className="text-3xl font-bold text-blue-900 mt-4">{p.kit}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            Já tem mastro? Veja o <Link href="/somente-bandeira-wind-banner" className="text-blue-600 underline">wind banner somente bandeira</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Entrega {city.prep}</h2>
            <p className="text-gray-700">{city.delivery}</p>
            <p className="text-gray-700 mt-4">
              Precisa com urgência? Veja como funciona a <Link href="/entrega-rapida-24h" className="text-blue-600 underline">entrega em 24h</Link>.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Bairros atendidos</h2>
            <ul className="space-y-2 text-gray-700">
              {city.neighborhoods.map((n) => (
                <li key={n}>✓ {n}</li>
              ))}
              <li>✓ e todos os demais bairros de {city.name}</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Quem mais usa {city.prep}</h2>
            <ul className="space-y-2 text-gray-700">
              {city.uses.map((u) => (
                <li key={u}>✓ {u}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Modelos de Wind Banner</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {gallery.map((g) => (
              <div key={g.src} className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image src={g.src} alt={`Exemplo de ${g.alt} - Libracom`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Dúvidas sobre Wind Banner {city.prep}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2 text-blue-600">{f.q}</h3>
                <p className="text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Outros produtos {city.prep}</h2>
            <ul className="space-y-2">
              {products.filter((p) => p.slug !== "/").map((p) => (
                <li key={p.slug}>
                  <Link href={p.slug} className="text-blue-600 hover:underline">{p.name} {city.prep}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Wind banner em outras cidades</h2>
            <ul className="flex flex-wrap gap-3">
              <li>
                <Link href="/wind-banner-barueri" className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-800 hover:bg-blue-100">Barueri</Link>
              </li>
              {others.map((c) => (
                <li key={c.slug}>
                  <Link href={`/wind-banner/${c.slug}`} className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-800 hover:bg-blue-100">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Destaque o seu negócio {city.prep}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Peça o seu wind banner personalizado agora pelo WhatsApp.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
            <Image src="/images/WhatsApp_icon.png" alt="" width={24} height={24} className="mr-2" />
            Falar no WhatsApp
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
