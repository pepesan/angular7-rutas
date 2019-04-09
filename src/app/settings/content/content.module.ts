import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import {CONTENT_ROUTES} from './content.routes';

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CONTENT_ROUTES)
  ]
})
export class ContentModule { }
