import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AllbooksComponent } from './allbooks/allbooks.component';

export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  publicationDate: Date;
  status: 'Currently Reading' | 'Have Read' | 'Plan to Read';
  posterUrl: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AllbooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
