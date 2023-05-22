import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username:string='';
  password:string=''

  constructor(private router:Router){}

  onSubmit(){
    if(this.username=='' || this.password==''){
      alert("enter valid email and password");
      return
    }
    let authInfo:{username:string,password:string}[]=[];
    let stringAuth = localStorage.getItem('authInfo');
    
    if(stringAuth){
      authInfo = JSON.parse(stringAuth);
    }
    authInfo.push({
      "username":this.username,
      "password":this.password
    })
    localStorage.setItem('authInfo',JSON.stringify(authInfo));
    this.router.navigateByUrl('/login');
  }
}
