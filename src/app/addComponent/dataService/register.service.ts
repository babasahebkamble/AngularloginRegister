import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  
    private apiUrl = 'http://localhost:9042/Employee'; // Replace with your backend API URL
  
    constructor(private http: HttpClient) {}
  
    registerUser(user: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/Register`, user);
    }
}
