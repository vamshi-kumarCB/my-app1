import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {

  public accountForm:FormGroup= new FormGroup({

    account_name: new FormControl(),
    account_number:new FormControl(),
    available_balance:new FormControl(),
    profie_picture:new FormControl(),

  }) 

  id:number=0;

  constructor(private _accountsServices:AccountsService,private _router:Router, private _activatedRoute:ActivatedRoute) {

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      }

    )
    if(this.id){
    _accountsServices.getAccount(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.accountForm.patchValue(data);
      },(error:any)=>{
        alert("internal Server Error");
      }
    )
    }
  }

  submit(){

    if (this.id) {
      //Update
      this._accountsServices.updateAccounts(this.id,this.accountForm.value).subscribe(

        (data:any)=>{
          alert("Account Details Updated Successfully!");
          this._router.navigateByUrl("/dashboard/accounts");
        },(error:any)=>{
          alert("Internal Server Error");
        }
      )
      
    } else {
      //create
       console.log(this.accountForm.value);
    this._accountsServices.createAccounts(this.accountForm.value).subscribe(

      (data:any)=>{
        alert("Record Created Successfully!");
        this._router.navigateByUrl("/dashboard/accounts");

      },(error:any)=>{
        alert("Internal Server Error");

      }
    )
      
    }

  }


}
