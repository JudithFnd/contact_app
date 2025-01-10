import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', loadChildren: ()=> import('./features/contacts/contacts.routes') },
  { path: '**', redirectTo: '/contacts'} // Redirect any path not found to /contacts
];
