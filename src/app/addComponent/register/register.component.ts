import { Component } from '@angular/core';
import{RegisterService} from '../dataService/register.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string;
  email: string;
  password: string;
  message: string;

 constructor(private userService: RegisterService,private route:Router) {
  this.username="";
  this.email="";
  this.message="";
  this.password="";
 }

  onSubmit() {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password,
      
    };
    alert("well come" +this.username);
    this.route.navigate(['login'])
       
    this.userService.registerUser(userData).subscribe(
    (response) => {
        this.message = 'Registration successful!';
        console.log('Registration Response:', response);
      },
      (error) => {
        this.message = 'Registration failed. Please try again.';
        console.error('Registration Error:', error);
      }
    );
   }


  }
