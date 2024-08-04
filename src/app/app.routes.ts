import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'search/:id',
    component: EditBooksComponent,
  },
  {
    path: 'addbooks',
    component: AddbooksComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
