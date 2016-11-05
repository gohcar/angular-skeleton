import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { ChildComponent } from './child.component';

@NgModule
({
  imports: 
  [
    BrowserModule
  ],
  declarations: 
  [
    ChildComponent
  ],
  providers: 
  [
  ],
  bootstrap:
  [
    ChildComponent
  ]
})

export class ChildModule {}