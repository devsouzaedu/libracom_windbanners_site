import Image from "next/image";
import Link from "next/link";
import { cities, EMAIL, PHONE_DISPLAY, products } from "../lib/site";

/** Links internos para todos os produtos e cidades: ajudam o Google a descobrir e valorizar cada página. */
export function SeoLinks() {
  const title = "text-xs font-black uppercase tracking-wider text-slate-200";
  const link = "hover:text-white transition-colors";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-3">
        <h2 className={title}>Produtos</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm">
          {products.map((p) => (
            <li key={p.slug}>
              <Link href={p.slug} className={link}>{p.name}</Link>
            </li>
          ))}
          <li><Link href="/wind-banner-personalizado-eventos" className={link}>Wind Banner para Eventos</Link></li>
          <li><Link href="/entrega-rapida-24h" className={link}>Entrega Rápida em 24h</Link></li>
        </ul>
      </div>
      <div className="space-y-3">
        <h2 className={title}>Wind Banner na Região</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm">
          <li><Link href="/wind-banner-barueri" className={link}>Wind Banner em Barueri</Link></li>
          {cities.map((c) => (
            <li key={c.slug}>
              <Link href={`/wind-banner/${c.slug}`} className={link}>Wind Banner {c.prep}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 py-10 md:py-16 border-t border-slate-800 text-slate-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Image
              src="/images/libracom_logo_preto_navbar.png"
              alt="Libracom Wind Banners"
              width={130}
              height={40}
              className="brightness-0 invert opacity-90"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-xs leading-relaxed">
              Wind banner, roll up, pop up, banner retangular, bandeiras e impressão em tecido em Barueri, Alphaville e região.
            </p>
            <ul className="space-y-2 text-xs md:text-sm font-semibold text-slate-300">
              <li><a href="tel:+5511954997799" className="hover:text-white">📞 {PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-white">✉️ {EMAIL}</a></li>
              <li>📍 Barueri, Alphaville - SP</li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <SeoLinks />
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 text-xs text-slate-500 font-bold">
          <p>© {new Date().getFullYear()} Libracom Wind Banners. Todos os direitos reservados. CNPJ: 58.260.224/0001-12</p>
        </div>
      </div>
    </footer>
  );
}
