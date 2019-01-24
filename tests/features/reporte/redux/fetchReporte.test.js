import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  REPORTE_FETCH_REPORTE_BEGIN,
  REPORTE_FETCH_REPORTE_SUCCESS,
  REPORTE_FETCH_REPORTE_FAILURE,
  REPORTE_FETCH_REPORTE_DISMISS_ERROR,
} from '../../../../src/features/reporte/redux/constants';

import {
  fetchReporte,
  dismissFetchReporteError,
  reducer,
} from '../../../../src/features/reporte/redux/fetchReporte';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('reporte/redux/fetchReporte', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchReporte succeeds', () => {
    const store = mockStore({});

    return store.dispatch(fetchReporte())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', REPORTE_FETCH_REPORTE_BEGIN);
        expect(actions[1]).toHaveProperty('type', REPORTE_FETCH_REPORTE_SUCCESS);
      });
  });

  it('dispatches failure action when fetchReporte fails', () => {
    const store = mockStore({});

    return store.dispatch(fetchReporte({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', REPORTE_FETCH_REPORTE_BEGIN);
        expect(actions[1]).toHaveProperty('type', REPORTE_FETCH_REPORTE_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissFetchReporteError', () => {
    const expectedAction = {
      type: REPORTE_FETCH_REPORTE_DISMISS_ERROR,
    };
    expect(dismissFetchReporteError()).toEqual(expectedAction);
  });

  it('handles action type REPORTE_FETCH_REPORTE_BEGIN correctly', () => {
    const prevState = { fetchReportePending: false };
    const state = reducer(
      prevState,
      { type: REPORTE_FETCH_REPORTE_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchReportePending).toBe(true);
  });

  it('handles action type REPORTE_FETCH_REPORTE_SUCCESS correctly', () => {
    const prevState = { fetchReportePending: true };
    const state = reducer(
      prevState,
      { type: REPORTE_FETCH_REPORTE_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchReportePending).toBe(false);
  });

  it('handles action type REPORTE_FETCH_REPORTE_FAILURE correctly', () => {
    const prevState = { fetchReportePending: true };
    const state = reducer(
      prevState,
      { type: REPORTE_FETCH_REPORTE_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchReportePending).toBe(false);
    expect(state.fetchReporteError).toEqual(expect.anything());
  });

  it('handles action type REPORTE_FETCH_REPORTE_DISMISS_ERROR correctly', () => {
    const prevState = { fetchReporteError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: REPORTE_FETCH_REPORTE_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchReporteError).toBe(null);
  });
});

