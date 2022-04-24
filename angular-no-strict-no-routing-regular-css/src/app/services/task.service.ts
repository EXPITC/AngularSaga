import { Injectable } from '@angular/core';
import { TASKS , taskType} from '../mock-task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTaskFromBackEnd(): taskType[] {
    return TASKS;
  }
}
