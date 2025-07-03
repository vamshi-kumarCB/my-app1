import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentIdService } from '../student-id.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  public studentForm:FormGroup = new FormGroup({
      name:new FormControl(),
      email:new FormControl(),
      phone:new FormControl(),
      dob:new FormControl(),
      city:new FormControl(),
      profile_picture:new FormControl(),
  
    })
  
    constructor(private _studentService:StudentIdService,private _router:Router){}
  
    submit(){
      console.log(this.studentForm.value);
      this._studentService.createStudent(this.studentForm.value).subscribe(
        (data:any)=>{
          alert("Student reccord add Successfully");
          this._router.navigateByUrl("/dashboard/student-id");
        },(error:any)=>{
          alert("Internal Server Error")
        }
      )
    }

}
