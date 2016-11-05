import { NgModule } from '@angular/core';

import { LazyTabRoutingModule } from './lazy-tab-routing.module';
import { LazyTabComponent }     from './lazy-tab.component';

@NgModule
({
  imports: 
  [
    LazyTabRoutingModule
  ],
  declarations: 
  [
    LazyTabComponent
  ],
  providers: 
  [
  ],
  bootstrap:
  [
  ]
})

export class LazyTabModule {}