import { createReducer, on } from '@ngrx/store';
import { CounterActions } from './counter.actions';

export const counterFeatureKey = 'counter';

export interface State {
  counter: number;
}

export const counterInitialState: State = {
  counter: 0,
};

export const counterReducer = createReducer(
  counterInitialState,
  on(CounterActions.increment, (state, { value }) => ({
    counter: (state.counter + value),
  })),
  on(CounterActions.multiply, (state) => ({
    counter: (state.counter * 2),
  })),
  on(CounterActions.split, (state) => ({
    counter: (state.counter / 2),
  })),
  on(CounterActions.reset, () => ({
    counter: 0,
  })),
);
