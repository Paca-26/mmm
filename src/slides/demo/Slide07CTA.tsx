import React from 'react';
import heroBg from '@/assets/me-hero-bg.jpg';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function Slide07CTA() {
  return (
    <div className="w-full h-full relative font-sans slide-content">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/75" />
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-20 py-16 text-center">
        <span className="text-lg font-semibold tracking-widest uppercase mb-6" style={{ color: 'hsl(var(--slide-accent))' }}>
          Junte-se a Nós
        </span>
        
        <h1 className="text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Pronto para Transformar
          <br />
          o Seu Negócio?
        </h1>
        
        <p className="text-2xl text-white/80 font-light max-w-2xl mb-12">
          Seja consumidor ou vendedor, a Me está pronta para si.
          <br />
          Comece hoje e faça parte da revolução digital alimentar de Angola.
        </p>

        <div className="flex items-center gap-8 mb-16">
          <button className="flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-bold text-white shadow-lg" style={{ background: 'hsl(var(--slide-accent))' }}>
            Começar Agora
            <ArrowRight className="w-6 h-6" />
          </button>
          <button className="flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-semibold text-white border-2 border-white/30 bg-white/5">
            Ser Vendedor
          </button>
        </div>

        <div className="flex items-center gap-10 text-white/60">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="text-lg">+244 9XX XXX XXX</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span className="text-lg">info@me.ao</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1.5 z-10" style={{ background: 'hsl(var(--slide-accent))' }} />
    </div>
  );
}
