import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { MapPinOff, Clock, Store, ShieldX } from 'lucide-react';

const problems = [
  {
    icon: MapPinOff,
    title: 'Acesso Limitado',
    description: 'Muitos consumidores angolanos não têm acesso fácil a supermercados e lojas especializadas.',
  },
  {
    icon: Clock,
    title: 'Perda de Tempo',
    description: 'Deslocações longas e filas nos mercados consomem horas preciosas do dia-a-dia.',
  },
  {
    icon: Store,
    title: 'Lojas Sem Presença Digital',
    description: 'Pequenos comerciantes não têm ferramentas para vender online e alcançar novos clientes.',
  },
  {
    icon: ShieldX,
    title: 'Falta de Confiança',
    description: 'Compras online ainda geram desconfiança pela ausência de plataformas locais confiáveis.',
  },
];

export default function Slide02Problem() {
  return (
    <MSSlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <div className="mb-10">
          <span className="text-lg font-semibold tracking-widest uppercase" style={{ color: 'hsl(var(--slide-accent))' }}>
            O Desafio
          </span>
          <h2 className="text-4xl font-bold text-slide-gray-900 mt-2 mb-3">
            O Mercado Digital em Angola Precisa de Evolução
          </h2>
          <p className="text-xl text-slide-gray-600 font-light">
            Desafios reais que afectam consumidores e comerciantes todos os dias
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex gap-5 p-8 rounded-xl border border-slide-gray-200 bg-white"
            >
              <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: 'hsl(var(--slide-error) / 0.1)' }}>
                <problem.icon className="w-7 h-7" style={{ color: 'hsl(var(--slide-error))' }} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slide-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-lg text-slide-gray-600 font-light leading-relaxed">
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
