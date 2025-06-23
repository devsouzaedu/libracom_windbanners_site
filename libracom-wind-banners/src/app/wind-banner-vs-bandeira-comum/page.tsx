import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wind Banner ou Bandeira Tradicional? Saiba Qual Chama Mais Atenção | Libracom",
  description: "Compare wind banner e bandeira tradicional. Descubra qual é mais resistente, visível e prático para sua divulgação. Guia completo com vantagens e desvantagens.",
  keywords: "diferença entre wind banner e bandeira, qual wind banner dura mais, melhor tipo de banner para eventos externos, wind banner resistente ao vento, divulgação com bandeiras de vento",
};

export default function WindBannerVsBandeira() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Wind Banner ou Bandeira Tradicional?
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                Saiba Qual Chama Mais Atenção
              </h2>
              <p className="text-lg mb-8">
                Descubra as diferenças entre wind banners e bandeiras tradicionais, e entenda qual é a melhor opção para sua empresa ou evento.
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
                    alt="WhatsApp para comprar wind banner resistente ao vento"
                    width={24}
                    height={24}
                    className="mr-2 group-hover:animate-bounce"
                  />
                  Falar com Especialista
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/wind_banner_mpd.jpeg"
                  alt="Comparação entre wind banner e bandeira tradicional"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela Comparativa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Comparativo Detalhado</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Entenda as principais diferenças entre wind banners e bandeiras tradicionais para fazer a escolha certa para sua marca.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Características</th>
                  <th className="px-6 py-4 text-center">Wind Banner</th>
                  <th className="px-6 py-4 text-center">Bandeira Tradicional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Visibilidade</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">Excelente</span>
                    <p className="text-sm text-gray-500">Sempre esticado e visível, mesmo sem vento</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-yellow-600 font-bold">Média</span>
                    <p className="text-sm text-gray-500">Depende do vento para ficar esticada</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Resistência ao Vento</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">Alta</span>
                    <p className="text-sm text-gray-500">Estrutura projetada para resistir a ventos fortes</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-yellow-600 font-bold">Baixa a Média</span>
                    <p className="text-sm text-gray-500">Pode rasgar com ventos fortes</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Durabilidade</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">Alta</span>
                    <p className="text-sm text-gray-500">Material reforçado e estrutura resistente</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-yellow-600 font-bold">Média</span>
                    <p className="text-sm text-gray-500">Desgasta mais rapidamente com exposição</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Facilidade de Transporte</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">Boa</span>
                    <p className="text-sm text-gray-500">Desmontável, mas ocupa mais espaço</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">Excelente</span>
                    <p className="text-sm text-gray-500">Compacta e leve</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Montagem</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">Fácil</span>
                    <p className="text-sm text-gray-500">Montagem em minutos, sem ferramentas</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-yellow-600 font-bold">Média</span>
                    <p className="text-sm text-gray-500">Requer mastro e fixação adequada</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Impacto Visual</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">Alto</span>
                    <p className="text-sm text-gray-500">Formato diferenciado chama mais atenção</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-yellow-600 font-bold">Médio</span>
                    <p className="text-sm text-gray-500">Formato tradicional, menos destaque</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Versatilidade</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">Alta</span>
                    <p className="text-sm text-gray-500">Uso interno e externo, diversos tamanhos</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-yellow-600 font-bold">Média</span>
                    <p className="text-sm text-gray-500">Melhor para uso externo</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Custo-Benefício</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">Excelente</span>
                    <p className="text-sm text-gray-500">Maior durabilidade e impacto visual</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">Bom</span>
                    <p className="text-sm text-gray-500">Menor custo inicial, menor durabilidade</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vídeo Demonstrativo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Veja a Diferença na Prática</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Assista ao vídeo abaixo para ver como o wind banner se comporta em diferentes condições e compare com bandeiras tradicionais.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-2">Vídeo demonstrativo da montagem e desempenho do Wind Banner</p>
                </div>
                {/* Aqui seria inserido um iframe de vídeo real */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prós e Contras */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Prós e Contras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center">
                <svg className="w-8 h-8 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Wind Banner: Vantagens
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Sempre Visível</h4>
                    <p className="text-gray-600">Mantém-se esticado e visível mesmo sem vento, garantindo que sua mensagem seja sempre vista.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Resistência Superior</h4>
                    <p className="text-gray-600">Estrutura projetada para resistir a ventos fortes e condições climáticas adversas.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Maior Impacto Visual</h4>
                    <p className="text-gray-600">Formato diferenciado que chama mais atenção em eventos, feiras e pontos de venda.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Montagem Rápida</h4>
                    <p className="text-gray-600">Fácil de montar e desmontar, sem necessidade de ferramentas especiais.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center">
                <svg className="w-8 h-8 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Bandeira Tradicional: Limitações
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Visibilidade Dependente do Vento</h4>
                    <p className="text-gray-600">Sem vento, a bandeira fica caída e sua mensagem não é vista adequadamente.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Menor Durabilidade</h4>
                    <p className="text-gray-600">Desgasta mais rapidamente com exposição constante ao vento e intempéries.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Instalação Mais Complexa</h4>
                    <p className="text-gray-600">Requer mastro adequado e fixação segura para evitar acidentes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Menor Impacto Visual</h4>
                    <p className="text-gray-600">Formato tradicional que não se destaca tanto em ambientes competitivos.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Base */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Tipos de Base para Wind Banner</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Conheça as diferentes opções de base para wind banner e escolha a mais adequada para sua necessidade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover-shadow">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Base com Água</h3>
              <p className="text-gray-600 mb-4">
                Ideal para uso em superfícies planas como calçadas e pisos. Pode ser preenchida com água para maior estabilidade.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fácil de transportar vazia
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Boa estabilidade quando cheia
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover-shadow">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Base com Areia</h3>
              <p className="text-gray-600 mb-4">
                Excelente para uso em ambientes com vento forte. A areia proporciona maior peso e estabilidade.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Máxima estabilidade
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ideal para áreas externas
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover-shadow">
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Base Espeto</h3>
              <p className="text-gray-600 mb-4">
                Perfeita para uso em gramados, terra e areia. Fixação direta no solo para maior segurança.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fácil instalação
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ideal para eventos ao ar livre
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para escolher o melhor para sua marca?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Agora que você conhece as diferenças, solicite um orçamento para wind banners personalizados e destaque sua marca.
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
            Fazer Pedido Agora
          </a>
        </div>
      </section>
    </div>
  );
} 