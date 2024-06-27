import { Injectable } from '@angular/core';
import{Location} from '../../models/location';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicelocationService {
  private baseUrl='http://51.20.92.140:7575';
  //private baseUrl='http://localhost:7575';
  //private baseUrl ='http://ec2-13-48-13-199.eu-north-1.compute.amazonaws.com:7575';
  //http://ec2-13-48-13-199.eu-north-1.compute.amazonaws.com:7575/get
  //private baseUrl='http://ec2-13-48-13-199.eu-north-1.compute.amazonaws.com:7575';



  constructor(private httpClient: HttpClient) { }

  createLocation(location:Location):Observable<Object>
  {
    console.log(location);
    return this.httpClient.post(`${this.baseUrl}/AddnewLocation`,location,{responseType:"text"});
  }
  //Get Employee 
  getlocationList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/listlocation`);
  }


}
