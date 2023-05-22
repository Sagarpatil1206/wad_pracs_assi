import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username:string='';

  ngOnInit(){
    let stringAuth = localStorage.getItem('loggedInUser');
    let loggedInUser:{username:string,password:string};
    if(stringAuth){
      loggedInUser = JSON.parse(stringAuth);
      this.username = loggedInUser.username;
    }
  }
}
