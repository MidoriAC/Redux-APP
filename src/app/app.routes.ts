import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./counter').then((c) => c.ParentComponent),
  },
  {
    path: 'books',
    loadComponent: () => import('./books').then((c) => c.BooksComponent),
  },
];
