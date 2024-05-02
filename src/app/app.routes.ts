import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    title: 'Home',
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    title: 'Built-in Control Flow - For',
    path: 'for',
    loadComponent: () => import('./built-in-control/for/for.component'),
  },
  {
    title: 'Built-in Control Flow - If',
    path: 'if',
    loadComponent: () => import('./built-in-control/if/if.component'),
  },
  {
    title: 'Built-in Control Flow - Switch',
    path: 'switch',
    loadComponent: () => import('./built-in-control/switch/switch.component'),
  },
  {
    title: 'Defer',
    path: 'defer',
    loadComponent: () =>
      import('./defer/defer-detailed/defer-detailed.component'),
  },
  {
    title: 'Awaiting to be generate',
    path: 'generate-control-flow',
    loadComponent: () =>
      import(
        './generate-control-flow/generate-control-flow/generate-control-flow.component'
      ),
  },
  {
    path: '**',
    loadComponent: () => import('./pagenotfound/pagenotfound.component'),
  },
];
