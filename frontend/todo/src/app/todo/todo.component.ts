import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number;
  todo: Todo;

  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if(this.id != -1) {
      this.todoService.retreiveTodo('in28minutes', this.id).subscribe(
        response => this.todo = response
      )
    }
  }

  saveTodo(){
    if(this.id == -1){
      this.todoService.createTodo('in28minutes', this.todo).subscribe(
        response => {
          //console.log(response);
          this.router.navigate(['todos']);
        }
      )
    }else{
      this.todoService.updateTodo('in28minutes', this.id, this.todo).subscribe(
        response => {
          this.router.navigate(['todos']);
        }
      )
    }
  }

}
