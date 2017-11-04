import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'users',
        loadChildren : './users/users.module#UsersModule'
      },
      {
        path: 'categories',
        loadChildren: './categories/categories.module#CategoriesModule'
      },
      {
        path: 'tags',
        loadChildren: './tags/tags.module#TagsModule'
      },
      {
        path: 'permissions',
        loadChildren: './permissions/permissions.module#PermissionsModule'
      },
      {
        path: 'roles',
        loadChildren: './tags/tags.module#TagsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
