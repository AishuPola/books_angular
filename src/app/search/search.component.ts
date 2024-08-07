import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { Book } from '../app.component';
import { FormsModule } from '@angular/forms';
import { AllbooksComponent } from '../allbooks/allbooks.component';

import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, AllbooksComponent, MatFormFieldModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchTerm: string = '';
  books: any;
  filteredBooks: any;

  constructor(private booksservice: BooksService, private router: Router) {}
  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.booksservice.getBooks().then((data) => {
      this.books = data;
      this.filteredBooks = this.books;
    });
  }
  onSearch() {
    this.filteredBooks = this.books.filter(
      (book: any) =>
        book.title
          .toLowerCase()
          .includes(this.searchTerm.toLocaleLowerCase()) ||
        book.category
          .toLowerCase()
          .includes(this.searchTerm.toLocaleLowerCase())
    );
  }

  deletebook(book_to_be_deleted: Book) {
    this.booksservice
      .delete_the_book(book_to_be_deleted)
      .then(() => this.loadBooks());
  }
}
