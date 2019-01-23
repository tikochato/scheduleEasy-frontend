import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  PERSONAS_FETCH_PERSONAS_BEGIN,
  PERSONAS_FETCH_PERSONAS_SUCCESS,
  PERSONAS_FETCH_PERSONAS_FAILURE,
  PERSONAS_FETCH_PERSONAS_DISMISS_ERROR,
} from '../../../../src/features/personas/redux/constants';

import {
  fetchPersonas,
  dismissFetchPersonasError,
  reducer,
} from '../../../../src/features/personas/redux/fetchPersonas';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('personas/redux/fetchPersonas', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchPersonas succeeds', () => {
    const store = mockStore({});

    return store.dispatch(fetchPersonas())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', PERSONAS_FETCH_PERSONAS_BEGIN);
        expect(actions[1]).toHaveProperty('type', PERSONAS_FETCH_PERSONAS_SUCCESS);
      });
  });

  it('dispatches failure action when fetchPersonas fails', () => {
    const store = mockStore({});

    return store.dispatch(fetchPersonas({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', PERSONAS_FETCH_PERSONAS_BEGIN);
        expect(actions[1]).toHaveProperty('type', PERSONAS_FETCH_PERSONAS_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissFetchPersonasError', () => {
    const expectedAction = {
      type: PERSONAS_FETCH_PERSONAS_DISMISS_ERROR,
    };
    expect(dismissFetchPersonasError()).toEqual(expectedAction);
  });

  it('handles action type PERSONAS_FETCH_PERSONAS_BEGIN correctly', () => {
    const prevState = { fetchPersonasPending: false };
    const state = reducer(
      prevState,
      { type: PERSONAS_FETCH_PERSONAS_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchPersonasPending).toBe(true);
  });

  it('handles action type PERSONAS_FETCH_PERSONAS_SUCCESS correctly', () => {
    const prevState = { fetchPersonasPending: true };
    const state = reducer(
      prevState,
      { type: PERSONAS_FETCH_PERSONAS_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchPersonasPending).toBe(false);
  });

  it('handles action type PERSONAS_FETCH_PERSONAS_FAILURE correctly', () => {
    const prevState = { fetchPersonasPending: true };
    const state = reducer(
      prevState,
      { type: PERSONAS_FETCH_PERSONAS_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchPersonasPending).toBe(false);
    expect(state.fetchPersonasError).toEqual(expect.anything());
  });

  it('handles action type PERSONAS_FETCH_PERSONAS_DISMISS_ERROR correctly', () => {
    const prevState = { fetchPersonasError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: PERSONAS_FETCH_PERSONAS_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchPersonasError).toBe(null);
  });
});

