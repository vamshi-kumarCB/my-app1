import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentIdService {

  constructor(private _httpClient:HttpClient) { }

  getstudent(){
     return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }

  getFilteredStudent(term:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  
  }

  getSortedStudent(column:string,order:string):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);

}
getPaginatedStudent(items:any,page:any):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+items+"&page="+page);
  
}
deleteStudent(id:any):Observable<any>{
  return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);

}
createStudent(data:any):Observable<any>{
  return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);

}
}
