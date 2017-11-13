import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Test } from '../model/test';
import { CreateService } from './create.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CreateService]
})
export class CreateComponent implements OnInit {

  constructor(private createService: CreateService, private router: Router) { }
  test= new Test();
  ngOnInit() {
    this.test.level = 0;
    this.test.category_id = 0;
    this.createService.getCategory().then(res => {
      console.log(res);
    });
  }
  public addTest() {
    console.log(this.test);
  }
}
