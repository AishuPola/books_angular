import { Book } from './app.component';

export type NewBook = Omit<Book, 'id'>;
