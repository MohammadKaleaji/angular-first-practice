import { Component, inject, OnInit, signal } from '@angular/core'; // Import OnInit
import { Todos as TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError, of } from 'rxjs';
import { NgClass } from '@angular/common'; // Import NgClass

@Component({
  selector: 'app-todos',
  imports: [NgClass], // Add NgClass to imports array
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit{
  // Correctly inject the TodosService, using its alias
  todosService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todosService.getTodosfromAPI().pipe(
      catchError((error) => {
        console.error('Error fetching todos:', error);
        return of([]);
      })
    ).subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }

  toggleCompletion(id: number): void {
    this.todoItems.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
}