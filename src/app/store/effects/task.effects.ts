import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, delay, exhaustMap, map, of, switchMap } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import {
  requestAddTask,
  addTask,
  getTasks,
  requestGetTasks,
} from '../actions/task.actions';
import { Task } from 'src/app/Task';

@Injectable()
export class TaskEffects {
  constructor(private taskService: TaskService, private actions$: Actions) {}
  getTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestGetTasks),
      switchMap((action) => {
        return this.taskService.getTasks().pipe(
          map((data) => {
            console.log(`below is `);
            console.log(data);
            return getTasks({ tasks: data });
          })
        );
      })
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAddTask),
      switchMap((action: any) => {
        // console.log(`before`);
        // console.log(action.text);
        // console.log(action.type);
        const task: Task = {
          text: action.text,
          reminder: action.reminder,
          day: action.day,
        };
        return this.taskService.addTask(task).pipe(
          map((data: any) => {
            console.log(`below is data`);
            console.log(data);
            return addTask({ task: data });
          })
        );
      })
    )
  );
}
