import { Component, signal } from '@angular/core';
import { ThemeToggle } from '../theme-toggle/theme-toggle'; // Import the ThemeToggle component

@Component({
  selector: 'app-header',
  imports: [ThemeToggle], // Add ThemeToggle to the imports array
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  title = signal('Kaleaji');
}
