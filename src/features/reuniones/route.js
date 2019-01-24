// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Reuniones,
} from './';

export default {
  path: 'reuniones',
  name: 'Reuniones',
  childRoutes: [
    { path: '/', name: 'Reuniones', component: Reuniones, isIndex: true },
  ],
};
