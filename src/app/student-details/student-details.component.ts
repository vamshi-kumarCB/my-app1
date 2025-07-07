import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentIdService } from '../student-id.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

  id:number=0;
  studentDetails:any={};

  constructor(private _activatedRoute:ActivatedRoute, private _studentIdServices:StudentIdService){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      },(error:any)=>{

        alert("Unable to get id");
      }
    )

    _studentIdServices.getStudents(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.studentDetails=data;
      },(error:any)=>{
        alert("Internal Server Error");
      }

    )
  }

}
