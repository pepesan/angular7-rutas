import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLogComponent } from './list-log/list-log.component';
import {LOG_ROUTES} from './log.route';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ListLogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'settings/log',
        children: LOG_ROUTES
      }
    ])
  ]
})
export class LogModule { }
