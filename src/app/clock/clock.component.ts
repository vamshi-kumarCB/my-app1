import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  user:User={
    name:'vamshi',
    mobile:8341960094,
    email:'vamshimanu97@gmail.com',
    age:29
  }

}
