import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  // = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an expert at angular', false, new Date()),
  //   new Todo(2, 'Visit morrocco', false, new Date()),
  // ]

  message: String;

  constructor(private todoService:TodoDataService, private router:Router) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  private refreshTodos() {
    this.todoService.retreiveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id){
    this.todoService.deletetodo('in28minutes', id).subscribe(
      response => {
        this.message = `Delete of todo ${id} Successful`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }

}
