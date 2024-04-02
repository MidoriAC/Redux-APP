import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from './book.model';

export const BooksActions = createActionGroup({
  source: 'Book',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  }
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});
