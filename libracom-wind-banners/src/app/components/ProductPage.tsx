import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import WhatsAppFloat from "./WhatsAppFloat";
import SiteFooter from "./SiteFooter";
import JsonLd, { breadcrumbLd, faqLd, serviceLd, type FaqItem } from "./JsonLd";
import { cities, products, whatsappUrl } from "../lib/site";

type Img = { src: string; alt: string; caption?: string };

export type ProductPageProps = {
  path: string;
  crumb: string;
  h1: string;
  subtitle: string;
  intro: string[];
  hero: Img;
  features: { title: string; text: string }[];
  optionsTitle: string;
  options: string[];
  usesTitle: string;
  uses: string[];
  gallery?: Img[];
  faqs: FaqItem[];
  whatsappMessage: string;
  ctaTitle: string;
  /** Texto do link nas cidades, ex.: "Roll up banner" → "Roll up banner em Osasco" */
  cityLabel: string;
};

export default function ProductPage(p: ProductPageProps) {
  const related = products.filter((r) => r.slug !== p.path).slice(0, 6);
  const wa = whatsappUrl(p.whatsappMessage);

  return (
    <div className="min-h-screen pt-20">
      <Header />
      <WhatsAppFloat />
      <JsonLd data={breadcrumbLd([{ name: p.crumb, path: p.path }])} />
      <JsonLd data={faqLd(p.faqs)} />
      <JsonLd data={serviceLd({ name: p.h1, description: p.intro[0], path: p.path })} />

      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <nav aria-label="Você está em" className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">Início</Link>
            <span className="mx-2">/</span>
            <span>{p.crumb}</span>
          </nav>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{p.h1}</h1>
              <p className="text-2xl font-semibold mb-6 text-blue-200">{p.subtitle}</p>
              {p.intro.map((t) => (
                <p key={t} className="text-lg mb-4">{t}</p>
              ))}
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                <Image src="/images/WhatsApp_icon.png" alt="" width={24} height={24} className="mr-2" />
                Pedir orçamento pelo WhatsApp
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white aspect-[4/3]">
                <Image
                  src={p.hero.src}
                  alt={p.hero.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Por que escolher a Libracom</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {p.features.map((f) => (
              <div key={f.title} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2 text-blue-600">{f.title}</h3>
                <p className="text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-900">{p.optionsTitle}</h2>
            <ul className="space-y-3 text-gray-700">
              {p.options.map((o) => (
                <li key={o} className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">✓</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-900">{p.usesTitle}</h2>
            <ul className="space-y-3 text-gray-700">
              {p.uses.map((u) => (
                <li key={u} className="flex items-start">
                  <span className="text-green-500 mr-2 font-bold">✓</span>
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {p.gallery && p.gallery.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Trabalhos Realizados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {p.gallery.map((g) => (
                <figure key={g.src} className="rounded-xl overflow-hidden shadow-lg bg-gray-50">
                  <div className="relative h-80">
                    <Image src={g.src} alt={g.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  {g.caption && <figcaption className="p-4 text-gray-700">{g.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {p.faqs.map((f) => (
              <div key={f.q} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2 text-blue-600">{f.q}</h3>
                <p className="text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Entregamos em Barueri e Região</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-6">
            {p.cityLabel} com entrega rápida em Barueri, Alphaville e cidades vizinhas. Também enviamos para todo o Brasil.
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            <li>
              <Link href="/wind-banner-barueri" className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-800 hover:bg-blue-100">
                Barueri
              </Link>
            </li>
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/wind-banner/${c.slug}`} className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-800 hover:bg-blue-100">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Veja Também</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} href={r.slug} className="product-card block">
                <div className="relative h-48 bg-white">
                  <Image src={r.image} alt={r.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-900">{r.name}</h3>
                  <p className="text-gray-600">{r.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{p.ctaTitle}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Conte o que você precisa e receba o seu orçamento pelo WhatsApp.
          </p>
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
