import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isVisible:Boolean=false;
public loginForm:FormGroup=new FormGroup({

  email:new FormControl(),
  password:new FormControl()
})

constructor(private _loginService:LoginService, private _router:Router){}

login(){
  console.log(this.loginForm.value);
  this._loginService.userLogin(this.loginForm.value).subscribe(
    (data:any)=>{
      alert("Login SuccessFuly!");
      this._router.navigateByUrl("/dashboard");
       sessionStorage.setItem('token',data.token);
    },(error:any)=>{
      alert("Internal Server Error");
    }
  )
}

show(){
  this.isVisible = !this.isVisible;

}
}
