import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddQuestionComponent} from './add-question/add-question.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'add-question',
    component:AddQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
