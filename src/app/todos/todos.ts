import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { NgClass, TitleCasePipe } from '@angular/common';
import { Todos as TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgClass, TitleCasePipe],
  templateUrl: './todos.html',
  styleUrls: ['./todos.scss'],
})
export class Todos implements OnInit {
  private todosService = inject(TodosService);

  todoItems = signal<Todo[]>([]);
  searchTerm = signal<string>('');

  // live-filtered list
  filteredTodos = computed(() => {
    const q = this.searchTerm().trim().toLowerCase();
    const list = this.todoItems();
    return q ? list.filter(t => t.title.toLowerCase().includes(q)) : list;
  });

  ngOnInit(): void {
    this.todosService.getTodosfromAPI().pipe(
      catchError((error) => {
        console.error('Error fetching todos:', error);
        return of([] as Todo[]);
      })
    ).subscribe((todos) => this.todoItems.set(todos));
  }

  toggleCompletion(id: number): void {
    this.todoItems.update(todos =>
      todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }
}
