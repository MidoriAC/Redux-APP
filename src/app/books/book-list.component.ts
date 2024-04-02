import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  template: `
  @for (book of books; track book) {
    <div class="book-item">
      <p>{{ book.volumeInfo.title }}</p>
      <span> by {{ book.volumeInfo.authors }}</span>
      <button (click)="add.emit(book.id)" data-test="add-button">
        Add to Collection
      </button>
    </div>
  }
  `,
  styles: ``
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
