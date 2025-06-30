import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  shopping:any[]=[];

  constructor(private _shoppingSerivces:ShoppingService){

    _shoppingSerivces.getShopping().subscribe(
      (data:any)=>{
        console.log(data);
        this.shopping=data;
      },(error:any)=>{
        alert("internal Server Error");
      }
    )

  }


}
