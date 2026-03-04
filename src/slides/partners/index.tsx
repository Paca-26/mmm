import React from 'react';
import {
  ShoppingCart, Store, Truck, Users,
  Clock, MonitorSmartphone, DollarSign, EyeOff, Target, CheckCircle2,
  XCircle, Globe, Smartphone, Package, Search, Map, Check, Heart, ShieldCheck,
  TrendingUp, Navigation, Star
} from 'lucide-react';
import patternOrange from '@/assets/mmm-pattern-orange.jpg';
import logo from '@/assets/mmm-logo.jpg';
import heroCover from '@/assets/hero-cover.png';

const Slide1Capa = () => (
  <div className="w-full h-full relative font-sans slide-content overflow-hidden text-center">
    <img src={heroCover} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(20,90%,10%)]/95 via-[hsl(20,50%,15%)]/75 to-[hsl(20,90%,10%)]/95" />

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
  <div className="w-full h-full relative flex flex-col p-16 slide-content overflow-hidden">
    <div className="absolute inset-0 bg-slate-50" />
    <div className="absolute top-0 right-0 w-2/3 h-full opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url(${patternOrange})`, backgroundSize: 'cover', maskImage: 'linear-gradient(to left, black, transparent)' }} />
    <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 mix-blend-multiply" />

    <div className="mb-12 relative z-10">
      <div className="flex items-center gap-4 mb-2">
        <div className="h-1 w-12 bg-orange-500 rounded-full" />
        <span className="text-orange-500 font-black uppercase tracking-[0.2em] text-sm">O Contexto</span>
      </div>
      <h2 className="text-5xl font-extrabold text-slate-900">O problema atual</h2>
    </div>

    <div className="grid grid-cols-2 gap-12 flex-1 z-10">
      {/* Left Column */}
      <div className="bg-white rounded-3xl p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-orange-500 transition-colors duration-500" />
        <h3 className="text-2xl font-bold text-slate-800 mb-8 pb-4 border-b border-slate-100 flex items-center gap-3">
          <Target className="w-6 h-6 text-slate-400" />
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
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0 mt-1 border border-slate-100 shadow-sm">
                <item.icon className="w-5 h-5 text-slate-500" />
              </div>
              <span className="pt-3 font-medium">{item.text}</span>
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
  <div className="w-full h-full relative flex items-center justify-center p-16 slide-content overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700" />
    <img src={patternOrange} alt="Pattern" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay" />

    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60" />

    <div className="max-w-4xl relative z-10 text-white flex flex-col">
      <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 self-start border border-white/30 shadow-lg">
        <TrendingUp className="w-5 h-5 text-white" />
        <span className="font-bold tracking-widest uppercase text-sm">Oportunidade de Mercado</span>
      </div>

      <h2 className="text-6xl font-black mb-10 leading-[1.15] drop-shadow-xl border-l-8 border-white pl-8">
        O comércio alimentar <br /> <span className="text-orange-200">está a mudar.</span>
      </h2>

      <p className="text-3xl font-medium text-orange-50 mb-12 pl-10 border-l border-white/30">
        Cada vez mais clientes procuram:
      </p>

      <div className="grid grid-cols-1 gap-6 mb-16 px-10">
        {[
          { text: 'Comprar online facilmente', icon: Smartphone },
          { text: 'Receber no conforto de casa', icon: Truck },
          { text: 'Variedade de lojas num só lugar', icon: Store }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg transform hover:-translate-y-1 transition-all">
            <div className="p-4 bg-white/20 rounded-xl">
              <item.icon className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-bold">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="bg-white text-orange-600 font-black px-10 py-8 rounded-3xl text-3xl text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-b-8 border-orange-200 transform -rotate-1">
        Quem não estiver presente no digital perde mercado.
      </div>
    </div>
  </div>
);

const Slide4Solucao = () => (
  <div className="w-full h-full bg-slate-50 relative p-16 slide-content overflow-hidden flex flex-col">
    <div className="absolute top-0 w-full h-[40%] bg-white rounded-b-[4rem] shadow-sm z-0" />
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url(${patternOrange})`, backgroundSize: 'cover' }} />

    <div className="text-center mb-20 relative z-10 pt-4">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-1 w-8 bg-orange-500 rounded-full" />
        <span className="text-orange-500 font-black uppercase tracking-[0.2em] text-sm">A Solução</span>
        <div className="h-1 w-8 bg-orange-500 rounded-full" />
      </div>
      <h2 className="text-6xl font-extrabold text-slate-900 mb-8 flex items-center justify-center gap-6">
        <img src={logo} alt="Mmm logo" className="h-16 w-auto rounded-xl shadow-md border-2 border-white" />
        Mmm'all4u
      </h2>
      <p className="text-3xl font-medium text-slate-600 max-w-4xl mx-auto leading-relaxed">
        Um shopping digital onde os clientes encontram <strong className="text-orange-600">tudo numa única plataforma.</strong>
      </p>
    </div>

    <div className="grid grid-cols-5 gap-6 max-w-6xl mx-auto flex-1 relative z-10 w-full pt-10">
      {[
        { icon: Store, title: 'Vários\nSupermercados' },
        { icon: Map, title: 'Vários\nTalhos' },
        { icon: Navigation, title: 'Várias\nPeixarias' },
        { icon: Package, title: 'Muitos\nRestaurantes' },
        { icon: Heart, title: 'Produtos\nFrescos' },
      ].map((cat, i) => (
        <div key={i} className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-4 hover:shadow-orange-500/20 hover:border-orange-500/30 transition-all duration-300 group">
          <div className="w-20 h-20 rounded-2xl bg-orange-50 flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
            <cat.icon className="w-10 h-10 text-orange-500 group-hover:text-white" />
          </div>
          <span className="text-2xl font-bold text-slate-800 text-center whitespace-pre-line leading-tight">{cat.title}</span>
        </div>
      ))}
    </div>

    <div className="text-center pb-6 relative z-10">
      <div className="inline-flex items-center gap-3 bg-slate-900 text-white px-12 py-5 rounded-full text-2xl font-bold shadow-2xl border-2 border-slate-800">
        <CheckCircle2 className="text-orange-500 w-8 h-8" />
        A melhor conveniência. Tudo numa única aplicação.
      </div>
    </div>
  </div>
);

const Slide5ComoFunciona = () => (
  <div className="w-full h-full bg-slate-50 relative p-16 slide-content flex flex-col overflow-hidden">
    <div className="absolute blur-sm inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url(${patternOrange})`, backgroundSize: 'cover', filter: 'grayscale(100%)' }} />
    <div className="mb-12 relative z-10">
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
  <div className="w-full h-full relative p-16 slide-content flex flex-col overflow-hidden bg-[hsl(20,90%,10%)]">
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(20,90%,10%)] to-[hsl(20,40%,15%)]" />
    <img src={patternOrange} alt="Pattern" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay" />

    <div className="mb-14 relative z-10 flex justify-between items-end">
      <div>
        <div className="flex items-center gap-4 mb-2">
          <div className="h-1 w-12 bg-orange-500 rounded-full" />
          <span className="text-orange-500 font-black uppercase tracking-[0.2em] text-sm">Vantagens</span>
        </div>
        <h2 className="text-6xl font-black text-white">O que a loja ganha</h2>
      </div>
      <p className="text-2xl text-orange-200 font-medium pb-2 border-b/5 border-white max-w-sm text-right">No primeiro dia<br />na plataforma.</p>
    </div>

    <div className="grid grid-cols-2 gap-x-12 gap-y-10 flex-1 content-center relative z-10">
      {[
        { title: 'Novos clientes', desc: 'Acesso a uma base crescente de compradores em Angola.', icon: Users },
        { title: 'Presença digital', desc: 'A sua loja online 24h por dia, sem complicações técnicas.', icon: Globe },
        { title: 'Vendas adicionais', desc: 'Cresça o negócio sem necessidade de investimento em tecnologia.', icon: TrendingUp },
        { title: 'Logística de entrega', desc: 'Entregas asseguradas por nós, sem custo de estrutura para a loja.', icon: Truck },
        { title: 'Marketing', desc: 'Divulgação contínua dentro da plataforma Mmm.', icon: Heart },
      ].map((item, i) => (
        <div key={i} className="flex gap-6 group bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
          <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center flex-shrink-0 border border-orange-500/30 group-hover:bg-orange-500 transition-colors">
            <item.icon className="w-8 h-8 text-orange-400 group-hover:text-white" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-1.5 group-hover:text-orange-300 transition-colors">{item.title}</h3>
            <p className="text-slate-300 text-lg leading-snug">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Slide7SemCustos = () => (
  <div className="w-full h-full bg-slate-50 relative p-16 slide-content flex items-center overflow-hidden">
    <div className="absolute top-0 right-0 w-2/3 h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url(${patternOrange})`, backgroundSize: 'cover' }} />

    <div className="flex-1 pr-16 bg-white shadow-2xl shadow-slate-200/50 rounded-[3rem] h-full p-16 border border-slate-100 relative z-10 flex flex-col justify-center">
      <div className="flex items-center gap-4 mb-8">
        <DollarSign className="w-10 h-10 text-orange-500 p-2 bg-orange-50 rounded-lg" />
        <h2 className="text-5xl font-extrabold text-slate-900 leading-[1.2]">
          Vender mais,<br /><span className="text-orange-500">sem aumentar custos</span>
        </h2>
      </div>

      <p className="text-2xl font-medium text-slate-500 mb-10 pl-2">Com Mmm'all4u:</p>

      <div className="grid grid-cols-2 gap-6 mb-12">
        {[
          'não precisa criar site',
          'não precisa criar app',
          'não precisa contratar entregadores',
          'não precisa investir em marketing'
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 text-xl text-slate-800 font-bold bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-orange-500/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
              <XCircle className="w-6 h-6 text-slate-400" />
            </div>
            {item}
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-2xl p-8 flex items-center justify-between mt-auto">
        <p className="text-3xl font-black text-white">A plataforma faz isso por si.</p>
        <CheckCircle2 className="w-10 h-10 text-green-400" />
      </div>
    </div>

    <div className="w-[30%] flex flex-col items-center justify-center relative z-10 pl-8">
      <div className="w-full aspect-square rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 shadow-[0_0_80px_rgba(249,115,22,0.4)] flex items-center justify-center p-12 relative overflow-hidden">
        <img src={patternOrange} alt="Pattern" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <TrendingUp className="w-full h-full text-white relative z-10 drop-shadow-xl" />
      </div>
    </div>
  </div>
);

const Slide8Visibilidade = () => (
  <div className="w-full h-full bg-orange-500 relative p-16 slide-content flex flex-col justify-center items-center text-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600" />
    <img src={patternOrange} alt="Pattern" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply" />

    <div className="w-32 h-32 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center mb-10 relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
      <MonitorSmartphone className="w-16 h-16 text-orange-500" />
    </div>

    <h2 className="text-7xl font-black text-white mb-10 relative z-10 drop-shadow-lg">Visibilidade e Escala</h2>

    <p className="text-3xl font-medium text-white max-w-4xl mx-auto mb-16 leading-relaxed relative z-10 bg-black/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20">
      A sua loja passa a aparecer para milhares de clientes que procuram <strong className="font-extrabold text-orange-100">diariamente</strong> na plataforma por:
    </p>

    <div className="flex gap-6 w-full max-w-5xl justify-center relative z-10 mb-16">
      {[
        { t: 'Carne', i: Search },
        { t: 'Peixe', i: Search },
        { t: 'Frescos', i: Search },
        { t: 'Mercearia', i: Search }
      ].map((item, i) => (
        <div key={i} className="bg-white px-8 py-4 rounded-xl text-orange-600 font-bold text-2xl flex items-center gap-3 shadow-lg transform hover:-translate-y-2 transition-transform cursor-default">
          <item.i className="w-6 h-6 text-orange-400" />
          {item.t}
        </div>
      ))}
    </div>

    <div className="relative z-10 w-full mb-8">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-2 bg-black/20" />
      <div className="inline-block bg-slate-900 text-white px-16 py-6 rounded-full text-3xl font-black shadow-2xl relative border-4 border-slate-800">
        Isto significa mais vendas!
      </div>
    </div>
  </div>
);

const Slide9Logistica = () => (
  <div className="w-full h-full bg-slate-50 relative p-16 slide-content">
    <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-5 pointer-events-none" style={{ backgroundImage: `url(${patternOrange})`, backgroundSize: 'cover', maskImage: 'linear-gradient(to top, black, transparent)' }} />
    <div className="mb-14 relative z-10">
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
  <div className="w-full h-full bg-white relative p-16 slide-content flex flex-col overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url(${patternOrange})`, backgroundSize: '100px 100px', backgroundRepeat: 'repeat' }} />
    <div className="text-center mb-16 relative z-10">
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
  <div className="w-full h-full bg-slate-900 relative p-16 slide-content flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800" />
    <img src={patternOrange} alt="Pattern" className="absolute -right-1/4 -top-1/4 w-full h-full object-cover opacity-10 mix-blend-overlay rotate-45 transform" />

    <div className="w-5/12 pr-12 relative z-10 h-full flex flex-col justify-center">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-1 w-12 bg-orange-500 rounded-full" />
        <span className="text-orange-500 font-black uppercase tracking-[0.2em] text-sm">Lançamento</span>
      </div>
      <h2 className="text-6xl font-black text-white mb-8 leading-tight">Quem deve <br /><span className="text-orange-500">entrar<br />primeiro?</span></h2>
      <p className="text-2xl text-slate-300 mb-12 font-light border-l-4 border-slate-700 pl-6 py-2">
        Estamos a selecionar as melhores lojas de Angola para um lançamento estratégico.
      </p>
    </div>

    <div className="w-7/12 pl-12 relative z-10 h-full flex flex-col justify-center">
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden">
        <img src={patternOrange} alt="Pattern" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
        <h3 className="text-3xl font-black text-white mb-10 relative z-10">Vantagens dos Pioneiros:</h3>
        <div className="space-y-6 relative z-10">
          {[
            { text: 'Maior visibilidade na plataforma', icon: EyeOff },
            { text: 'Destaque e badges na loja', icon: Star },
            { text: 'Crescimento conjunto com a nossa marca', icon: TrendingUp },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex items-center gap-6 border border-white/20 shadow-lg">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <item.icon className="w-7 h-7 text-orange-500" />
              </div>
              <span className="text-2xl font-bold text-white leading-tight">{item.text}</span>
            </div>
          ))}
        </div>
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
