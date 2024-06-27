import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{Lorryreceipt} from '../../models/lorryreceipt';



@Injectable({
  providedIn: 'root'
})
export class LrService {
  private baseUrl='http://localhost:9044/LorryRecepit';
  
  constructor(private http: HttpClient) {}
 //Add Employee
  
   // Add employee
 newLorryReceipt(lrdata:Lorryreceipt):Observable<Object>
 {
  console.log(lrdata);
   return this.http.post(`${this.baseUrl}/createlr`,lrdata,{responseType:"text"})
  }
  
  //Get Employee 
  getLorryReceipt(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listlr`);
  }
    deletelr(lr_number: number): Observable<any> {

    console.log("you are in delete function in Service");
    return this.http.delete(`${this.baseUrl}/deletelr/${lr_number}`);
    //return this.http.delete('${this.baseUrl}/deletelr/${id}');
  }
  
  updatelr(lrdata:Lorryreceipt): Observable<any> {
    //return this.http.put(`http://localhost:9040/Employee/update/${id}`, data,{responseType:"text"});
    console.log("lr servic updated==============================>")
    return this.http.put(`${this.baseUrl}/updatelr`, lrdata,{responseType:"text"});
  }
  deleteLr(id: number):Observable<any>
  {
return this.http.delete(`${this.baseUrl}/removelr/${id}`);
  }
  
  findlr(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/lr/${id}`)
  }

  }

