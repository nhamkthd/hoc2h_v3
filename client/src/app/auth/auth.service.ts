import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  private url =  environment.apiUrl;

  constructor(private http: Http) {}

  register(data) {
    return this.http.post(this.url+ '/api/register', data).toPromise().then(res => res).catch(err => err);
  }

  login(data) {
    return this.http.post(this.url+ '/api/login', data).toPromise().then(res => res).catch(err => err);
  }

}
