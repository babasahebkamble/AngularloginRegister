import { Injectable } from '@angular/core';
import{BranchModel} from '../../models/branch-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private baseUrl='http://localhost:9044/Branch';

  
  constructor(private httpClient: HttpClient) { }

  createBranch(BranchModel:BranchModel):Observable<Object>
  {
    console.log(BranchModel);
    return this.httpClient.post(`${this.baseUrl}/createBranch`,BranchModel,{responseType:"text"});
  }
  //Get Employee 
  getBranchList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/listBranch/`);
  }
}
