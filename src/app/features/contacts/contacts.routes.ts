/*
Configuration of specific paths for the contacts module.
Dynamically loads the contact list component.
Used when navigating to '/contacts'.
*/

import { Routes } from '@angular/router'; // Import Routes to define the specific routes of the contact module.

// Defines an array of routes for the contact module only.
const contactsRoute: Routes = [
  {
    // loadComponent: Dynamically imports the ListComponent component. This is useful for applications with large modules, as it improves performance by loading only what is necessary.
    path: '',
    loadComponent: () => import('./list/list.component').then(m => m.ListComponent),

  }
];

// Exports the list of routes to be used when importing into the main app.routes.ts file.
export default contactsRoute;
