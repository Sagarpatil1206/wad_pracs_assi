import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string='';
  password: string='';

  constructor(private router:Router){}
  registerUser() {
    if(this.username==='' || this.password==='') alert("please fill all fields");
    // Retrieve existing authInfo array from local storage or create a new one
    let stringAuth = localStorage.getItem('authInfo');
    let authInfo:{username:string,password:string}[]=[];
    if(stringAuth){
      authInfo = JSON.parse(stringAuth);
    }

    // Add new user registration data to the authInfo array
    authInfo?.push({
      username: this.username,
      password: this.password
    });
    this.router.navigateByUrl('/login');
    // Store the updated authInfo array back into local storage
    localStorage.setItem('authInfo', JSON.stringify(authInfo));
    // Redirect to the login page
    // You can inject the Router service and navigate programmatically here
  }
}
