import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { TagsRoutingModule } from './tags-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TagsRoutingModule
  ],
  declarations: [TagsComponent]
})
export class TagsModule { }
