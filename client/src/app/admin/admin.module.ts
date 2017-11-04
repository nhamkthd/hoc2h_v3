import { HomeComponent } from './home/home.component';
import { ControlComponent } from './_shared/control/control.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { SidebarComponent } from './_shared/sidebar/sidebar.component';
import { HeaderComponent } from './_shared/header/header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PermissionsModule } from './permissions/permissions.module';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    UsersModule,
    CategoriesModule,
    PermissionsModule
  ],
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ControlComponent,
    HomeComponent,
  ]
})
export class AdminModule { }
