import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wind Banner Personalizado para Eventos, Feiras e Ações de Rua | Libracom",
  description: "Wind banners personalizados para eventos, feiras e ações promocionais. Bandeiras de vento resistentes para ambientes externos. Entrega rápida em Barueri e região.",
  keywords: "wind banner para eventos barueri, banner de tecido para feiras, divulgação com bandeiras de vento, wind banner resistente ao vento, melhor tipo de banner para eventos externos",
};

export default function WindBannerEventos() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Wind Banner Personalizado para Eventos
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                Feiras, Congressos e Ações de Rua
              </h2>
              <p className="text-lg mb-8">
                Destaque sua marca em eventos com <strong>wind banners personalizados</strong> de alta qualidade. 
                Ideais para feiras, congressos, ações promocionais e eventos ao ar livre.
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
                    alt="WhatsApp para solicitar wind banner para eventos"
                    width={24}
                    height={24}
                    className="mr-2 group-hover:animate-bounce"
                  />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/backdrop_eventos_fundo_palco_banner.png"
                  alt="Wind Banner para eventos e feiras"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Modelos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Modelos para Eventos</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Confira nossa galeria de wind banners personalizados para eventos, feiras e ações promocionais.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg hover-shadow transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/wind_banner_mpd.jpeg"
                  alt="Wind Banner para feiras e eventos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Wind Banner Promocional</h3>
                <p className="text-gray-600">Ideal para feiras e eventos</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover-shadow transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/backdrop_eventos_fundo_palco_banner.png"
                  alt="Wind Banner para backdrop de eventos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Backdrop para Eventos</h3>
                <p className="text-gray-600">Fundo de palco personalizado</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover-shadow transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/totem_backlight_eventos_totem_iluminado_barueri_alphaville.jpg"
                  alt="Totem para eventos e feiras"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Totem para Eventos</h3>
                <p className="text-gray-600">Comunicação visual completa</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover-shadow transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/wind_marabraz_entrega24hs_alphaville.png"
                  alt="Wind Banner para ações promocionais"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Wind Banner para Ações</h3>
                <p className="text-gray-600">Ações promocionais externas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Por que escolher Wind Banners para seus eventos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover-shadow">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Alta Visibilidade</h3>
              <p className="text-gray-600 text-center">
                Wind banners destacam sua marca mesmo em ambientes cheios, garantindo que seu estande ou ponto promocional seja facilmente localizado.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-shadow">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Custo-Benefício</h3>
              <p className="text-gray-600 text-center">
                Excelente relação custo-benefício comparado a outras opções de sinalização para eventos e ações promocionais.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-shadow">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Fácil Transporte</h3>
              <p className="text-gray-600 text-center">
                Leves e fáceis de transportar, montar e desmontar, ideais para equipes que participam de múltiplos eventos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover-shadow">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Resistente ao Vento</h3>
              <p className="text-gray-600 text-center">
                Nossos wind banners são desenvolvidos com materiais resistentes ao vento, ideais para eventos externos e ações de rua.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-shadow">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Personalização Total</h3>
              <p className="text-gray-600 text-center">
                Personalize completamente seu wind banner com cores, logos e mensagens específicas para cada evento ou campanha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover-shadow">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Os wind banners da Libracom foram essenciais para o sucesso do nosso evento corporativo. Qualidade excelente e entrega no prazo."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">MC</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Marcos Costa</h4>
                  <p className="text-sm text-gray-500">Organizador de Eventos</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover-shadow">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Usamos os wind banners em nossa feira de negócios e ficamos impressionados com a visibilidade que proporcionaram ao nosso estande."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">AS</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Ana Silva</h4>
                  <p className="text-sm text-gray-500">Marketing - Empresa de Tecnologia</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover-shadow">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Excelente resistência ao vento! Usamos em uma ação de rua e os banners permaneceram intactos mesmo com ventos fortes."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">RL</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Ricardo Lima</h4>
                  <p className="text-sm text-gray-500">Coordenador de Eventos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Solicite um Orçamento</h2>
          <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="nome" 
                    name="nome" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="telefone" 
                    name="telefone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="evento" className="block text-gray-700 font-medium mb-2">Tipo de Evento</label>
                  <select 
                    id="evento" 
                    name="evento" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="feira">Feira</option>
                    <option value="congresso">Congresso</option>
                    <option value="acao">Ação Promocional</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                <textarea 
                  id="mensagem" 
                  name="mensagem" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Descreva seu evento e necessidades"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="btn-primary px-8 py-3"
                >
                  Enviar Solicitação
                </button>
              </div>
            </form>
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">Prefere contato direto?</p>
              <a
                href="https://wa.me/5511954997799"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-4 text-center inline-flex items-center justify-center"
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
      </section>
    </div>
  );
} 