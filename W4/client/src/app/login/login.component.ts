import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private router:Router){}
  loginUser() {
    // Retrieve existing authInfo array from local storage
    let stringAuth = localStorage.getItem('authInfo');
    let authInfo;
    if(stringAuth){
      authInfo = JSON.parse(stringAuth);
    }
    console.log(authInfo);
    // Check if the entered username and password match any user in the authInfo array
    const user = authInfo.find((userInfo: {username:string,password:string}) => userInfo.username === this.username && userInfo.password === this.password);
    console.log(user);
    if (user) {
      // User login successful
      // Redirect to the profile page or perform any other desired action
      localStorage.setItem('loggedInUser',JSON.stringify(user));
      alert('Login successful!');
      this.router.navigateByUrl('/profile');
    } else {
      // User login failed
      alert('Invalid username or password');
      console.log('Invalid username or password');
    }
  }
}
