import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wind Banner com Entrega em 24h em Barueri e Alphaville | Libracom",
  description: "Precisa de wind banner com urgência? Entregamos em 24 horas em Barueri, Alphaville e região. Wind banners personalizados com impressão de alta qualidade.",
  keywords: "wind banner entrega rápida, wind banner 24h, entrega de wind banner barueri, wind banner alphaville entrega rápida, wind banner urgente, impressão rápida wind banner",
};

export default function EntregaRapida24h() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 animate-pulse">
                ENTREGA EM 24H
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Wind Banner com Entrega em 24h
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                Em Barueri e Alphaville
              </h2>
              <p className="text-lg mb-8">
                Precisa de <strong>wind banners com urgência</strong>? A Libracom oferece entrega expressa em 24 horas para Barueri, Alphaville e região, sem comprometer a qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5511954997799?text=Olá,%20preciso%20de%20um%20Wind%20Banner%20com%20entrega%20em%2024h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-base md:text-lg text-center group"
                >
                  <Image
                    src="/images/WhatsApp_icon.png"
                    alt="WhatsApp para wind banner com entrega rápida"
                    width={24}
                    height={24}
                    className="mr-2 group-hover:animate-bounce"
                  />
                  Solicitar Entrega Expressa
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/wind_marabraz_entrega24hs_alphaville.png"
                  alt="Wind Banner com entrega em 24h em Barueri e Alphaville"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-lg font-bold animate-pulse">
                  24h
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Como Funciona a Entrega em 24h</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover-shadow relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Entre em Contato</h3>
              <p className="text-gray-600 text-center">
                Envie sua arte ou solicite a criação pelo nosso WhatsApp. Informe as dimensões e quantidade desejada.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-shadow relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Aprovação e Pagamento</h3>
              <p className="text-gray-600 text-center">
                Aprove o orçamento e a arte final. Realize o pagamento para iniciarmos a produção imediatamente.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-shadow relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-blue-600">Entrega em 24h</h3>
              <p className="text-gray-600 text-center">
                Receba seu wind banner em até 24 horas em Barueri, Alphaville e região. Pronto para uso!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Disponíveis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Wind Banners Disponíveis para Entrega em 24h</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Todos os modelos abaixo estão disponíveis para entrega expressa em 24 horas em Barueri e Alphaville.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-shadow transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/wind_banner_mpd.jpeg"
                  alt="Wind Banner 2m com entrega em 24h"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Entrega 24h
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Wind Banner 2m</h3>
                <p className="text-gray-600 mb-4">
                  Wind banner de 2 metros de altura, ideal para espaços menores e eventos internos.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">R$ 350,00</span>
                  <a
                    href="https://wa.me/5511954997799?text=Olá,%20tenho%20interesse%20no%20Wind%20Banner%20de%202m%20com%20entrega%20em%2024h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    Pedir Agora
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-shadow transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/wind_banner_mpd.jpeg"
                  alt="Wind Banner 2,60m com entrega em 24h"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Entrega 24h
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-blue-900/10 flex items-center justify-center">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full transform rotate-12 text-lg font-bold">
                    Mais Vendido
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Wind Banner 2,60m</h3>
                <p className="text-gray-600 mb-4">
                  Tamanho médio com excelente visibilidade e custo-benefício. O mais popular.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">R$ 400,00</span>
                  <a
                    href="https://wa.me/5511954997799?text=Olá,%20tenho%20interesse%20no%20Wind%20Banner%20de%202,60m%20com%20entrega%20em%2024h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    Pedir Agora
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-shadow transition-all">
              <div className="relative h-64">
                <Image
                  src="/images/wind_banner_mpd.jpeg"
                  alt="Wind Banner 3m com entrega em 24h"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Entrega 24h
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Wind Banner 3m</h3>
                <p className="text-gray-600 mb-4">
                  Wind banner grande com máximo impacto visual para eventos e feiras.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">R$ 420,00</span>
                  <a
                    href="https://wa.me/5511954997799?text=Olá,%20tenho%20interesse%20no%20Wind%20Banner%20de%203m%20com%20entrega%20em%2024h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    Pedir Agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de Entrega */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Área de Entrega em 24h</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Realizamos entregas expressas em 24 horas nas seguintes regiões:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Regiões Atendidas</h3>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Barueri
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Alphaville
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Santana de Parnaíba
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Osasco
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Carapicuíba
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Jandira
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Itapevi
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Zona Oeste SP
                </li>
              </ul>
              <p className="mt-6 text-gray-600">
                <strong>Nota:</strong> Para outras regiões, consulte-nos sobre prazos e disponibilidade.
              </p>
            </div>
            <div className="bg-white p-2 rounded-xl shadow-lg h-full">
              <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58500.92726302051!2d-46.89469233022461!3d-23.50444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03dd6c32aef7%3A0x86a8852d44d8e45b!2sBarueri%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1656000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da área de entrega em 24h de Wind Banners em Barueri e Alphaville"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2 text-blue-600">A entrega em 24h tem custo adicional?</h3>
                <p className="text-gray-600">
                  Não, a entrega em 24h para Barueri e Alphaville não tem custo adicional. O valor é o mesmo da entrega padrão.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Qual o horário limite para garantir a entrega em 24h?</h3>
                <p className="text-gray-600">
                  Para garantir a entrega em 24h, o pedido deve ser aprovado e pago até às 12h do dia útil anterior.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2 text-blue-600">A qualidade do wind banner é a mesma da produção normal?</h3>
                <p className="text-gray-600">
                  Sim, mantemos o mesmo padrão de qualidade em todos os nossos produtos, independentemente do prazo de entrega.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Posso solicitar alterações na arte durante o processo de entrega expressa?</h3>
                <p className="text-gray-600">
                  Para garantir a entrega em 24h, a arte deve ser aprovada sem alterações após o início da produção. Alterações podem impactar no prazo.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2 text-blue-600">Qual a quantidade máxima para entrega em 24h?</h3>
                <p className="text-gray-600">
                  Conseguimos entregar até 5 wind banners no prazo de 24h. Para quantidades maiores, consulte-nos sobre prazos especiais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Precisa para amanhã? Nós entregamos!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Não deixe seu evento ou ação de marketing para última hora. Solicite agora seu wind banner com entrega garantida em 24h em Barueri e Alphaville.
          </p>
          <a
            href="https://wa.me/5511954997799?text=Olá,%20preciso%20de%20um%20Wind%20Banner%20com%20entrega%20em%2024h"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-lg px-8 py-4 text-center inline-flex items-center"
          >
            <Image
              src="/images/WhatsApp_icon.png"
              alt="WhatsApp para wind banner com entrega em 24h"
              width={24}
              height={24}
              className="mr-2"
            />
            Solicitar Entrega Expressa
          </a>
        </div>
      </section>
    </div>
  );
} 