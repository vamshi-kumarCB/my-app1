import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  

  constructor(private _httpClient:HttpClient) { }
  apiURL:string='assets/data.json'
  // apiURL:string='https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction';

getVehicles():Observable<any>{
  return this._httpClient.get(this.apiURL);

}

getVehicle(id:number):Observable<any>{
  return this._httpClient.get(this.apiURL+"/"+id);

}

getFilteredVehicles(term:any):Observable<any>{
  return this._httpClient.get(this.apiURL+"?filter="+term);


}

getSortedVehicles(column:string,order:string):Observable<any>{
  return this._httpClient.get(this.apiURL+"?sortBy="+column+"&order="+order);


}
getPaginatedVehicles(items:any,page:any):Observable<any>{
  return this._httpClient.get(this.apiURL+"?limit="+items+"&page="+page);
  
}

deleteVehicle(id:any):Observable<any>{
  return this._httpClient.delete(this.apiURL+"/"+id);


}

createVehicle(data:any):Observable<any>{
  return this._httpClient.post(this.apiURL,data);

}

updateVehicle(id:any,data:any):Observable<any>{
  return this._httpClient.put(this.apiURL+"/"+id,data);

}


}
