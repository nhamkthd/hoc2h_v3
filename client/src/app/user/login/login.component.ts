import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  status: number;
  errors: any;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {}

  login() {

    let data: any;

    data = {
      username: this.username,
      password: this.password
    };

    this.loginService.login(data).then(res => {

      this.status = res.status;

      if (this.status === 200) {
        localStorage.setItem('token', res.json().token);
        localStorage.setItem('user', res.json().user);
        this.router.navigate(['/']);
      } else {
        this.errors = res.json();
      }

    });

  }

}
