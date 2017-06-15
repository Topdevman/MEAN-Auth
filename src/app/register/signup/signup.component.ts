import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: any = {
    username: '',
    email: '',
    password: ''
  };
  loading = false;
  error = '';

  constructor(
        private router: Router,
        private userService: UserService) { }

  ngOnInit() { }

  signup() {
    this.loading = true;
    this.userService.signup(this.model)
        .subscribe(result => {
            if (result === true) {
                // login successful
                this.router.navigate(['/login']);
            } else {
                // login failed
                this.error = 'Informations are incorrect';
                this.loading = false;
            }
        });
  }

  login() {
    this.router.navigate(['/login']);
  }

}
