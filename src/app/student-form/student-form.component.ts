import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  public studentForm:FormGroup=new FormGroup({

    name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    email:new FormControl(),
    mobile:new FormControl(),
    age:new FormControl(),
    address:new FormGroup({

      city:new FormControl(),
      state:new FormControl(),
      pin:new FormControl(),
    }),
      type:new FormControl(),

      cards:new FormArray([]),

  })

    get cardsFormArray(){
      return this.studentForm.get('cards') as FormArray;
    }

    add(){
      this.cardsFormArray.push(
        new FormGroup({
          number:new FormControl(),
          expiry:new FormControl(),
          cvv:new FormControl(),
        })
      )
    }

    delete(id:number){
      this.cardsFormArray.removeAt(id);

    }


  constructor(){
    this.studentForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        console.log(data);
        if(data==true){
          this.studentForm.addControl('busFee',new FormControl);
          this.studentForm.removeControl('hostelFee');

        }else{
          this.studentForm.addControl('hostelFee', new FormControl);
          this.studentForm.removeControl('busFee');

        }

      },(error:any)=>{
        alert("Unable to get data")
      }
    )
  }

  submit(){
    console.log(this.studentForm.value);
  }

}
