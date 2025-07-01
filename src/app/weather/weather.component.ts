import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  weather:any[]=[]

  constructor(private _weatherServices:WeatherService){

          _weatherServices.getWeather().subscribe(

            (data:any)=>{
                console.log(data);
                this.weather[0]=data;
                console.log(this.weather);
            },(error:any)=>{
              alert("internal server error")
            }
          )

          
  }

}
