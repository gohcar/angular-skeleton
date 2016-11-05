import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { MainTabRoutingModule } from './main-tab-routing.module';
import { MainTabComponent }     from './main-tab.component';

@NgModule
({
  imports: 
  [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MainTabRoutingModule
  ],
  declarations: 
  [
    MainTabComponent
  ],
  providers: 
  [
  ],
  bootstrap:
  [
  ]
})

export class MainTabModule {}