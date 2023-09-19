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
      used_at: '2019-01-01',
      linked_websites: ['google.com'],
      collections: ['Utilities', 'Social Media', "Utilities", 'Games', 'Streaming'],
    },
    {
      id: 2,
      username: 'insecureee',
      email: 'insecured@gmail.com',
      password: '123456',
      used_at: '2019-01-01',
      linked_websites: ['google.com'],
      collections: ['Utilities', 'Social Media', "Utilities", 'Games', 'Streaming'],
    },
    {
      id: 31,
      username: 'insecureee',
      email: 'insecured@gmail.com',
      password: '123456',
      used_at: '2019-01-01',
      linked_websites: ['google.com'],
      collections: ['Utilities'],
    },
    {
      id: 4,
      username: 'insecureee',
      email: 'insecured@gmail.com',
      password: '123456',
      used_at: '2019-01-01',
      linked_websites: ['google.com'],
      collections: ['Utilities'],
    },
    {
      id: 5,
      username: 'insecureee',
      email: 'insecured@gmail.com',
      password: '123456',
      used_at: '2019-01-01',
      linked_websites: ['google.com'],
      collections: ['Utilities'],
    },
    {
      id: 6,
      username: 'insecureee',
      email: 'insecured@gmail.com',
      password: '123456',
      used_at: '2019-01-01',
      linked_websites: ['google.com'],
      collections: ['Utilities'],
    },
  ]
}
