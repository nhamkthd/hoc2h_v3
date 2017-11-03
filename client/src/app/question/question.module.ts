import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule
  ],
  declarations: [QuestionComponent]
})
export class QuestionModule { }
