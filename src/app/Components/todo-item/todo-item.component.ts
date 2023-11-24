import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../TODO';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo){
    this.todoDelete.emit(todo)
    console.log('delete item')
  }
}
