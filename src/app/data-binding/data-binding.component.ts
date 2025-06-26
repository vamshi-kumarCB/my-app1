import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {


  //interpolation
  userName:string='Vamshi';
  age:number=29;

  //property binding
  isDataPresent:Boolean= true;


  //event binding
  click(){
      alert("Hello");
  }

  name(){
     alert("Name")
  }

  //two way data-binding
  mobile:string='+91';
   name1(){
     console.log(this.mobile);
  }



}
