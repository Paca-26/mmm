import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Globe, BarChart3, Users, Megaphone, Settings, HeadphonesIcon } from 'lucide-react';

const benefits = [
  { icon: Globe, title: 'Presença Online', description: 'Crie a sua loja digital em minutos e comece a vender para toda Angola.' },
  { icon: BarChart3, title: 'Painel de Gestão', description: 'Dashboard completo com métricas de vendas, produtos e encomendas.' },
  { icon: Users, title: 'Novos Clientes', description: 'Aceda a milhares de consumidores que procuram os seus produtos.' },
  { icon: Megaphone, title: 'Visibilidade', description: 'Destaque a sua loja com promoções e posicionamento na plataforma.' },
  { icon: Settings, title: 'Gestão Simples', description: 'Adicione produtos com fotos, preços e stock de forma intuitiva.' },
  { icon: HeadphonesIcon, title: 'Suporte Dedicado', description: 'Equipa de apoio para ajudar na configuração e crescimento.' },
];

export default function Slide06Vendedores() {
  return (
    <MSSlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <div className="mb-10">
          <span className="text-lg font-semibold tracking-widest uppercase" style={{ color: 'hsl(var(--slide-accent))' }}>
            Para Vendedores
          </span>
          <h2 className="text-4xl font-bold text-slide-gray-900 mt-2 mb-3">
            Cresça o Seu Negócio com a Me
          </h2>
          <p className="text-xl text-slide-gray-600 font-light">
            Ferramentas poderosas para comerciantes angolanos
          </p>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-xl border border-slide-gray-200 bg-white">
              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: 'hsl(var(--slide-accent) / 0.1)' }}>
                <benefit.icon className="w-6 h-6" style={{ color: 'hsl(var(--slide-accent))' }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slide-gray-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-base text-slide-gray-600 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
