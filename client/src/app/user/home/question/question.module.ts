import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CKEditorModule} from 'ng2-ckeditor';

import { SharedModule } from '../../shared/shared.module';
import { QuestionRoutingModule } from './question-routing.module';
import { HomeComponent } from './home/home.component';
import { AddQuestionComponent } from './add-question/add-question.component';

@NgModule({
  imports: [
    CommonModule,
    CKEditorModule,
    QuestionRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, AddQuestionComponent],
  exports: [
  ]
})
export class QuestionModule { }
