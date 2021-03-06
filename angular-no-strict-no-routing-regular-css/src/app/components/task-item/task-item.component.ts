import { Component, Input, OnInit } from '@angular/core';
import { taskType } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: taskType;
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}
}
