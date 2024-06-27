import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email : string="";
  password: string="";
  message: string="";
  constructor(private router: Router) { }

  onSubmit() {
    // Replace this with your authentication logic
    if (this.email === 'admin@kargokart.in' && this.password === 'admin@123') {
      this.message = 'Successful login!';
      this.router.navigate(['admin']);
    } else {
      this.message = 'Incorrect credentials. Please try again.';
    }
   // this.router.navigate(['admin']);
  } 
}
