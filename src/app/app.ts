import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
  `,
  styles: [
    `main{
      padding: 16px;
    }`
  ],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
