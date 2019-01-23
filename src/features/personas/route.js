// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  PersonasList,
} from './';

export default {
  path: 'personas',
  name: 'Personas list',
  childRoutes: [
    { path: '/', name: 'Personas list', component: PersonasList, isIndex: true },
  ],
};
