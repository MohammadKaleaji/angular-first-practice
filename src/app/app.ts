import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <h2>This is a test</h2>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
