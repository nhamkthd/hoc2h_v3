import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionsComponent } from './permissions.component';

const routes: Routes = [
  {
    path : '',
    component : PermissionsComponent,
    children : [
      {
        path : 'create',
        loadChildren : ''
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionsRoutingModule { }
