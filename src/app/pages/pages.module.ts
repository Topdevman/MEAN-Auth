import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { UserService } from '../services/user.service';
import { routing } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [HomeComponent],
  providers: [
    UserService
  ]
})
export class PagesModule { }
