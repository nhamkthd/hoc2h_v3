import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsComponent } from './tags.component';

const routes: Routes = [
  {
    path: '',
    component: TagsComponent,
    children: [
      {
        path: 'create',
        loadChildren: ''
      },
      {
        path: 'edit',
        loadChildren : ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule {}
