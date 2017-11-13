import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddQuestionComponent implements OnInit {
  question_body:string;
  constructor() { 
  
  }

  ngOnInit() {
    this.question_body = "<p>Nội dung câu hỏi</p>";
  }


}
