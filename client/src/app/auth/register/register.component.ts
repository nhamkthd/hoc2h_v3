import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  passwordConfirmation: string;
  errors = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  register() {
    let data = {
      username: this.username,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    }
    this.authService.register(data).then(res => {

      if (res.status == 200) {
        localStorage.setItem('token', res.json().token);
        this.router.navigate(['/']);
      } else {
        this.errors = res.json();
      }
      
    });
  }

}
