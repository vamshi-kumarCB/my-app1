import { Component } from '@angular/core';

@Component({
  selector: 'app-vamshi-store',
  templateUrl: './vamshi-store.component.html',
  styleUrls: ['./vamshi-store.component.css']
})
export class VamshiStoreComponent {

   items: any = [
    { productName: 'Iphone', price: 90000, rating: 4.2, freeDelivery: true },
    { productName: 'TV', price: 35000, rating: 3.8, freeDelivery: true },
    { productName: 'Microwave', price: 12000, rating: 2.6, freeDelivery: true },
    { productName: 'Shirt', price: 1500, rating: 4.8, freeDelivery: false },
    { productName: 'Shoes', price: 2200, rating: 3.2, freeDelivery: false },
    { productName: 'Camera', price: 75000, rating: 4.8, freeDelivery: true },
    { productName: 'Pendrive', price: 600, rating: 1.2, freeDelivery: false },
    { productName: 'Washing Machine', price: 15600, rating: 3.4, freeDelivery: true },
   
  ];

delete(index:number){
  this.items.splice(index,1);

}
  filterData:string='';

    search(){
   //   alert(this.filterData)
      this.items=this.items.filter((item:any)=>item.productName.includes(this.filterData));
    }

    freedelvry(){
      this.items= this.items.filter((item:any)=>item.freeDelivery==true);

    }
    sortlow(){
      this.items.sort((a:any,b:any)=>a.price-b.price);
    }

     sorthigh(){
      this.items.sort((a:any,b:any)=>b.price-a.price);
    }
    ratinglow(){
      this.items.sort((a:any,b:any)=>a.rating-b.rating);
    }
    ratinghigh(){
      this.items.sort((a:any,b:any)=>b.rating-a.rating);
    }
    discount(){    
     this.items= this.items.map((item:any)=>{
        item.price= item.price/2;
        return item;
      });
    }

  
    // charges(){
    //   //    this.items= this.items.map((item:any)=>({
    //   //     // ...item,
    //   //     // price:item.price < 3000 ? item.price*2 : item.price 
          
    //   // }));
    //   this.items=this.items.filter((item:any)=>{item.freeDelivery==false;
    //  this.items= this.items.map((item:any)=>{
    //     item.price=item.price+100;
    //     return item;
    //   });
    //   return this.items;
    // })
    // }

    charges() {
    this.items = this.items.map((item: any) => {
      if (!item.freeDelivery) {
        item.price = item.price + 100;
      }
      return item;
    });
}


    totalPrice(){
      let totalCost=this.items.reduce((sum:any,item:any)=>sum+item.price,0);
      alert(totalCost);
    }
    count(){
      let totalCount:number= this.items.length;
      alert(totalCount);
    }

    itemName:string='';
    itemPrice:number=0;
    itemRating:number=0;
    itemDelivery:Boolean=false;

    add(){
      let user={
        productName:this.itemName,
        price:this.itemPrice,
        rating:this.itemRating,
        freeDelivery:this.itemDelivery,

      };
       console.log(user);
      this.items.unshift(user);
    }
    
    }
    
  
