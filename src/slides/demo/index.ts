import Slide01Title from './Slide01Title';
import Slide02Problem from './Slide02Problem';
import Slide03Solution from './Slide03Solution';
import Slide04ComoFunciona from './Slide04ComoFunciona';
import Slide05Impacto from './Slide05Impacto';
import Slide06Vendedores from './Slide06Vendedores';
import Slide07CTA from './Slide07CTA';

export const demoSlides = [
  { component: Slide01Title, name: 'Título', template: 'title' },
  { component: Slide02Problem, name: 'O Desafio', template: 'two-column' },
  { component: Slide03Solution, name: 'A Solução', template: 'three-up' },
  { component: Slide04ComoFunciona, name: 'Como Funciona', template: 'timeline' },
  { component: Slide05Impacto, name: 'Impacto', template: 'data-story' },
  { component: Slide06Vendedores, name: 'Para Vendedores', template: 'three-up' },
  { component: Slide07CTA, name: 'Chamada à Ação', template: 'title' },
];
