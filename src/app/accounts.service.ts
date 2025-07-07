import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpClient:HttpClient) { }

  getAccounts():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }
  getAccount(id:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }
  getFilteredAccounts(term:any):Observable<any>{
   return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }

  getSortAccounts(column:string,order:string):Observable<any>{

   return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order)
  }

  getPageAccounts(items:any,page:any):Observable<any>{

   return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+items+"&page="+page);
  }

  deleteAccounts(id:any):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }

  createAccounts(data:any):Observable<any>{
   return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
  }

  updateAccounts(id:any,data:any):Observable<any>{
   return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id,data)
  }

}
