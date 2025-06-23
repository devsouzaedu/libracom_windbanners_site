import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wind Banner em Barueri – Personalizado e com Entrega Rápida | Libracom",
  description: "Compre Wind Banner em Barueri com a melhor qualidade e preço. Bandeira de vento personalizada com entrega rápida em toda região. Orçamento via WhatsApp.",
  keywords: "wind banner em barueri, bandeira de vento barueri, comprar wind banner barueri, impressão de wind banner barueri, empresa de wind banner barueri, onde comprar wind banner em barueri",
};

export default function WindBannerBarueri() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Wind Banner em Barueri
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                Personalizado e com Entrega Rápida
              </h2>
              <p className="text-lg mb-8">
                A Libracom é especialista em <strong>bandeira de vento em Barueri</strong> e região. 
                Oferecemos wind banners personalizados com a melhor qualidade e preço do mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5511954997799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-base md:text-lg text-center group"
                >
                  <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp para comprar wind banner em Barueri"
                    width={24}
                    height={24}
                    className="mr-2 group-hover:animate-bounce"
                  />
                  Peça pelo WhatsApp
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/wind_banner_mpd.jpeg"
                  alt="Wind Banner em Barueri - Modelo personalizado"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preços e Opções */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Opções de Wind Banners em Barueri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl shadow-lg p-6 hover-shadow transition-all">
              <div className="text-center mb-4">
                <span className="text-5xl font-bold text-blue-600">2m</span>
                <h3 className="text-2xl font-bold mt-2">Wind Banner Pequeno</h3>
                <p className="text-gray-500">Ideal para espaços limitados</p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Material de alta resistência
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Impressão digital de alta qualidade
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Base resistente incluída
                </li>
              </ul>
              <div className="text-center mt-4">
                <span className="text-3xl font-bold text-blue-600">R$ 350,00</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover-shadow transition-all border-2 border-blue-500 transform scale-105">
              <div className="absolute -top-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                Mais Vendido
              </div>
              <div className="text-center mb-4">
                <span className="text-5xl font-bold text-blue-600">2,60m</span>
                <h3 className="text-2xl font-bold mt-2">Wind Banner Médio</h3>
                <p className="text-gray-500">Perfeito para maior visibilidade</p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Material premium resistente ao vento
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Impressão digital de alta resolução
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Base reforçada para maior estabilidade
                </li>
              </ul>
              <div className="text-center mt-4">
                <span className="text-3xl font-bold text-blue-600">R$ 400,00</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover-shadow transition-all">
              <div className="text-center mb-4">
                <span className="text-5xl font-bold text-blue-600">3m</span>
                <h3 className="text-2xl font-bold mt-2">Wind Banner Grande</h3>
                <p className="text-gray-500">Máximo impacto visual</p>
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Material super resistente
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Impressão digital premium
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Base extra robusta incluída
                </li>
              </ul>
              <div className="text-center mt-4">
                <span className="text-3xl font-bold text-blue-600">R$ 420,00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa e Localização */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Onde Comprar Wind Banner em Barueri</h2>
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <div className="w-full md:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Nossa Localização</h3>
                <p className="text-gray-600 mb-4">
                  Atendemos toda a região de Barueri, Alphaville e arredores com entrega rápida e personalizada.
                </p>
                <div className="space-y-3">
                  <p className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Barueri, Alphaville - SP
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:11954997799" className="hover:text-blue-600 transition-colors">
                      (11) 95499-7799
                    </a>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contato.libracom@gmail.com" className="hover:text-blue-600 transition-colors">
                      contato.libracom@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-white p-2 rounded-xl shadow-lg h-full">
                <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29250.568895898737!2d-46.88469233022461!3d-23.50444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03dd6c32aef7%3A0x86a8852d44d8e45b!2sBarueri%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1656000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa mostrando a localização da Libracom Wind Banners em Barueri"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Clientes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Wind Banners Entregues em Barueri</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Confira alguns dos nossos trabalhos de wind banners personalizados entregues para clientes em Barueri e região.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg hover-shadow transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/wind_banner_mpd.jpeg"
                  alt="Wind Banner personalizado em Barueri para empresa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Wind Banner Corporativo</h3>
                <p className="text-gray-600">Cliente em Alphaville</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover-shadow transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/backdrop_eventos_fundo_palco_banner.png"
                  alt="Wind Banner para evento em Barueri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Wind Banner para Evento</h3>
                <p className="text-gray-600">Evento em Barueri</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover-shadow transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/wind_marabraz_entrega24hs_alphaville.png"
                  alt="Wind Banner personalizado para loja em Barueri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Wind Banner Comercial</h3>
                <p className="text-gray-600">Loja em Barueri</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para destacar sua marca em Barueri?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Solicite um orçamento de wind banner personalizado agora mesmo e receba em Barueri com rapidez e qualidade.
          </p>
          <a
            href="https://wa.me/5511954997799"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-lg px-8 py-4 text-center inline-flex items-center"
          >
            <Image
              src="/images/WhatsApp_icon.png"
              alt="WhatsApp"
              width={24}
              height={24}
              className="mr-2"
            />
            Peça pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
} 