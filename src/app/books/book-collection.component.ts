import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book-collection',
  standalone: true,
  imports: [],
  template: `
  @for(book of books; track book) {
    <div class="book-item">
      <p>{{ book.volumeInfo.title }}</p>
      <span> by {{ book.volumeInfo.authors }}</span>
      <button (click)="remove.emit(book.id)" data-test="remove-button">
        Remove from Collection
      </button>
    </div>
  }
  `,
  styles: ``,
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
