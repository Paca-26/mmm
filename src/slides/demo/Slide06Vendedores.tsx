import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Globe, BarChart3, Users, Megaphone, Settings, HeadphonesIcon, Percent, Package, TrendingUp } from 'lucide-react';
import logoRound from '@/assets/mmm-logo-round.jpg';

const benefits = [
  { icon: Globe, title: 'Presença Online Instantânea', description: 'Crie a sua loja digital em minutos. Sem custos de desenvolvimento, sem conhecimentos técnicos necessários.' },
  { icon: BarChart3, title: 'Painel de Gestão Completo', description: 'Dashboard com métricas de vendas em tempo real, relatórios financeiros e análise de clientes.' },
  { icon: Users, title: 'Acesso a 12K+ Clientes', description: 'Aceda imediatamente à nossa base crescente de consumidores que procuram os seus produtos.' },
  { icon: Megaphone, title: 'Marketing & Visibilidade', description: 'Destaque a sua loja com promoções, banners e posicionamento premium na plataforma.' },
  { icon: Percent, title: 'Comissões Competitivas', description: 'Modelo transparente de comissão por venda. Sem taxas fixas mensais nem custos escondidos.' },
  { icon: Package, title: 'Logística Incluída', description: 'A Mmm trata da entrega. Sem necessidade de frota própria nem motoristas dedicados.' },
  { icon: Settings, title: 'Gestão de Catálogo', description: 'Adicione produtos com fotos, preços, variações e controlo de stock de forma intuitiva.' },
  { icon: HeadphonesIcon, title: 'Suporte Dedicado', description: 'Equipa de apoio ao parceiro para ajudar na configuração, optimização e crescimento.' },
  { icon: TrendingUp, title: 'Crescimento Garantido', description: 'Parceiros registam em média 3x mais vendas nos primeiros 3 meses após adesão.' },
];

export default function Slide06Vendedores() {
  return (
    <MSSlideLayout variant="default">
      <div className="flex flex-col h-full px-20 py-16">
        <div className="flex items-center gap-4 mb-6">
          <img src={logoRound} alt="Mmm" className="w-12 h-12 rounded-full" />
          <div>
            <span className="text-lg font-semibold tracking-widest uppercase" style={{ color: 'hsl(var(--slide-accent))' }}>
              Para Parceiros
            </span>
            <h2 className="text-4xl font-bold text-slide-gray-900 mt-1">
              Cresça o Seu Negócio com a Mmm
            </h2>
          </div>
        </div>
        <p className="text-xl text-slide-gray-600 font-light mb-6">
          Tudo o que precisa para digitalizar o seu negócio alimentar e alcançar mais clientes em Angola
        </p>

        <div className="flex-1 grid grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-3 p-5 rounded-xl border border-slide-gray-200 bg-white">
              <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ background: 'hsl(var(--slide-accent) / 0.1)' }}>
                <benefit.icon className="w-5 h-5" style={{ color: 'hsl(var(--slide-accent))' }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slide-gray-900 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slide-gray-600 font-light leading-relaxed">
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
