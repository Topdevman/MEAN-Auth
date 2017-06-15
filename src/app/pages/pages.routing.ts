import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from '../services/auth-guard.service';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
