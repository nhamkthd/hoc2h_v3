import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errors = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    let data = {
      username: this.username,
      password: this.password
    }
    this.authService.login(data).then(res => {

      if (res.status == 200) {
        localStorage.setItem('token', res.json().token);
        this.router.navigate(['/']);
      } else {
        this.errors = res.json();
      }

    });
  }

}
