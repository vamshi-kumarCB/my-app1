import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  num:number=0;

  data:string='vamshi';

  recivedData(value:string){
    this.data=value;

  }

  // display(value:number){
  //   alert(value);

  // }

}
