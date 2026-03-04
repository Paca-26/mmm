import React from 'react';
import { ShoppingCart, Store, Truck, Users } from 'lucide-react';
import patternOrange from '@/assets/mmm-pattern-orange.jpg';
import logo from '@/assets/mmm-logo.jpg';

const keyMetrics = [
  { icon: Store, value: '35+', label: 'Lojas Parceiras' },
  { icon: ShoppingCart, value: '12K+', label: 'Clientes Activos' },
  { icon: Truck, value: '5K+', label: 'Entregas Realizadas' },
  { icon: Users, value: '98%', label: 'Satisfação' },
];

export default function Slide01Title() {
  return (
    <div className="w-full h-full relative font-sans slide-content">
      {/* Pattern background */}
      <img src={patternOrange} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20,30%,14%)] via-[hsl(20,30%,14%,0.92)] to-[hsl(20,30%,14%,0.7)]" />
      
      <div className="relative z-10 flex h-full">
        {/* Left content */}
        <div className="flex flex-col justify-center flex-1 px-20 py-16">
          <img src={logo} alt="Mmm logo" className="w-40 h-auto mb-8 rounded-xl" />
          
          <span className="text-lg font-semibold tracking-widest uppercase mb-4 block" style={{ color: 'hsl(var(--slide-accent))' }}>
            Marketplace Alimentar de Angola
          </span>
          
          <h1 className="text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            O Shopping Digital
            <br />
            <span style={{ color: 'hsl(var(--slide-accent))' }}>Alimentar</span> de Angola
          </h1>
          
          <div className="w-24 h-1 mb-8" style={{ background: 'hsl(var(--slide-accent))' }} />
          
          <p className="text-2xl text-white/90 font-light max-w-2xl leading-relaxed mb-12">
            Supermercados, talhos, peixarias e restaurantes — tudo num só lugar.
            <br />
            Compre de várias lojas num único pedido com entrega centralizada.
          </p>
          
          <div className="grid grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ background: 'hsl(var(--slide-accent) / 0.25)' }}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">{metric.value}</p>
                <p className="text-sm text-white/70 text-center">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1.5 z-10" style={{ background: 'hsl(var(--slide-accent))' }} />
    </div>
  );
}
