import { Component } from '@angular/core';
import { User } from './models/user'
//Component is metadata
//You can add code instead of the urls with just template or styles
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//The appComponent is a class 
export class AppComponent {

  user: User = {
    firstName: '',
    lastName: '',
    emailAddress: '',
  };
  
  title = 'my-first-project';
  users: User[] = [{
    firstName: 'Thomas',
    lastName: 'Chan',
    emailAddress: 'tchan@somewhere.com'
  }, {
  firstName: 'Sam',
  lastName: 'Norman',
  emailAddress: 'sam@somewhere.com'
}
]
  
  onSave() {
    console.log(this.users)
}
  
}