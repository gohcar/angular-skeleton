import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule
({
  imports: 
  [
    RouterModule.forRoot
    ([  
      {
        path: 'lazy-tab',
        loadChildren: 'lazy-tab/lazy-tab.module#LazyTabModule'
      }
    ])
  ],
  exports: 
  [
    RouterModule
  ]
})

export class ExampleRoutingModule {}