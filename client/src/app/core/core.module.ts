import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModule } from '../admin/admin.module';
import { TestModule } from '../test/test.module';
import { QuestionModule } from '../question/question.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    AdminModule,
    TestModule,
    QuestionModule,
    AuthModule,
  ],
  declarations: []
})
export class CoreModule {}
