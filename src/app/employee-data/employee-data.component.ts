import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent {

  employees: any = [
    { name: 'Sandeep', experience: 4, package: 1200000, role: 'UI Developer' },
    { name: 'Amar', experience: 5, package: 1300000, role: 'UI Developer' },
    { name: 'Raj', experience: 10, package: 1600000, role: 'UI Developer' },
    { name: 'Sunil', experience: 7, package: 1200000, role: 'UI Developer' },
    { name: 'Latha', experience: 2, package: 600000, role: 'Software Developer' },
    { name: 'Rama', experience: 6, package: 1400000, role: 'Software Developer' },
    { name: 'Smitha', experience: 8, package: 1600000, role: 'Data Engineer' },
    { name: 'John', experience: 3, package: 700000, role: 'Data Engineer' },
    { name: 'David', experience: 2, package: 400000, role: 'Data Engineer' },
    { name: 'Smith', experience: 1, package: 300000, role: 'Testing Engineer' },
    { name: 'Sujith', experience: 3.5, package: 350000, role: 'Testing Engineer' },
  ];

    delete(index:number){
      this.employees.splice(index,1);

    }
    sort(){
      this.employees.sort((a:any,b:any)=>a.experience-b.experience);
    }
    sorthigh(){
      this.employees.sort((a:any,b:any)=>b.experience-a.experience);

    }
    data:string='';
    roleFilter(){
    //  alert(this.data);
      this.employees=this.employees.filter((employee:any)=>employee.role==this.data);
    }

    filterData:string='';

    search(){
    //  alert(this.filterData);

      this.employees=this.employees.filter((employee:any)=>employee.name.includes(this.filterData));
    }

    bonus(){
     this.employees= this.employees.map((employee:any)=>{
        employee.package= employee.package+50000;
        return employee;
      })

    }

    totalCost(){
      let totalCost=this.employees.reduce((sum:any,employee:any)=>sum+employee.package,0);
      alert(totalCost);
    }
    empName:string='';
    empExp:number=0;
    empPack:number=0;
    empRole:string='';

    add(){
      let user={
        name:this.empName,
        experience:this.empExp,
        package:this.empPack,
        role:this.empRole

      };

      console.log(user);
      this.employees.unshift(user);

    }

}
