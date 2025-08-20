import { Directive, effect, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodo {
  isCompleted = input<boolean>(false);
  constructor() { }
  stylesEffect = effect(() => {
    console.log(this.isCompleted()); // just to console log , the highlight logic is on 
  });
}
