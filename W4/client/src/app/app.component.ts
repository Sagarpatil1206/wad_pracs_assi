import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userlogin';
  constructor(private router:Router){}
  navigateToLogin(){
    this.router.navigateByUrl('/login');
  }
  navigateToRegister(){
    this.router.navigateByUrl('/register')
  }
  navigateToProfile(){
    this.router.navigateByUrl('/profile')
  }
}
