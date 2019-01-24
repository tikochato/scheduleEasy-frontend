// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  REPORTE_LIMPIAR_DATA,
} from './constants';

export function limpiarData() {
  return {
    type: REPORTE_LIMPIAR_DATA,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case REPORTE_LIMPIAR_DATA:
      return {
        ...state,
        columns: [],
        data: [],
        reporteGenerado: false,
      };

    default:
      return state;
  }
}
