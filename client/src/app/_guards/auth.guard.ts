import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard {

  constructor (private router: Router) {}

  canActivate () {
    if (localStorage.getItem('token')) return true;
    else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
  
}
