import { environment } from './../../../environments/environment.prod';
import { Router } from '@angular/router';
import { Component, OnInit, OnChanges } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  constructor(private router: Router) { }

  ngOnChanges() {

  }

  ngOnInit() {
    let router;
    router = this.router;

    let socket: any;
    socket = io(environment.socketUrl, {query: 'token=' + localStorage.getItem('token')});

    setInterval(function () {
      socket.emit('refresh token', localStorage.getItem('token'));
    }, 1000);

    socket.on('refresh token', function (token) {
      localStorage.setItem('token', token);
    });

    socket.on('destroy token', function(){
      localStorage.removeItem('token');
      router.navigate(['/login']);
    });
  }

}
