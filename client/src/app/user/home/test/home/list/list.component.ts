import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ListService } from './list.service';
import { Test } from '../../model/test';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ListService]
})
export class ListComponent implements OnInit {
  tests = [];
  users: any;
  constructor(private listservice: ListService) { }

  ngOnInit() {
    this.listservice.getall().then(res => {
      this.tests = res.json();
    });
  }

  getAuthor(user_id) {
    return user_id;
  }

}
