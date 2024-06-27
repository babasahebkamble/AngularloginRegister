import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{Receiver} from '../../models/receiver'

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {
  private baseUrl='http://localhost:9044/Receiver';

  constructor(private httpClient:HttpClient) { }
 
  createReceiver(receiver:Receiver):Observable<Object>
  {
    console.log(receiver);
    return this.httpClient.post(`${this.baseUrl}/createReceiver`,receiver,{responseType:"text"});
  }
  //Get Employee 
  getReceiverList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/listReceiver/`);
  }
}
