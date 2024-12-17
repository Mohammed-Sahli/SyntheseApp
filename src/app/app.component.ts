import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponentComponent } from "./footer-component/footer-component.component";
import { HeaderComponentComponent } from './header-component/header-component.component';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponentComponent ,FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SyntheseApp';

ngOnInit(){
  let user: User=new User(23,"Alice","alice@gmail.com")
  console.log(user);
}
}
