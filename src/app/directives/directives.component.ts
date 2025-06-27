import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  states:string[]=['Andhra Pradesh','Telangana','Tamilnadu','Kerala','Karnataka']

  ages:number[]=[20,30,40,79,76];

  products:any[]=[
    {productName:'TV',price:15000,rating:1.8},
    {productName:'AC',price:35000,rating:4.8},
    {productName:'Parker Pen',price:500,rating:4.8},
    {productName:'Watch',price:1500,rating:3.8},
    {productName:'Mobile',price:18600,rating:2.2},
    {productName:'Laptop',price:150000,rating:3.5},

  ]

  date:any = new Date(); 

}
