import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./material/practicando/practicando.component').then(m => m.PracticandoComponent)
      }
];
