import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = Tasks;

  constructor() { }

  ngOnInit(): void {
  }

}
