import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CounterActions = createActionGroup({
  source: 'Counter',
  events: {
    'Increment': props<{ value: number }>(),
    'Multiply': emptyProps(),
    'Split': emptyProps(),
    'Reset': emptyProps(),
  }
});
