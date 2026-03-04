import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Search, ShoppingCart, CreditCard, Truck, Star } from 'lucide-react';
import logoRound from '@/assets/mmm-logo-round.jpg';

const steps = [
  { icon: Search, number: '01', title: 'Explore', description: 'Navegue por supermercados, talhos, peixarias e restaurantes parceiros. Filtre por categoria, proximidade ou promoções.' },
  { icon: ShoppingCart, number: '02', title: 'Adicione ao Carrinho', description: 'Escolha produtos de várias lojas num único pedido. Compare preços e veja avaliações de outros clientes.' },
  { icon: CreditCard, number: '03', title: 'Pague', description: 'Finalize com pagamento único e seguro via Multicaixa Express, transferência ou pagamento na entrega.' },
  { icon: Truck, number: '04', title: 'Receba', description: 'Entrega centralizada até à sua porta. Acompanhe o estado do pedido em tempo real na app.' },
  { icon: Star, number: '05', title: 'Avalie', description: 'Partilhe a sua experiência e ajude outros consumidores a encontrar as melhores lojas e produtos.' },
];

export default function Slide04ComoFunciona() {
  return (
    <MSSlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <div className="flex items-center gap-4 mb-10">
          <img src={logoRound} alt="Mmm" className="w-12 h-12 rounded-full" />
          <div>
            <span className="text-lg font-semibold tracking-widest uppercase" style={{ color: 'hsl(var(--slide-accent))' }}>
              Processo
            </span>
            <h2 className="text-4xl font-bold text-slide-gray-900 mt-1">
              Como Funciona
            </h2>
          </div>
        </div>

        <div className="flex-1 flex items-center">
          <div className="w-full flex items-start justify-between relative">
            {/* Connection line */}
            <div className="absolute top-10 left-[8%] right-[8%] h-0.5" style={{ background: 'hsl(var(--slide-accent) / 0.3)' }} />
            
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center w-1/5 relative z-10 px-4">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-lg" style={{ background: 'hsl(var(--slide-accent))' }}>
                  <step.icon className="w-9 h-9 text-white" />
                </div>
                <span className="text-sm font-bold mb-2" style={{ color: 'hsl(var(--slide-accent))' }}>
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-slide-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-slide-gray-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
