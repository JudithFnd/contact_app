/*
Angular application main routing configuration.
Define redirects and lazy loading of modules.
Redirect root to contact module and manage missing routes.
*/

import { Routes } from '@angular/router'; // Imports the Routes interface used to define the routes of the application.

// Defined routes array thaat contains all the main routes of the application.
export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }, //path: When the URL is empty (the root of the site). redirectTo: '/contacts': Redirects the user to the /contacts path. pathMatch: 'full': Only redirects if the URL is completely empty (/).
  { path: 'contacts', loadChildren: ()=> import('./features/contacts/contacts.routes') }, // path: 'contacts': Activated when the user visits /contacts. loadChildren: Dynamic import (Lazy Loading) of the contacts.routes.ts file. This improves performance by loading modules only when needed.
  { path: '**', redirectTo: '/contacts'} // Redirect any path not found to /contacts
];
