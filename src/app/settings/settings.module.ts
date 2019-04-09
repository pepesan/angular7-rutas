import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { MainSettingsComponent } from './main-settings/main-settings.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import {ContentModule} from './content/content.module';
import {LogModule} from './log/log.module';

@NgModule({
  declarations: [MainSettingsComponent, UserSettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'settings/main',
        component: MainSettingsComponent
      },
      {
        path: 'settings/users',
        component: UserSettingsComponent
      },
    ]),
    ContentModule,
    LogModule
  ]
})
export class SettingsModule { }
