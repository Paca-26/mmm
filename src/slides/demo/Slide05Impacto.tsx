import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';

const metrics = [
  { value: '35+', label: 'Lojas Parceiras', description: 'Supermercados, talhos, peixarias e restaurantes' },
  { value: '12K+', label: 'Clientes Satisfeitos', description: 'E a crescer todos os meses' },
  { value: '5K+', label: 'Entregas Realizadas', description: 'Logística eficiente e centralizada' },
  { value: '4.8', label: 'Avaliação Média', description: 'Confiança comprovada pelos utilizadores' },
  { value: '40%', label: 'Tempo Poupado', description: 'Comparado às compras tradicionais' },
  { value: '24/7', label: 'Disponível Sempre', description: 'Compre a qualquer hora, em qualquer lugar' },
];

export default function Slide05Impacto() {
  return (
    <MSSlideLayout variant="dark">
      <div className="flex flex-col h-full px-20 py-16">
        <div className="mb-10 text-center">
          <span className="text-lg font-semibold tracking-widest uppercase" style={{ color: 'hsl(var(--slide-accent))' }}>
            Impacto
          </span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-3">
            Números que Falam por Si
          </h2>
          <p className="text-xl text-white/70 font-light">
            O crescimento da Me no mercado angolano
          </p>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-8 rounded-xl border border-white/10 bg-white/5 text-center"
            >
              <p className="text-5xl font-bold mb-2" style={{ color: 'hsl(var(--slide-accent))' }}>
                {metric.value}
              </p>
              <p className="text-xl font-semibold text-white mb-1">
                {metric.label}
              </p>
              <p className="text-sm text-white/60 font-light">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
