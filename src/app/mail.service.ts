import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _httpclient:HttpClient) { }
  getMail(){

   return this._httpclient.get("https://jsonplaceholder.typicode.com/todos");
  }
}
