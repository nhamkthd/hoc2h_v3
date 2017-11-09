import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  private url = environment.apiUrl;

  constructor(private http: Http) { }

  /**
   *
   * @param data = {username: string, password: string, passwordConfirmation: string, email: string}
   */
  userRegister(data) {
    return this.http.post(this.url + '/api/auth/user-register', data).toPromise().then(res => res).catch(err => err);
  }

  /**
   *
   * @param data = {username or email: string, password: string}
   */
  userLogin(data) {
    return this.http.post(this.url + '/api/auth/user-login', data).toPromise().then(res => res).catch(err => err);
  }

  /**
   *
   * @param data = {username: string, password: string}
   */
  adminLogin(data) {
    return this.http.post(this.url + '/api/auth/admin-login', data).toPromise().then(res => res).catch(err => err);
  }

}
