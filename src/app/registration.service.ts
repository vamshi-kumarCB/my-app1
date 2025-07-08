import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _httpClient:HttpClient) { }

  userRegistration(data:any):Observable<any>{
    return this._httpClient.post("https://backend-api-kwl0.onrender.com/users",data);
  }
}
