// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Reporte,
} from './';

export default {
  path: 'reporte',
  name: 'Reporte',
  childRoutes: [
    { path: '/', name: 'Reporte', component: Reporte, isIndex: true },
  ],
};
