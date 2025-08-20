import { Component, inject, OnInit, signal } from '@angular/core'; // Import OnInit
import { Todos as TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit{
  // Correctly inject the TodosService, using its alias
  todosService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    console.log(this.todosService.todoItems);
    this.todoItems.set(this.todosService.todoItems);
  }
}