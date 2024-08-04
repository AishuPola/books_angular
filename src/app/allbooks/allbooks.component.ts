import { Component, Input, Output, output } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Book } from '../app.component';
import { BooksService } from '../books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-allbooks',
  standalone: true,
  imports: [MatCardModule, MatCard, RouterLink, MatIconModule],
  templateUrl: './allbooks.component.html',
  styleUrl: './allbooks.component.scss',
})
export class AllbooksComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}
  @Input() everybook!: Book;

  @Input() id!: number;
  @Output() delete_the_book = new EventEmitter<any>();

  deleteRecipe() {
    this.delete_the_book.emit(this.everybook);
  }
}
