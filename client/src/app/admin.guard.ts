import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AdminGuard {

  constructor (private router: Router) {}

  canActivate () {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/auth/admin/login']);
      return false;
    }
  }
}
