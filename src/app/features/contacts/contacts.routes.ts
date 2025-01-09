const contactRoute = [
  {
    path: '',
    loadComponent: () => import('./list/list.component').then(m => m.ListComponent),

  }
];

export { contactRoute };
