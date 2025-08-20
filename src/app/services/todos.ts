import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Todos {
  http = inject(HttpClient);
  /** this the hard coded todos array
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
  */
  getTodosfroAPI(){
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<Todo>>(url);
  }
}
