import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentIdService } from '../student-id.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  
    id:number=0;
    constructor(private _studentService:StudentIdService,private _router:Router,private _activatedRoute:ActivatedRoute){
      _activatedRoute.params.subscribe(
        (data:any)=>{
          console.log(data.id);
          this.id=data.id;
        }
      )
      if(this.id){
      _studentService.getStudents(this.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.studentForm.patchValue(data);
        },(error:any)=>{
          alert("Internal Server Error");
        }
      )
     }
    }
  
    submit(){

      if (this.id) {
        //update
      this._studentService.updateStudent(this.id,this.studentForm.value).subscribe(
        (data:any)=>{
          alert("Student record Updated Successfully!");
          this._router.navigateByUrl("/dashboard/student-id");
        },(error:any)=>{
          alert("Internal Server Error")
        }
      )

        
      } else {
        //create
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

}
