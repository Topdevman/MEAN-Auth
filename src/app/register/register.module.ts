import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';

import { routing } from './register.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [SignupComponent],
  providers: [
    UserService,
  ]
})
export class RegisterModule { }
