import { AuthService } from './../../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  username: string;
  password: string;
  passwordConfirmation: string;
  errors = [];

  constructor(private authService: AuthService, private router: Router) {}

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  ngOnInit() {
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

  register() {
    let data: any;
    data = {
      username: this.username,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    };
    this.authService.register(data).then(res => {

      if (res.status === 200) {
        localStorage.setItem('token', res.json().token);
        this.router.navigate(['/']);
      } else {
        this.errors = res.json();
      }
    });
  }

}
