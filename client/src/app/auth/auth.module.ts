import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { LoginComponent as LoginUserComponent } from './user/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    LoginUserComponent
  ],
  providers: [AuthService]
})
export class AuthModule { }
