import { Component, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public registationForm:FormGroup=new FormGroup({

    name:new FormControl(),
    email:new FormControl(),
    mobile:new FormControl(),
    password:new FormControl()
  })

  constructor(private _registrationService:RegistrationService, private _router:Router){}


  register(){

    console.log(this.registationForm.value);

    this._registrationService.userRegistration(this.registationForm.value).subscribe(

      (data:any)=>{
        alert("Registration Successful");
        this._router.navigateByUrl("/");
      },(error:any)=>{
        alert("Internal Server Error");
      }

    )
  }

}
