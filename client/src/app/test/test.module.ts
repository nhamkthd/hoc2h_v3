import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule
  ],
  declarations: [
    TestComponent
  ]
})
export class TestModule { }
