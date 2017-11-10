import { environment } from './../../../environments/environment.prod';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    let router;
    router = this.router;

    let socket: any;
    socket = io(environment.socketUrl, {query: 'token=' + localStorage.getItem('token')});

    setInterval(function () {
      let token: string;
      token = localStorage.getItem('token');
      if (token !== null) {
        socket.emit('refresh token', token);
      }
    }, 5000);

    socket.on('refresh token', function (token) {
      localStorage.setItem('token', token);
    });

    socket.on('destroy token', function(){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    });
  }

}
