import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
  template: `
    <app-header />
    <app-home />
  `,
  styles: [
    `h2 {
      color: red;
    }`
  ],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
