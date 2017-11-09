import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private url = environment.apiUrl;

  constructor(private http: Http) {}

  login(data) {
    return this.http.post(this.url + '/api/auth/user-login', data).toPromise().then(res => res).catch(err => err);
  }

}
