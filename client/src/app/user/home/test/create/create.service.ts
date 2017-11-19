import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class CreateService {

  constructor(private http: Http) { }
  getCategory() {
    return this.http.get(environment.apiUrl + '/api/category').toPromise().then(res => res).catch(err => err);
  }
  createTest(data) {
    return this.http.post(environment.apiUrl + '/api/test', data).toPromise().then(res => res).catch(err => err);
  }
}
