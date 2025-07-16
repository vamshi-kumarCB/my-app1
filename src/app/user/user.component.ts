import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../store/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

   counter:Observable<number>;
    constructor(private store:Store<CounterState>){
  
      this.counter=store.pipe(select('counter'));
      console.log(this.counter);
    }

}
