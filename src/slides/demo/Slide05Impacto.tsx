import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import logoRound from '@/assets/mmm-logo-round.jpg';

const metrics = [
  { value: '35+', label: 'Lojas Parceiras', description: 'Supermercados, talhos, peixarias e restaurantes verificados' },
  { value: '12K+', label: 'Clientes Activos', description: 'Base de clientes a crescer 25% ao mês' },
  { value: '5K+', label: 'Entregas Realizadas', description: 'Logística eficiente com 97% de entregas no prazo' },
  { value: '4.8★', label: 'Avaliação Média', description: 'Confiança comprovada por milhares de utilizadores' },
  { value: '40%', label: 'Tempo Poupado', description: 'Comparado às compras tradicionais nos mercados' },
  { value: '3x', label: 'Mais Vendas', description: 'Aumento médio de vendas dos parceiros após adesão' },
];

const marketData = [
  { label: 'População de Angola', value: '35M' },
  { label: 'Utilizadores de Internet', value: '12M+' },
  { label: 'Penetração E-commerce', value: '<2%' },
  { label: 'Crescimento Digital Anual', value: '+35%' },
];

export default function Slide05Impacto() {
  return (
    <MSSlideLayout variant="dark">
      <div className="flex flex-col h-full px-20 py-16">
        <div className="flex items-center gap-4 mb-8">
          <img src={logoRound} alt="Mmm" className="w-12 h-12 rounded-full" />
          <div>
            <span className="text-lg font-semibold tracking-widest uppercase" style={{ color: 'hsl(var(--slide-accent))' }}>
              Impacto & Mercado
            </span>
            <h2 className="text-4xl font-bold text-white mt-1">
              Números que Falam por Si
            </h2>
          </div>
        </div>

        <div className="flex-1 flex gap-8">
          {/* Main metrics */}
          <div className="flex-1 grid grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 text-center"
              >
                <p className="text-4xl font-bold mb-1" style={{ color: 'hsl(var(--slide-accent))' }}>
                  {metric.value}
                </p>
                <p className="text-lg font-semibold text-white mb-1">
                  {metric.label}
                </p>
                <p className="text-sm text-white/60 font-light">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Market opportunity sidebar */}
          <div className="w-72 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white mb-2">Oportunidade de Mercado</h3>
            {marketData.map((item, index) => (
              <div key={index} className="p-4 rounded-xl border border-white/10 bg-white/5">
                <p className="text-2xl font-bold" style={{ color: 'hsl(var(--slide-accent))' }}>
                  {item.value}
                </p>
                <p className="text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
