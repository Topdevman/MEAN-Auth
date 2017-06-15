import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userInfo: any = [];
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => {
        this.userInfo = users;
      })
  }

  logout() {
    this.authService.logout();
  }

}
