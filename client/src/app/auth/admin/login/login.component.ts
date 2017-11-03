import { AuthService } from '../../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit, OnDestroy {

  username: string;
  password: string;
  errors = [];

  constructor(private authService: AuthService, private router: Router) {}

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  ngOnInit() {
    this.body.classList.add('login-page');
    $(function () {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  ngOnDestroy() {
    this.body.classList.remove('login-page');
  }

  login() {
    let data: any;
    data = {
      username: this.username,
      password: this.password
    };
    this.authService.login(data).then(res => {

      if (res.status === 200) {
        localStorage.setItem('user', res.json());
        this.router.navigate(['/']);
      } else {
        this.errors = res.json();
      }

    });
  }

}
