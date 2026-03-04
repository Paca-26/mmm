import React from 'react';
import { ShoppingCart, Store, Truck } from 'lucide-react';
import heroBg from '@/assets/me-hero-bg.jpg';

const keyMetrics = [
  { icon: Store, value: '35+', label: 'Lojas Parceiras' },
  { icon: ShoppingCart, value: '12K+', label: 'Clientes' },
  { icon: Truck, value: '5K+', label: 'Entregas' },
];

export default function Slide01Title() {
  return (
    <div className="w-full h-full relative font-sans slide-content">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      
      <div className="relative z-10 flex flex-col justify-center h-full px-20 py-16">
        <div className="max-w-4xl">
          <span className="text-lg font-semibold tracking-widest uppercase text-slide-accent mb-4 block" style={{ color: 'hsl(var(--slide-accent))' }}>
            Marketplace Alimentar
          </span>
          
          <h1 className="text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
            O Shopping Digital
            <br />
            <span style={{ color: 'hsl(var(--slide-accent))' }}>Alimentar</span> de Angola
          </h1>
          
          <div className="w-24 h-1 mb-8" style={{ background: 'hsl(var(--slide-accent))' }} />
          
          <p className="text-2xl text-white/90 font-light max-w-2xl leading-relaxed mb-12 drop-shadow-md">
            Supermercados, talhos, peixarias e restaurantes — tudo num só lugar.
          </p>
          
          <div className="flex gap-12">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'hsl(var(--slide-accent) / 0.2)' }}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white drop-shadow-md">{metric.value}</p>
                  <p className="text-sm text-white/70">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1.5 z-10" style={{ background: 'hsl(var(--slide-accent))' }} />
    </div>
  );
}
