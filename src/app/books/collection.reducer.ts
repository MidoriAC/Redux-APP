import { createReducer, on } from '@ngrx/store';
import { BooksActions } from './book.actions';

export const collectionFeatureKey = 'collection';

export const collectionInitialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  collectionInitialState,
  on(BooksActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),
  on(BooksActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);
