import { Component } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {
  images:any[]=[];

  constructor(private _imagesServices:ImagesService){

    _imagesServices.getImages().subscribe(
      (data:any)=>{
        console.log(data);
        this.images=data;
      },(error:any)=>{
        alert("internal Server Error");
      }



    )

  }

}
