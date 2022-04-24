import { Component, OnInit } from '@angular/core';
import { taskType } from '../../mock-task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks!: taskType[];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService
      .getTaskFromBackEnd()
      .subscribe((tasks) => (this.tasks = tasks));
  }
}
