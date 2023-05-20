import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;

  ngOnInit() {
    // Retrieve the logged-in user's username from local storage or any other data source
    const stringLoggedInUser = localStorage.getItem('loggedInUser');
    if(stringLoggedInUser) {
      this.user = JSON.parse(stringLoggedInUser);
    }
  }
}
