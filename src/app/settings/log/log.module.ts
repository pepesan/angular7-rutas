import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLogComponent } from './list-log/list-log.component';
import {LOG_ROUTES} from './log.route';
import {RouterModule} from '@angular/router';
import { DeleteLogComponent } from './delete-log/delete-log.component';

@NgModule({
  declarations: [ListLogComponent, DeleteLogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'settings/log', // prefijo de rutas
        children: LOG_ROUTES
      }
    ])
  ]
})
export class LogModule { }
