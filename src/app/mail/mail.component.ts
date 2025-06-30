import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  mail:any[]=[];

  constructor(private _mailService:MailService){

    _mailService.getMail().subscribe(
      (data:any)=>{
        console.log(data);
        this.mail=data;
      },(error:any)=>{
        alert("internal Server Error");

      }
    )
  }

}
