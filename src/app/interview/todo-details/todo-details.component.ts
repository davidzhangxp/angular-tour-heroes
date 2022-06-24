import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../interview.component';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() todoEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onPost() {
    this.todoEmitter.emit(this.todo.color);
  }
}
