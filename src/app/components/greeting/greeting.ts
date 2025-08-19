import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.scss'
})
export class Greeting {
  titlegreet = signal('Hello - inside greeting ');
  message = input('Default Greeting message- inside greeting')
}
