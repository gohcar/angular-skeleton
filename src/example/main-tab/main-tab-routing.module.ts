import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { MainTabComponent } from './main-tab.component';

@NgModule
({
  imports: 
  [
    RouterModule.forChild
    ([
      {
        path: 'main-tab',
        component: MainTabComponent
      },
      {
        path: '**',
        component: MainTabComponent
      }
    ])
  ],
  exports: 
  [
    RouterModule
  ]
})

export class MainTabRoutingModule {}