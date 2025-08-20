import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class Todos {
  todoItems : Array<Todo> = [
    {
      id: 1, // THE UNIQUE ID
      title: 'Buy groceries',
      completed: false,
      userId: 1
    },
    {
      id: 2,
      title: 'Study Angular',
      completed: true,
      userId: 2
    },

  ]
}
