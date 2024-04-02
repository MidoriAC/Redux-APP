import { createReducer, on } from '@ngrx/store';
import { BooksApiActions } from './book.actions';
import { Book } from './book.model';

export const bookFeatureKey = 'books';

export const booksInitialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  booksInitialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);

