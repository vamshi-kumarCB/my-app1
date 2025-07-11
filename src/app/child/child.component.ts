import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input() a:number=0;
  // @Output() clickEvent:EventEmitter<number>=new EventEmitter();

  // num:number=0;
  // click(){
  //   this.clickEvent.emit(this.num);
  // }

  name:string='';

  @Output() sendEvent:EventEmitter<string>=new EventEmitter();
  send(){
    this.sendEvent.emit(this.name);
  }

}
