import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../store/store';
import { decrement, increment } from '../store/counter.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private store:Store<CounterState>){}
  increment(){
    this.store.dispatch(increment());


  }

  decrement(){
    this.store.dispatch(decrement());
    

  }

}
