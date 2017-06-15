import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: 'register',
    component: SignupComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
