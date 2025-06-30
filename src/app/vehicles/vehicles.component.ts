import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any[]=[];

  constructor(private _vehiclesService:VehiclesService){
    _vehiclesService.getVehicles().subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(error:any)=>{
        alert("internal Server Error");
      }
    )

  }

}
