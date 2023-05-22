import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string='';
  password:string='';

  onLoginClick(){
    console.log(this.username+" "+this.password);
    if(this.username==='' || this.password===''){
      alert("invalid username or password");
      return;
    }
    let stringAuth = localStorage.getItem('authInfo');
    let authInfo:{username:string,password:string}[]=[];
    if(stringAuth){
      authInfo = JSON.parse(stringAuth);
    }

    const user = authInfo.find((user)=> user.username===this.username && user.password===this.password);
    console.log(user);
    if(user){
      localStorage.setItem('loggedInUser',JSON.stringify(user));
      alert('login successful');
    }else{
      alert('Invalid credentials');
    }
  }
}
