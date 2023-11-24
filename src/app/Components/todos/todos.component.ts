import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../TODO';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[] = [];
  localItem: string | null;
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  deleteTodo(todo: Todo){
    this.todos.splice(this.todos.indexOf(todo),1)
    console.log(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }

  addTodo(todo: Todo){
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
