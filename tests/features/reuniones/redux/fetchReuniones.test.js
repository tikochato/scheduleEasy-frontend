import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  REUNIONES_FETCH_REUNIONES_BEGIN,
  REUNIONES_FETCH_REUNIONES_SUCCESS,
  REUNIONES_FETCH_REUNIONES_FAILURE,
  REUNIONES_FETCH_REUNIONES_DISMISS_ERROR,
} from '../../../../src/features/reuniones/redux/constants';

import {
  fetchReuniones,
  dismissFetchReunionesError,
  reducer,
} from '../../../../src/features/reuniones/redux/fetchReuniones';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('reuniones/redux/fetchReuniones', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchReuniones succeeds', () => {
    const store = mockStore({});

    return store.dispatch(fetchReuniones())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', REUNIONES_FETCH_REUNIONES_BEGIN);
        expect(actions[1]).toHaveProperty('type', REUNIONES_FETCH_REUNIONES_SUCCESS);
      });
  });

  it('dispatches failure action when fetchReuniones fails', () => {
    const store = mockStore({});

    return store.dispatch(fetchReuniones({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', REUNIONES_FETCH_REUNIONES_BEGIN);
        expect(actions[1]).toHaveProperty('type', REUNIONES_FETCH_REUNIONES_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissFetchReunionesError', () => {
    const expectedAction = {
      type: REUNIONES_FETCH_REUNIONES_DISMISS_ERROR,
    };
    expect(dismissFetchReunionesError()).toEqual(expectedAction);
  });

  it('handles action type REUNIONES_FETCH_REUNIONES_BEGIN correctly', () => {
    const prevState = { fetchReunionesPending: false };
    const state = reducer(
      prevState,
      { type: REUNIONES_FETCH_REUNIONES_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchReunionesPending).toBe(true);
  });

  it('handles action type REUNIONES_FETCH_REUNIONES_SUCCESS correctly', () => {
    const prevState = { fetchReunionesPending: true };
    const state = reducer(
      prevState,
      { type: REUNIONES_FETCH_REUNIONES_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchReunionesPending).toBe(false);
  });

  it('handles action type REUNIONES_FETCH_REUNIONES_FAILURE correctly', () => {
    const prevState = { fetchReunionesPending: true };
    const state = reducer(
      prevState,
      { type: REUNIONES_FETCH_REUNIONES_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchReunionesPending).toBe(false);
    expect(state.fetchReunionesError).toEqual(expect.anything());
  });

  it('handles action type REUNIONES_FETCH_REUNIONES_DISMISS_ERROR correctly', () => {
    const prevState = { fetchReunionesError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: REUNIONES_FETCH_REUNIONES_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchReunionesError).toBe(null);
  });
});

