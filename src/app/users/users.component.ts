import { Component } from '@angular/core';
import { UserCardComponentComponent } from "../user-card-component/user-card-component.component";

@Component({
  selector: 'app-users',
  imports: [UserCardComponentComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {


}
