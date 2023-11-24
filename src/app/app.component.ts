import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './Components/todos/todos.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodosComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  constructor(){
    setTimeout(() => {
      this.title = 'check on my todo';
    }, 2000);
  }
}
