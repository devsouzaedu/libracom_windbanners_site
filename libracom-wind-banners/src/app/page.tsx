import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth">
      {/* Header */}
      <header className="fixed w-full z-50 bg-blue-900 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center animate-fade-in">
            <Image
              src="/images/LIBRACOM_png.png"
              alt="Libracom Wind Banners Logo"
              width={150}
              height={50}
              className="mr-4 hover-scale brightness-0 invert"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <nav className="hidden md:flex space-x-8 animate-fade-in">
            <Link href="/wind-banner-barueri" className="flex items-center text-gray-100 hover:text-white font-medium transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Barueri
            </Link>
            <Link href="/wind-banner-personalizado-eventos" className="flex items-center text-gray-100 hover:text-white font-medium transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Eventos
            </Link>
            <Link href="/wind-banner-vs-bandeira-comum" className="flex items-center text-gray-100 hover:text-white font-medium transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
              Comparativo
            </Link>
            <Link href="/entrega-rapida-24h" className="flex items-center text-gray-100 hover:text-white font-medium transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Entrega 24h
            </Link>
            <a href="#sobre" className="flex items-center text-gray-100 hover:text-white font-medium transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Sobre
            </a>
            <a href="#contato" className="flex items-center text-gray-100 hover:text-white font-medium transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contato
            </a>
          </nav>
          <a
            href="https://wa.me/5511954997799"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary animate-fade-in"
          >
            <Image
              src="/images/WhatsApp_icon.png"
              alt="WhatsApp"
              width={24}
              height={24}
              className="mr-2"
            />
            <span>Orçamento</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[120vh]">
        <Image
          src="/images/wind_banner_sitebg.webp"
          alt="Wind Banners em Barueri"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 gradient-overlay">
          <div className="container mx-auto px-4 py-32 md:py-12">
            <div className="flex flex-col md:flex-row items-start justify-between min-h-[110vh]">
              {/* Conteúdo Principal */}
              <div className="text-white w-full md:w-1/2 mt-16 md:mt-8 animate-fade-in space-y-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
                  Wind Banners<br />Personalizados
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl">
                  Destaque sua marca em Barueri e Alphaville com nossos Wind Banners de alta qualidade
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-8 animate-slide-right delay-100">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Preços Especiais:
                  </h3>
                  <ul className="space-y-3 text-base md:text-lg">
                    <li className="flex items-center animate-slide-right delay-200">
                      <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Wind Banner 2m - R$350,00
                    </li>
                    <li className="flex items-center animate-slide-right delay-300">
                      <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Wind Banner 2.60m - R$400,00
                    </li>
                    <li className="flex items-center animate-slide-right delay-300">
                      <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Wind Banner 3m - R$420,00
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href="#produtos"
                    className="btn-primary text-base md:text-lg text-center group animate-fade-in delay-200"
                  >
                    <svg className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    Ver Modelos
                  </a>
                  <a
                    href="https://wa.me/5511954997799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-base md:text-lg text-center group animate-fade-in delay-300"
                  >
                    <Image
                      src="/images/WhatsApp_icon.png"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="mr-2 group-hover:animate-bounce"
                    />
                    Fazer Pedido
                  </a>
                </div>

                {/* Nova Galeria Deslizante Corrigida */}
                <div className="relative overflow-hidden mt-8 mb-12">
                  <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                    <div className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden snap-center relative">
                      <Image
                        src="/images/wind_banner_mpd.jpeg"
                        alt="Wind Banner 1"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    </div>
                    <div className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden snap-center relative">
                      <Image
                        src="/images/backdrop_eventos_fundo_palco_banner.png"
                        alt="Wind Banner 2"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    </div>
                    <div className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden snap-center relative">
                      <Image
                        src="/images/totem_backlight_eventos_totem_iluminado_barueri_alphaville.jpg"
                        alt="Wind Banner 3"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    </div>
                    <div className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden snap-center relative">
                      <Image
                        src="/images/wind_banner_sitebg.webp"
                        alt="Wind Banner 4"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    </div>
                    <div className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden snap-center relative">
                      <Image
                        src="/images/wind_banner_mpd.jpeg"
                        alt="Wind Banner 5"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-blue-900/50 to-transparent pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-blue-900/50 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Cards dos Wind Banners */}
              <div className="w-full md:w-1/2 mt-8 md:mt-0 space-y-4 md:space-y-0 md:pl-8">
                {/* Removendo todo o conteúdo dos cards */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Sobre Nós</h2>
          <div className="max-w-4xl mx-auto text-center mt-8">
            <p className="text-lg text-gray-600 mb-8">
              A Libracom é especialista em Wind Banners e comunicação visual em Barueri e Alphaville.
              Com anos de experiência no mercado, oferecemos produtos de alta qualidade e atendimento personalizado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-xl hover-shadow animate-fade-in delay-100">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-600">Qualidade</h3>
                <p className="text-gray-600">Materiais premium e impressão em alta resolução</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl hover-shadow animate-fade-in delay-200">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-600">Rapidez</h3>
                <p className="text-gray-600">Entrega rápida e atendimento ágil</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl hover-shadow animate-fade-in delay-300">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-600">Garantia</h3>
                <p className="text-gray-600">Satisfação garantida em todos os produtos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg hover-shadow">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Informações de Contato</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:11954997799" className="hover:text-blue-600 transition-colors">
                      (11) 95499-7799
                    </a>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:contato.libracom@gmail.com" className="hover:text-blue-600 transition-colors">
                      contato.libracom@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Barueri, Alphaville e região
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover-shadow">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Horário de Atendimento</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Segunda a Sexta: 9h às 18h
                  </p>
                  <p className="flex items-center text-gray-600">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Sábado: 9h às 13h
                  </p>
                </div>
                <a
                  href="https://wa.me/5511954997799"
          target="_blank"
          rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center mt-8"
        >
          <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Fale Conosco no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/images/LIBRACOM_png.png"
                alt="Libracom Wind Banners Logo"
                width={150}
                height={50}
                className="mb-4"
              />
              <p className="text-gray-400">
                Especialistas em Wind Banners e Comunicação Visual
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="/wind-banner-barueri" className="text-gray-400 hover:text-white transition-colors">Wind Banner em Barueri</Link></li>
                <li><Link href="/wind-banner-personalizado-eventos" className="text-gray-400 hover:text-white transition-colors">Wind Banner para Eventos</Link></li>
                <li><Link href="/wind-banner-vs-bandeira-comum" className="text-gray-400 hover:text-white transition-colors">Wind Banner vs Bandeira</Link></li>
                <li><Link href="/entrega-rapida-24h" className="text-gray-400 hover:text-white transition-colors">Entrega em 24h</Link></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">WhatsApp: (11) 95499-7799</li>
                <li className="text-gray-400">Email: contato.libracom@gmail.com</li>
                <li className="text-gray-400">Barueri, Alphaville e região</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Libracom Wind Banners. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
