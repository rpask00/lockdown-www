import { Component } from '@angular/core';

@Component({
  selector: 'lockdown-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly window: Window = window;
}
