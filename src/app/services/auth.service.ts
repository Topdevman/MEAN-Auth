import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private ACCESSTOKEN_KEY = 'token';
  private loggedIn: boolean = false;

  private jwtHelper = new JwtHelper();

  constructor(private http: Http, private localStorage: LocalStorageService) { }

   isTokenExpired(): Observable<boolean> {
    return Observable.create(observer => {
      const data = <string>this.localStorage.get(this.ACCESSTOKEN_KEY)
        if (data === 'null') {
          observer.next(true)
        } else {
          observer.next(this.jwtHelper.isTokenExpired(data));
        }
    })
  }

  login(username: string, password: string): Observable<any> {
    return Observable.create(observer => {
      this.http.post('/api/auth', JSON.stringify({'username': username, 'password': password}))
        .toPromise()
        .then(data => {
          this.authSuccess(data.json().token);
          observer.complete();
        }).catch(error => observer.error(error));
    })
  }

  authSuccess(token): void {
    this.localStorage.set(this.ACCESSTOKEN_KEY, token)
  }

  isloggedIn(): boolean {
    return this.loggedIn;
  }

  logout() {
    this.localStorage.remove(this.ACCESSTOKEN_KEY);
  }

}
