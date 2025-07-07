import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public vehicleForm:FormGroup = new FormGroup({
    Vehicle:new FormControl(),
    cost:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    tyres:new FormControl(),
    manufacturer:new FormControl(),
    image:new FormControl(),

  })

  id:number=0;
  constructor(private _vehiclesService:VehiclesService,private _router:Router, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      }
    )

    if(this.id){

    _vehiclesService.getVehicle(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicleForm.patchValue(data);
      },(error:any)=>{
        alert("Internal Server Error");

      }
    )
    }
  }

  submit(){

    if (this.id) {
      //update
      this._vehiclesService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Vehicle Record Updated Successfully!");
          this._router.navigateByUrl("/dashboard/vehicles");
        },(error:any)=>{
          alert("Internal server Error");
        }
      )
      
    } else {
      //Create

      console.log(this.vehicleForm.value);
    this._vehiclesService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Vehicle reccord add Successfully");
        this._router.navigateByUrl("/dashboard/vehicles");
      },(error:any)=>{
        alert("Internal Server Error");
      }
    )
      
    }
   
  }

}
