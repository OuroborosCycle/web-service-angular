import { Component, OnInit } from '@angular/core';
import users_data from '../users.json';

interface Users {
  idUser: Number;
  prenom: String;
  nom: String;
  mail: String;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: Users[] = users_data;
  isShown = false;
 
  toggleDisplay() {
    this.isShown = !this.isShown;
  }

}
