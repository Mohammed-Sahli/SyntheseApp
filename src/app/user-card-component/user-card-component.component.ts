import { Component } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-user-card-component',
  imports: [],
  templateUrl: './user-card-component.component.html',
  styleUrl: './user-card-component.component.css'
})
export class UserCardComponentComponent {
  user=new User(0,"Alice","alice@gmail.com");
}
