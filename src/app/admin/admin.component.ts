import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CounterState } from '../store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  counter:Observable<number>;
  constructor(private store:Store<CounterState>){

    this.counter=store.pipe(select('counter'));
    console.log(this.counter);
  }

}
