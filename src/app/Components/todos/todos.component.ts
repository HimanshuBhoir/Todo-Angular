import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../TODO';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[];

  constructor(){
    this.todos = [
      {
        sno: 1,
        title: 'this is title',
        desc: 'this is description',
        active: true,
      },
      {
        sno: 2,
        title: 'this is title',
        desc: 'this is description',
        active: true,
      },
      {
        sno: 3,
        title: 'this is title',
        desc: 'this is description',
        active: true,
      },
    ]
  }

  deleteTodo(todo: Todo){
    this.todos.splice(this.todos.indexOf(todo),1)
    console.log(todo)
  }
}
