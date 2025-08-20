import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root' // This makes it a singleton service available app-wide
})
export class ThemeService {
  // Signal to hold the current theme state
  private readonly _theme = signal<Theme>('light');

  // Public readonly signal for components to consume
  readonly theme = this._theme.asReadonly();

  constructor() {
    // Load theme from localStorage on service initialization
    this.loadThemeFromStorage();
    
    // Effect runs whenever theme changes - updates DOM and localStorage
    effect(() => {
      const currentTheme = this._theme();
      this.updateDOMTheme(currentTheme);
      this.saveThemeToStorage(currentTheme);
    });
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const newTheme: Theme = this._theme() === 'light' ? 'dark' : 'light';
    this._theme.set(newTheme);
  }

  /**
   * Set a specific theme
   */
  setTheme(theme: Theme): void {
    this._theme.set(theme);
  }

  /**
   * Load theme from localStorage or use system preference
   */
  private loadThemeFromStorage(): void {
    try {
      const savedTheme = localStorage.getItem('app-theme') as Theme;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        this._theme.set(savedTheme);
      } else {
        // Use system preference if no saved theme
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this._theme.set(prefersDark ? 'dark' : 'light');
      }
    } catch (error) {
      console.warn('Could not load theme from localStorage:', error);
      this._theme.set('light'); // Fallback to light theme
    }
  }

  /**
   * Save theme to localStorage
   */
  private saveThemeToStorage(theme: Theme): void {
    try {
      localStorage.setItem('app-theme', theme);
    } catch (error) {
      console.warn('Could not save theme to localStorage:', error);
    }
  }

  /**
   * Update the DOM with the current theme
   */
  private updateDOMTheme(theme: Theme): void {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    
    // Also add/remove class for easier CSS targeting
    root.classList.remove('light-theme', 'dark-theme');
    root.classList.add(`${theme}-theme`);
  }
}
