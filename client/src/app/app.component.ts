import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    let router;
    router = this.router;

    let socket: any;
    socket = io(environment.apiUrl);

    setInterval(function () {
      socket.emit('refresh token', localStorage.getItem('token'));
    }, 10000);

    socket.on('refresh token', function (token) {
      localStorage.setItem('token', token);
    });

    socket.on('destroy token', function () {
      localStorage.removeItem('token');
      router.navigate(['/login']);
    });

  }



}
