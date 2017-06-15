import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: 'login', redirectTo: 'login' },
  { path: 'register', redirectTo: 'register' },
  { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
