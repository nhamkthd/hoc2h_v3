import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CKEditorModule} from 'ng2-ckeditor';
import { TestRoutingModule } from './test-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule,
    CKEditorModule,
    FormsModule,
    CustomFormsModule
  ],
  declarations: [HomeComponent, CreateComponent]
})
export class TestModule { }
