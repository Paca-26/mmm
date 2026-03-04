import React from 'react';
import {
  ShoppingCart, Store, Truck, Users,
  Clock, MonitorSmartphone, DollarSign, EyeOff, Target, CheckCircle2,
  XCircle, Globe, Smartphone, Package, Search, Map, Check, Heart, ShieldCheck,
  TrendingUp, Navigation, Star
} from 'lucide-react';
import patternOrange from '@/assets/mmm-pattern-orange.jpg';
import logo from '@/assets/mmm-logo.jpg';

const Slide1Capa = () => (
  <div className="w-full h-full relative font-sans slide-content overflow-hidden">
    <img src={patternOrange} alt="Pattern" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(20,90%,10%)] via-[hsl(20,50%,15%)] to-[hsl(20,90%,10%)] opacity-95" />

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-20">
      <img src={logo} alt="Mmm logo" className="w-48 h-auto mb-10 rounded-2xl shadow-2xl border-4 border-white/10" />

      <span className="text-xl font-bold tracking-[0.2em] uppercase mb-6 text-orange-400">
        Mmm'all4u
      </span>

      <h1 className="text-6xl font-black tracking-tight text-white mb-8 leading-[1.1] max-w-4xl">
        O novo Shopping Digital de
        <span className="text-orange-400 block mt-2">Supermercados e Restaurantes</span>
        em Angola
      </h1>

      <div className="w-32 h-1.5 bg-orange-500 rounded-full mb-8 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />

      <p className="text-2xl text-white/80 font-medium max-w-3xl leading-relaxed">
        Uma plataforma criada para ajudar supermercados, talhos, peixarias e mercearias a vender mais.
      </p>
    </div>
  </div>
);

const Slide2Problema = () => (
  <div className="w-full h-full bg-slate-50 relative flex flex-col p-16 slide-content">
    <div className="mb-12">
      <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">O Contexto</span>
      <h2 className="text-5xl font-extrabold text-slate-900">O problema atual</h2>
    </div>

    <div className="grid grid-cols-2 gap-12 flex-1">
      {/* Left Column */}
      <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 flex flex-col">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 pb-4 border-b border-slate-100">
          Desafios dos Negócios:
        </h3>
        <ul className="space-y-6 flex-1">
          {[
            { icon: Clock, text: 'Clientes cada vez mais ocupados' },
            { icon: TrendingUp, text: 'Crescimento rápido das compras online' },
            { icon: DollarSign, text: 'Custos muito altos de entrega própria' },
            { icon: EyeOff, text: 'Falta de visibilidade no mundo digital' },
            { icon: Target, text: 'Dificuldade em alcançar novos clientes' }
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-slate-600 text-lg">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-1">
                <item.icon className="w-5 h-5 text-red-500" />
              </div>
              <span className="pt-2 font-medium">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column */}
      <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-10 -mt-10" />
        <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-slate-800 relative z-10">
          O que os Consumidores querem:
        </h3>
        <ul className="space-y-8 relative z-10 mt-4">
          {[
            { text: 'Comprar sem sair de casa' },
            { text: 'Comparar produtos facilmente' },
            { text: 'Receber as compras rapidamente' }
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-5 text-white/90 text-2xl font-medium">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 border border-green-500/30">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Slide3Oportunidade = () => (
  <div className="w-full h-full bg-orange-500 relative flex items-center justify-center p-16 slide-content overflow-hidden">
    <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[800px] h-[800px] bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
    <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[600px] h-[600px] bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-30" />

    <div className="max-w-4xl relative z-10 text-white">
      <h2 className="text-6xl font-black mb-12 leading-tight drop-shadow-lg">
        O comércio alimentar está a mudar.
      </h2>

      <p className="text-3xl font-medium text-orange-50 mb-10">
        Cada vez mais clientes procuram:
      </p>

      <div className="grid grid-cols-1 gap-6 mb-16 px-8">
        {[
          'comprar online',
          'receber no conforto de casa',
          'ter variedade de lojas num só lugar'
        ].map((texto, i) => (
          <div key={i} className="flex items-center gap-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <Globe className="w-8 h-8 text-yellow-300" />
            <span className="text-3xl font-bold">{texto}</span>
          </div>
        ))}
      </div>

      <div className="bg-white text-orange-600 font-bold p-8 rounded-3xl text-3xl text-center shadow-2xl transform hover:scale-105 transition-transform">
        Quem não estiver presente no digital perde mercado.
      </div>
    </div>
  </div>
);

const Slide4Solucao = () => (
  <div className="w-full h-full bg-white relative p-16 slide-content">
    <div className="text-center mb-16">
      <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">A Solução</span>
      <h2 className="text-5xl font-extrabold text-slate-900 mb-6">Mmm'all4u</h2>
      <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
        Um shopping digital onde os clientes encontram tudo numa única plataforma.
      </p>
    </div>

    <div className="grid grid-cols-5 gap-6 max-w-6xl mx-auto">
      {[
        { icon: Store, title: 'Vários\nSupermercados', color: 'bg-blue-50 text-blue-600 border-blue-100' },
        { icon: Map, title: 'Vários\nTalhos', color: 'bg-red-50 text-red-600 border-red-100' },
        { icon: Navigation, title: 'Várias\nPeixarias', color: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
        { icon: Package, title: 'Muitos\nRestaurantes', color: 'bg-orange-50 text-orange-600 border-orange-100' },
        { icon: Heart, title: 'Frescos e\nImportados', color: 'bg-green-50 text-green-600 border-green-100' },
      ].map((cat, i) => (
        <div key={i} className={`flex flex-col items-center text-center p-8 rounded-3xl border-2 ${cat.color} hover:-translate-y-2 transition-transform duration-300`}>
          <cat.icon className="w-16 h-16 mb-6" />
          <span className="text-xl font-bold whitespace-pre-line leading-tight">{cat.title}</span>
        </div>
      ))}
    </div>

    <div className="absolute bottom-16 left-0 right-0 text-center">
      <div className="inline-block bg-slate-900 text-white px-10 py-5 rounded-full text-2xl font-medium shadow-2xl">
        A melhor conveniência. Tudo numa única aplicação.
      </div>
    </div>
  </div>
);

const Slide5ComoFunciona = () => (
  <div className="w-full h-full bg-slate-50 relative p-16 slide-content flex flex-col">
    <div className="mb-12">
      <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">Operação</span>
      <h2 className="text-5xl font-extrabold text-slate-900">Como funciona</h2>
    </div>

    <div className="flex-1 flex flex-col gap-10">
      {/* O Cliente */}
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
          <Users className="w-6 h-6 text-orange-500" /> O Cliente:
        </h3>
        <div className="flex justify-between items-center relative gap-4">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -z-10 -translate-y-1/2" />
          {[
            { num: '1', text: 'Entra na\nplataforma', icon: Smartphone },
            { num: '2', text: 'Escolhe a\nsua loja', icon: Store },
            { num: '3', text: 'Faz o\npedido', icon: ShoppingCart },
            { num: '4', text: 'Paga\nonline', icon: DollarSign },
            { num: '5', text: 'A nossa logística\nfaz a recolha/entrega', icon: Truck },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-white px-4">
              <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-2xl font-serif mb-4 shadow-xl border-4 border-white relative z-10">
                {step.num}
              </div>
              <step.icon className="w-8 h-8 text-orange-500 mb-3" />
              <span className="text-sm font-bold text-slate-600 whitespace-pre-line leading-snug">{step.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* O Lojista */}
      <div className="bg-orange-50 rounded-3xl p-8 shadow-lg border border-orange-100 flex-1 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-orange-100 to-transparent" />
        <h3 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-3 relative z-10">
          <Store className="w-6 h-6 text-orange-600" /> O Lojista apenas precisa:
        </h3>

        <div className="flex items-center gap-8 relative z-10">
          <div className="flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-md font-bold text-2xl text-slate-800 border-2 border-orange-200">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
            Preparar o pedido
          </div>
          <p className="text-3xl font-black text-orange-600 ml-auto mr-12 uppercase tracking-wide">
            Nós tratamos do resto.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide6Vantagens = () => (
  <div className="w-full h-full bg-slate-900 relative p-16 slide-content flex flex-col">
    <div className="mb-14">
      <h2 className="text-5xl font-extrabold text-white">O que a loja ganha</h2>
      <p className="text-2xl text-slate-400 mt-4">Ao entrar na plataforma, o parceiro passa a ter:</p>
    </div>

    <div className="grid grid-cols-2 gap-x-12 gap-y-8 flex-1 content-center">
      {[
        { title: 'Novos clientes', desc: 'Acesso a uma base crescente de compradores.' },
        { title: 'Presença digital', desc: 'A sua loja online 24h por dia, sem complicações.' },
        { title: 'Vendas adicionais', desc: 'Sem necessidade de investimento em tecnologia.' },
        { title: 'Logística de entrega', desc: 'Entregas asseguradas sem custo de estrutura própria.' },
        { title: 'Marketing', desc: 'Divulgação contínua dentro da nossa plataforma.' },
      ].map((item, i) => (
        <div key={i} className="flex gap-6 group">
          <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:scale-110 transition-all border border-orange-500/20">
            <Check className="w-8 h-8 text-orange-500 group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Slide7SemCustos = () => (
  <div className="w-full h-full bg-white relative p-16 slide-content flex items-center">
    <div className="flex-1 pr-16 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50 via-white to-white rounded-3xl h-full p-12">
      <h2 className="text-5xl font-extrabold text-slate-900 mb-12 leading-[1.2]">
        Mais vendas <span className="text-orange-500 block">sem aumentar custos</span>
      </h2>

      <p className="text-2xl font-medium text-slate-500 mb-8">Com Mmm'all4u:</p>

      <ul className="space-y-6 mb-12">
        {[
          'não precisa criar site',
          'não precisa criar app',
          'não precisa contratar entregadores',
          'não precisa investir em marketing digital'
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-4 text-2xl text-slate-800 font-bold bg-slate-50 p-4 rounded-xl border border-slate-100">
            <XCircle className="w-8 h-8 text-red-400" />
            {item}
          </li>
        ))}
      </ul>

      <div className="inline-block border-l-4 border-orange-500 pl-6 py-2">
        <p className="text-3xl font-black text-slate-900">
          A plataforma faz isso por si.
        </p>
      </div>
    </div>

    <div className="w-1/3 flex items-center justify-center relative">
      <div className="absolute inset-0 bg-orange-500 rounded-full opacity-10 blur-[100px]" />
      <TrendingUp className="w-64 h-64 text-orange-500 drop-shadow-2xl" />
    </div>
  </div>
);

const Slide8Visibilidade = () => (
  <div className="w-full h-full bg-orange-600 relative p-16 slide-content flex flex-col justify-center items-center text-center overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

    <MonitorSmartphone className="w-24 h-24 text-white mb-10 mx-auto opacity-90" />

    <h2 className="text-6xl font-black text-white mb-12 relative z-10">Visibilidade</h2>

    <p className="text-3xl font-medium text-white/90 max-w-4xl mx-auto mb-16 leading-relaxed relative z-10">
      A loja passa a aparecer para centenas ou milhares de clientes que procuram diariamente por:
    </p>

    <div className="grid grid-cols-4 gap-4 w-full max-w-5xl relative z-10 mb-16">
      {['Carne', 'Peixe', 'Produtos Frescos', 'Compras de Supermercado'].map((item, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white font-bold text-xl border border-white/20">
          {item}
        </div>
      ))}
    </div>

    <div className="bg-white text-orange-600 px-12 py-6 rounded-full text-3xl font-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative z-10 transform -rotate-1">
      Isso significa mais vendas e mais movimento para a sua loja!
    </div>
  </div>
);

const Slide9Logistica = () => (
  <div className="w-full h-full bg-slate-50 relative p-16 slide-content">
    <div className="mb-14">
      <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">Operações</span>
      <h2 className="text-5xl font-extrabold text-slate-900">Logística profissional</h2>
    </div>

    <div className="flex h-[60%] gap-12">
      <div className="flex-1 bg-slate-900 rounded-3xl p-12 text-white flex flex-col justify-center shadow-2xl relative overflow-hidden">
        <Truck className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />

        <p className="text-3xl font-light mb-12 leading-tight">
          A entrega é feita pela <strong className="font-black text-orange-400">K</strong>, nossa parceira experiente em logística.
        </p>

        <p className="text-xl font-bold text-slate-400 mb-6 uppercase tracking-wider">Isso significa:</p>

        <div className="grid grid-cols-2 gap-8">
          {[
            { text: 'Recolha organizada', icon: Package },
            { text: 'Entrega rápida', icon: Clock },
            { text: 'Rastreamento do pedido', icon: Map },
            { text: 'Experiência profissional', icon: ShieldCheck },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <item.icon className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-xl font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Slide10Simples = () => (
  <div className="w-full h-full bg-white relative p-16 slide-content flex flex-col">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold text-slate-900 mb-6">Simples de usar</h2>
      <p className="text-2xl text-slate-600 max-w-3xl mx-auto">
        A sua loja recebe tudo o que precisa para operar sem complicações.
      </p>
    </div>

    <div className="flex-1 flex items-center justify-center">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
        {[
          { title: 'Acesso ao Painel', icon: MonitorSmartphone, desc: 'Controlo total no browser' },
          { title: 'Gestão de Produtos', icon: Package, desc: 'Stock e preços sempre atualizados' },
          { title: 'Gestão de Pedidos', icon: ShoppingCart, desc: 'Acompanhe as vendas em tempo real' },
          { title: 'Relatórios de Vendas', icon: TrendingUp, desc: 'Analise os seus resultados e lucro' },
        ].map((item, i) => (
          <div key={i} className="bg-slate-50 border-2 border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center hover:border-orange-500 transition-colors group">
            <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <item.icon className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
            <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="text-center mt-auto">
      <span className="inline-block border-b-4 border-orange-500 pb-2 text-3xl font-black text-slate-800">
        Tudo simples e fácil de usar.
      </span>
    </div>
  </div>
);

const Slide11Primeiros = () => (
  <div className="w-full h-full bg-slate-900 relative p-16 slide-content flex items-center">
    <div className="w-1/2 pr-12">
      <h2 className="text-6xl font-black text-white mb-8 leading-tight">Quem deve <span className="text-orange-500">entrar primeiro?</span></h2>
      <p className="text-2xl text-slate-300 mb-12 font-light">
        Estamos a selecionar parceiros estratégicos para o nosso lançamento em grande.
      </p>
      <div className="bg-orange-500 text-white rounded-3xl p-8 font-bold text-2xl rotate-2 shadow-2xl">
        Os primeiros parceiros terão vantagens exclusivas:
      </div>
    </div>

    <div className="w-1/2 pl-12">
      <div className="space-y-6">
        {[
          { text: 'Maior visibilidade na plataforma', icon: EyeOff },
          { text: 'Destaque inicial', icon: Star },
          { text: 'Crescimento conjunto com a marca', icon: TrendingUp },
        ].map((item, i) => (
          <div key={i} className="bg-slate-800 rounded-2xl p-6 flex items-center gap-6 transform hover:translate-x-4 transition-transform border border-slate-700">
            <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center shrink-0">
              <item.icon className="w-7 h-7 text-orange-400" />
            </div>
            <span className="text-2xl font-bold text-white">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Slide12Convite = () => (
  <div className="w-full h-full relative font-sans slide-content overflow-hidden flex flex-col items-center justify-center text-center p-16">
    <img src={patternOrange} alt="Pattern" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(20,90%,10%)] via-[hsl(20,60%,15%)] to-[hsl(20,90%,15%)] opacity-95" />

    <div className="relative z-10 max-w-5xl">
      <Store className="w-24 h-24 text-orange-500 mx-auto mb-10 opacity-80" />

      <h2 className="text-5xl font-black tracking-tight text-white mb-8 leading-tight">
        Estamos a construir o <span className="text-orange-400">maior marketplace alimentar</span> de Angola.
      </h2>

      <div className="h-1 w-40 bg-orange-500 mx-auto rounded-full mb-10" />

      <p className="text-3xl text-white/90 font-light mb-16 leading-normal">
        Gostaríamos que a sua loja fizesse parte deste projeto desde o primeiro dia.
      </p>

      <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-16 py-6 rounded-full text-4xl font-black shadow-[0_0_40px_rgba(249,115,22,0.4)] transform hover:scale-105 transition-all cursor-pointer border border-orange-400">
        Vamos crescer juntos!
      </div>
    </div>
  </div>
);

const dicaNotes = `DICA MUITO IMPORTANTE: Quando apresentares, diz sempre isto: "Nós não somos concorrência. Nós somos um canal de vendas adicional para a sua loja."`;

export const partnerSlides = [
  { component: Slide1Capa, name: 'Capa', template: 'title', description: dicaNotes },
  { component: Slide2Problema, name: 'O problema atual', template: 'two-column', description: dicaNotes },
  { component: Slide3Oportunidade, name: 'A oportunidade', template: 'title', description: dicaNotes },
  { component: Slide4Solucao, name: 'A solução', template: 'title', description: dicaNotes },
  { component: Slide5ComoFunciona, name: 'Como funciona', template: 'timeline', description: dicaNotes },
  { component: Slide6Vantagens, name: 'O que a loja ganha', template: 'two-column', description: dicaNotes },
  { component: Slide7SemCustos, name: 'Mais vendas', template: 'two-column', description: dicaNotes },
  { component: Slide8Visibilidade, name: 'Visibilidade', template: 'title', description: dicaNotes },
  { component: Slide9Logistica, name: 'Logística', template: 'two-column', description: dicaNotes },
  { component: Slide10Simples, name: 'Simples de usar', template: 'three-up', description: dicaNotes },
  { component: Slide11Primeiros, name: 'Quem deve entrar', template: 'two-column', description: dicaNotes },
  { component: Slide12Convite, name: 'Convite', template: 'title', description: dicaNotes },
];
