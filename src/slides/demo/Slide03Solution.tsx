import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { ShoppingBag, CreditCard, Truck, Shield, Smartphone, Clock } from 'lucide-react';
import logoRound from '@/assets/mmm-logo-round.jpg';

const features = [
  {
    icon: ShoppingBag,
    title: 'Multi-Loja',
    description: 'Compre de supermercados, talhos, peixarias e restaurantes no mesmo pedido. Várias lojas, um único carrinho.',
    highlight: 'Várias lojas, um carrinho',
  },
  {
    icon: CreditCard,
    title: 'Pagamento Único',
    description: 'Pague tudo de uma vez com métodos locais angolanos: Multicaixa Express, transferência bancária e dinheiro à entrega.',
    highlight: 'Simples e transparente',
  },
  {
    icon: Truck,
    title: 'Entrega Centralizada',
    description: 'Logística própria que reúne produtos de diferentes lojas numa única entrega à sua porta em Luanda.',
    highlight: 'Rápido e conveniente',
  },
  {
    icon: Shield,
    title: 'Confiança & Segurança',
    description: 'Todas as lojas são verificadas. Garantia de qualidade e devolução em caso de problema.',
    highlight: 'Plataforma verificada',
  },
  {
    icon: Smartphone,
    title: 'App & Web',
    description: 'Disponível na web e como aplicação mobile. Interface intuitiva em português, pensada para Angola.',
    highlight: 'Acesso em todo lado',
  },
  {
    icon: Clock,
    title: 'Entregas no Mesmo Dia',
    description: 'Peça de manhã, receba à tarde. Slots de entrega flexíveis que se adaptam ao seu horário.',
    highlight: 'Rápido e flexível',
  },
];

export default function Slide03Solution() {
  return (
    <MSSlideLayout variant="dark">
      <div className="flex flex-col h-full px-20 py-16">
        <div className="flex items-center gap-4 mb-8">
          <img src={logoRound} alt="Mmm" className="w-12 h-12 rounded-full" />
          <div>
            <span className="text-lg font-semibold tracking-widest uppercase" style={{ color: 'hsl(var(--slide-accent))' }}>
              A Solução
            </span>
            <h2 className="text-4xl font-bold text-white mt-1">
              Mmm — Tudo Num Só Lugar
            </h2>
          </div>
        </div>
        <p className="text-xl text-white/70 font-light mb-8">
          Uma plataforma completa que conecta consumidores às melhores lojas alimentares de Angola
        </p>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col p-6 rounded-xl border border-white/10 bg-white/5"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'hsl(var(--slide-accent) / 0.15)' }}>
                <feature.icon className="w-6 h-6" style={{ color: 'hsl(var(--slide-accent))' }} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">
                {feature.title}
              </h3>
              
              <span className="text-sm font-semibold px-3 py-1 rounded-full mb-3 self-start" style={{ background: 'hsl(var(--slide-accent) / 0.15)', color: 'hsl(var(--slide-accent))' }}>
                {feature.highlight}
              </span>
              
              <p className="text-base text-white/70 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
