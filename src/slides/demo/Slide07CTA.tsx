import React from 'react';
import patternGreen from '@/assets/mmm-pattern-green.jpg';
import logo from '@/assets/mmm-logo.jpg';
import { ArrowRight, Phone, Mail, Globe } from 'lucide-react';

const partnerSteps = [
  { number: '1', text: 'Contacte-nos e agende uma reunião' },
  { number: '2', text: 'Configuramos a sua loja digital em 48h' },
  { number: '3', text: 'Comece a vender para milhares de clientes' },
];

export default function Slide07CTA() {
  return (
    <div className="w-full h-full relative font-sans slide-content">
      <img src={patternGreen} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20,30%,14%)] via-[hsl(20,30%,14%,0.92)] to-[hsl(20,30%,14%,0.75)]" />
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-20 py-16 text-center">
        <img src={logo} alt="Mmm logo" className="w-32 h-auto mb-8 rounded-xl" />
        
        <span className="text-lg font-semibold tracking-widest uppercase mb-4" style={{ color: 'hsl(var(--slide-accent))' }}>
          Torne-se Parceiro
        </span>
        
        <h1 className="text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Pronto para Transformar
          <br />
          o Seu Negócio?
        </h1>
        
        <p className="text-2xl text-white/80 font-light max-w-3xl mb-10">
          Junte-se à Mmm e leve o seu negócio alimentar para o digital.
          <br />
          Sem custos iniciais. Suporte completo. Resultados reais.
        </p>

        {/* Partner steps */}
        <div className="flex gap-8 mb-12">
          {partnerSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-lg" style={{ background: 'hsl(var(--slide-accent))' }}>
                {step.number}
              </div>
              <span className="text-lg text-white/90 font-light">{step.text}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 mb-12">
          <button className="flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-bold text-white shadow-lg" style={{ background: 'hsl(var(--slide-accent))' }}>
            Ser Parceiro Agora
            <ArrowRight className="w-6 h-6" />
          </button>
          <button className="flex items-center gap-3 px-10 py-5 rounded-xl text-xl font-semibold text-white border-2 border-white/30 bg-white/5">
            Saber Mais
          </button>
        </div>

        <div className="flex items-center gap-10 text-white/60">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="text-lg">+244 9XX XXX XXX</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span className="text-lg">parceiros@mmm.ao</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            <span className="text-lg">www.mmm.ao</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1.5 z-10" style={{ background: 'hsl(var(--slide-accent))' }} />
    </div>
  );
}
