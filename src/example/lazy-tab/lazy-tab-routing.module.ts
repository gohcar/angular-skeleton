import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { LazyTabComponent } from './lazy-tab.component';

@NgModule
({
  imports: 
  [
    RouterModule.forChild
    ([
      {
        path: '',
        component: LazyTabComponent
      }
    ])
  ],
  exports: 
  [
    RouterModule
  ]
})

export class LazyTabRoutingModule {}