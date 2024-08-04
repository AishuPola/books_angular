import { Injectable } from '@angular/core';
import { Book } from './app.component';
import { NewBook } from './book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  getBooks(): Promise<Book> {
    return fetch(`https://669a42869ba098ed61fef725.mockapi.io/books`).then(
      (res) => res.json()
    );
  }
  delete_the_book(book_to_be_deleted: Book) {
    return fetch(
      `https://669a42869ba098ed61fef725.mockapi.io/books/${book_to_be_deleted.id}`,
      {
        method: 'DELETE',
      }
    ).then((res) => res.json());
  }

  addbook(bookadd: NewBook) {
    // this.movieList.push(newMovie);

    // Post
    // 1. method
    // 2. body - Data & JSON
    // 3. Header - JSON

    return fetch(`https://669a42869ba098ed61fef725.mockapi.io/books`, {
      method: 'POST',
      body: JSON.stringify(bookadd),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  getRecipeById(id: string) {
    return fetch(
      `https://669a42869ba098ed61fef725.mockapi.io/books/${id}`
    ).then((res) => res.json());
  }
  editbook() {}
  constructor() {}
}
