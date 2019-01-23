import {
  Menu,
} from './';

export default {
  path: '/',
  name: 'Inicio',
  childRoutes: [
    { path: 'menu',
      name: 'Menu',
      component: Menu,
      isIndex: true,
    },
  ],
};
