import {
  REPORTE_LIMPIAR_DATA,
} from '../../../../src/features/reporte/redux/constants';

import {
  limpiarData,
  reducer,
} from '../../../../src/features/reporte/redux/limpiarData';

describe('reporte/redux/limpiarData', () => {
  it('returns correct action by limpiarData', () => {
    expect(limpiarData()).toHaveProperty('type', REPORTE_LIMPIAR_DATA);
  });

  it('handles action type REPORTE_LIMPIAR_DATA correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: REPORTE_LIMPIAR_DATA }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
