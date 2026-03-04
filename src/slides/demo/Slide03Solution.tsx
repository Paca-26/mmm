import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { ShoppingBag, CreditCard, Truck } from 'lucide-react';

const features = [
  {
    icon: ShoppingBag,
    title: 'Multi-Loja',
    description: 'Compre de supermercados, talhos, peixarias e restaurantes no mesmo pedido. Tudo num único carrinho.',
    highlight: 'Várias lojas, um carrinho',
  },
  {
    icon: CreditCard,
    title: 'Pagamento Único',
    description: 'Pague tudo de uma vez com métodos locais. Sem complicações, sem taxas escondidas.',
    highlight: 'Simples e transparente',
  },
  {
    icon: Truck,
    title: 'Entrega Centralizada',
    description: 'Logística eficiente que reúne produtos de diferentes lojas numa única entrega à sua porta.',
    highlight: 'Rápido e conveniente',
  },
];

export default function Slide03Solution() {
  return (
    <MSSlideLayout variant="dark">
      <div className="flex flex-col h-full px-20 py-16">
        <div className="mb-10">
          <span className="text-lg font-semibold tracking-widest uppercase" style={{ color: 'hsl(var(--slide-accent))' }}>
            A Solução
          </span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-3">
            Me — Tudo Num Só Lugar
          </h2>
          <p className="text-xl text-white/70 font-light">
            Uma plataforma que conecta consumidores às melhores lojas de Angola
          </p>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col p-8 rounded-xl border border-white/10 bg-white/5"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'hsl(var(--slide-accent) / 0.15)' }}>
                <feature.icon className="w-7 h-7" style={{ color: 'hsl(var(--slide-accent))' }} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              
              <span className="text-sm font-semibold px-3 py-1 rounded-full mb-4 self-start" style={{ background: 'hsl(var(--slide-accent) / 0.15)', color: 'hsl(var(--slide-accent))' }}>
                {feature.highlight}
              </span>
              
              <p className="text-lg text-white/70 font-light leading-relaxed mt-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
