import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent {
  studentdetails:any[]=[];

  constructor(private _studentService:StudentIdService){

    this.loadStudent();
  }


  loadStudent(){

    this._studentService.getstudent().subscribe(

        (data:any)=>{
          console.log(data);
          this.studentdetails=data;
        },(error:any)=>{
          alert("Internal Server Error")
        }
    )
  }

  term:string='';
  search(){
    this._studentService.getFilteredStudent(this.term).subscribe(
       (data:any)=>{
        console.log(data);
        this.studentdetails=data;
      },(error:any)=>{
        alert("internal Server Error");
      }

    )
  }

  column:string='';
  order:string='';
  sort(){
    console.log(this.column,this.order);
    this._studentService.getSortedStudent(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.studentdetails=data;
      },(error:any)=>{
        alert("internal Server Error");
      }
    )
  }

  items:any='';
  page:any='';
  pagination(){
    console.log(this.items,this.page);
    this._studentService.getPaginatedStudent(this.items,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.studentdetails=data;
      },(error:any)=>{
        alert("internal server error");
      }
    )
  }

  delete(id:any){

    if(confirm("Are you sure to Delete?")==true){
      this._studentService.deleteStudent(id).subscribe(
      (data:any)=>{
        alert("Record deleted successfully!")
        this.loadStudent();

      },(error:any)=>{
        alert("insternal Server Error");
      }
    )
    }else{
      alert("You have cancelled")
    }
    
  }




}
