import { ControlComponent } from '../_shared/control/control.component';
import { FooterComponent } from '../_shared/footer/footer.component';
import { SidebarComponent } from '../_shared/sidebar/sidebar.component';
import { HeaderComponent } from '../_shared/header/header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ControlComponent
  ]
})
export class AdminModule { }
