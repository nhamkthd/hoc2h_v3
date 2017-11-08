import { AuthService } from '../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errors = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    let data: any;
    data = {
      username: this.username,
      password: this.password
    };
    this.authService.login(data).then(res => {

      if (res.status === 200) {
        Cookie.set('token', res.json().token, 300000);
        this.router.navigate(['/']);
      } else {
        this.errors = res.json();
      }

    });
  }

}
