import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './features/login/components/login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AsideComponent } from './shared/components/aside/aside.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, NavbarComponent, AsideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'default-app';
}
