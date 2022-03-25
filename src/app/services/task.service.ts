import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from 'src/app/Task';
import { TASKS } from '../mock-task';
TASKS;
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
