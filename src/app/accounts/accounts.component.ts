import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  accounts:any[]=[];

  constructor(private _accountServices:AccountsService){

    this.loadAccounts();
  }



loadAccounts(){
  this._accountServices.getAccounts().subscribe(

      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(error:any)=>{
        alert("Internal Server Error")
      }
  )

}
  term:any='';

  search(){
    this._accountServices.getFilteredAccounts(this.term).subscribe(

      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(error:any)=>{
        alert("Internal Server Error")
      }
    )

  }

  column:string='';
  order:string='';
  sort(){
    this._accountServices.getSortAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(error:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  items:any='';
  page:any='';

  pagination(){

    this._accountServices.getPageAccounts(this.items,this.page).subscribe(

      (data:any)=>{
        console.log(data);
        this.accounts=data;
      }
    )

  }

  delete(id:any){

      if( confirm("Are you Sure to Delete?")==true){
          this._accountServices.deleteAccounts(id).subscribe(
            (data:any)=>{
              alert("Record Successfully Deleted!")

              this.loadAccounts();
      },(error:any)=>{
        alert("insternal Server Error");
      }
      
    )
    }else{ 
      alert("You have cancelled")

    }

      
  }



}
