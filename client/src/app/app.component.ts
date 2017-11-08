import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    let socket: any;
    socket = io('http://localhost:3000');

    setInterval(function () {
      socket.emit('refresh token', localStorage.getItem('token'));
    }, 240000);

    socket.on('refresh token', function (token) {
      localStorage.setItem('token', token);
    });

  }

}
