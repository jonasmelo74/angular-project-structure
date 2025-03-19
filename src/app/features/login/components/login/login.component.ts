import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  imports: [NgSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  faCoffee = faCoffee;
  cities = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' }
  ];
}
