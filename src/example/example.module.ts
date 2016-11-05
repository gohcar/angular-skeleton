import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { ExampleComponent }     from './example.component';
import { MainTabModule }        from './main-tab/main-tab.module';
import { ExampleRoutingModule } from './example-routing.module';

@NgModule
({
  imports: 
  [
    BrowserModule,
    HttpModule,
    ExampleRoutingModule,
    MainTabModule
  ],
  declarations: 
  [
    ExampleComponent
  ],
  providers: 
  [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: 
  [
    ExampleComponent
  ] 
})

export class ExampleModule {}
