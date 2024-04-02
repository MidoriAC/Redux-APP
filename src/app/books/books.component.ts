import { Component, Input, Output, inject } from '@angular/core';
import { BookListComponent } from './book-list.component';
import { BookCollectionComponent } from './book-collection.component';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './books.selectors';
import { AsyncPipe } from '@angular/common';
import { BooksActions, BooksApiActions } from './book.actions';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookListComponent, BookCollectionComponent, AsyncPipe],
  template: `
  <h2>Books</h2>
  <app-book-list class="book-list" [books]="(books$ | async)!" (add)="onAdd($event)" />

  <h2>Collection</h2>
  <app-book-collection class="book-collection" [books]="(bookCollection$ | async)!" (remove)="onRemove($event)" />
  `,
  styles: ``,
})
export class BooksComponent {
  private store = inject(Store);
  private booksService = inject(BooksService);

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

}
