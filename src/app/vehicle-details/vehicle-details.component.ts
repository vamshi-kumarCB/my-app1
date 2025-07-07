import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

  id:number=0;
  vehicleDetails:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _vehiclesService:VehiclesService){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      },(error:any)=>{
        alert("unable to get ID")
      }
    )

    _vehiclesService.getVehicle(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicleDetails=data;

      },(error:any)=>{
        alert("Internal Server Error")
      }
    )
  }

}
