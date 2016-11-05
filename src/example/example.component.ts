import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component
({
  selector: 'example',  
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})

export class ExampleComponent 
{

  constructor(private router:Router, 
              private route:ActivatedRoute) {}

  go_to(route:string)
  {
    this.router.navigate([route], {skipLocationChange: true, relativeTo: this.route});
  }
}
