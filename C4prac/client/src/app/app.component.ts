import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private router:Router){}

  onLoginClick(){
    this.router.navigateByUrl('/login');
  }

  onRegisterClick(){
    this.router.navigateByUrl('/register');
  }

  onProfileClick(){
    this.router.navigateByUrl('/profile');
  }
}
