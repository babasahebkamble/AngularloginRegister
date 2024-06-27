import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{Shipper} from '../../models/shipper';


@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  private baseUrl='http://localhost:9044/shipper';

  constructor(private httpClient:HttpClient) { }
 
  createshiper(Shipper:Shipper):Observable<Object>
  {
    console.log(Shipper);
    return this.httpClient.post(`${this.baseUrl}/createShiper`,Shipper,{responseType:"text"});
  }
  //Get Employee 
  getShipperList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/listShipper/`);
  }

}
