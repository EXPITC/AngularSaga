import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { TASKS , taskType} from '../mock-task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTaskFromBackEnd(): Observable<taskType[]> {
    const tasks = of(TASKS);
    return tasks
  }
}
