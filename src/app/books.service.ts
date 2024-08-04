import { Injectable } from '@angular/core';
import { Book } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  getBooks(): Promise<Book> {
    return fetch(`https://669a42869ba098ed61fef725.mockapi.io/books`).then(
      (res) => res.json()
    );
  }
  delete_the_book(book_to_be_deleted: any) {
    return fetch(
      `https://669a42869ba098ed61fef725.mockapi.io/books/${book_to_be_deleted.id}`,
      {
        method: 'DELETE',
      }
    ).then((res) => res.json());
  }

  constructor() {}
}
