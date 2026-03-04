import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { MapPinOff, Clock, Store, ShieldX, TrendingDown, Wifi } from 'lucide-react';
import logoRound from '@/assets/mmm-logo-round.jpg';

const problems = [
  {
    icon: MapPinOff,
    title: 'Acesso Limitado',
    description: 'Muitos consumidores angolanos não têm acesso fácil a supermercados e lojas especializadas, especialmente fora de Luanda.',
  },
  {
    icon: Clock,
    title: 'Perda de Tempo',
    description: 'Deslocações longas e filas nos mercados consomem horas preciosas. O trânsito agrava o problema diariamente.',
  },
  {
    icon: Store,
    title: 'Lojas Sem Presença Digital',
    description: 'Pequenos e médios comerciantes não têm ferramentas acessíveis para vender online e alcançar novos clientes.',
  },
  {
    icon: ShieldX,
    title: 'Falta de Confiança',
    description: 'Compras online geram desconfiança pela ausência de plataformas locais confiáveis e com suporte em português.',
  },
  {
    icon: TrendingDown,
    title: 'Vendas Limitadas',
    description: 'Comerciantes dependem apenas de clientes presenciais, perdendo oportunidades de crescimento digital.',
  },
  {
    icon: Wifi,
    title: 'Digitalização Lenta',
    description: 'O sector alimentar em Angola ainda é maioritariamente offline, criando uma enorme oportunidade de mercado.',
  },
];

export default function Slide02Problem() {
  return (
    <MSSlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <div className="flex items-center gap-4 mb-8">
          <img src={logoRound} alt="Mmm" className="w-12 h-12 rounded-full" />
          <div>
            <span className="text-lg font-semibold tracking-widest uppercase" style={{ color: 'hsl(var(--slide-accent))' }}>
              O Desafio
            </span>
            <h2 className="text-4xl font-bold text-slide-gray-900 mt-1">
              O Mercado Digital em Angola Precisa de Evolução
            </h2>
          </div>
        </div>
        <p className="text-xl text-slide-gray-600 font-light mb-8">
          Angola tem 35 milhões de habitantes e um sector de e-commerce alimentar quase inexistente. Eis os desafios reais:
        </p>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 rounded-xl border border-slide-gray-200 bg-white"
            >
              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: 'hsl(var(--slide-error) / 0.1)' }}>
                <problem.icon className="w-6 h-6" style={{ color: 'hsl(var(--slide-error))' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slide-gray-900 mb-1">
                  {problem.title}
                </h3>
                <p className="text-base text-slide-gray-600 font-light leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
