import {Component} from '@angular/core';
import {Login} from "../store/root.state";

@Component({
  selector: 'lockdown-logins-list',
  templateUrl: './logins-list.component.html',
  styleUrls: ['./logins-list.component.scss']
})
export class LoginsListComponent {
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  logins: Login[] = [
    {
      id: 1,
      username: 'insecureee',
      email: 'insecured@gmail.com',
      password: '123456',
      usedAt: '2019-01-01',
      linked_websites: ['google.com'],
    },
    {
      id: 1,
      username: 'insecureee',
      email: 'insecured@gmail.com',
      password: '123456',
      usedAt: '2019-01-01',
      linked_websites: ['google.com'],
    },
    {
      id: 1,
      username: 'insecureee',
      email: 'insecured@gmail.com',
      password: '123456',
      usedAt: '2019-01-01',
      linked_websites: ['google.com'],
    },
    {
      id: 1,
      username: 'insecureee',
      email: 'insecured@gmail.com',
      password: '123456',
      usedAt: '2019-01-01',
      linked_websites: ['google.com'],
    },
    {
      id: 1,
      username: 'insecureee',
      email: 'insecured@gmail.com',
      password: '123456',
      usedAt: '2019-01-01',
      linked_websites: ['google.com'],
    },
    {
      id: 1,
      username: 'insecureee',
      email: 'insecured@gmail.com',
      password: '123456',
      usedAt: '2019-01-01',
      linked_websites: ['google.com'],
    },
  ]
}
