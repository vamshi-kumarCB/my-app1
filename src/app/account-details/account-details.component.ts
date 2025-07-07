import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  id:number=0;
  accountDetails:any={};

  constructor(private _activatedRoute:ActivatedRoute, private _accountsServices:AccountsService) {

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      },(error:any)=>{
        alert("Unable to Get ID");
      }
    )

    _accountsServices.getAccount(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.accountDetails=data;
      },(error:any)=>{
        alert("Internal Server Error");
      }
    )
    
  }

}
