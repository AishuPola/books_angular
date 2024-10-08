import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { Book } from '../app.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { AllbooksComponent } from '../allbooks/allbooks.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { debounceTime, switchMap, catchError, of } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    AllbooksComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchForm!: FormGroup;

  searchTerm: string = '';
  books: any;
  filteredBooks: any;
  // UserService: any;

  constructor(
    private fb: FormBuilder,
    private booksservice: BooksService,
    private router: Router,
    private userService: UserService
  ) {
    this.searchForm = this.fb.group({ search: '' });
  }
  ngOnInit() {
    // this.loadBooks();
    this.searchForm
      .get('search')
      ?.valueChanges.pipe(
        debounceTime(300),
        switchMap((searchTerm) => this.userService.searchUser(searchTerm))
      )
      .subscribe((data) => {
        console.log(data);
        this.filteredBooks = data;
      });
  }

  loadBooks() {
    this.booksservice.getBooks().then((data) => {
      this.books = data;
      this.filteredBooks = this.books;
    });
  }
  // onSearch() {
  //   this.filteredBooks = this.books.filter(
  //     (book: any) =>
  //       book.title
  //         .toLowerCase()
  //         .includes(this.searchTerm.toLocaleLowerCase()) ||
  //       book.category
  //         .toLowerCase()
  //         .includes(this.searchTerm.toLocaleLowerCase())
  //   );
  // }

  deletebook(book_to_be_deleted: Book) {
    this.booksservice
      .delete_the_book(book_to_be_deleted)
      .then(() => this.loadBooks());
  }
}
