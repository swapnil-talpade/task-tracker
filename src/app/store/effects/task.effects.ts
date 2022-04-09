import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, delay, exhaustMap, map, of, switchMap } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import {
  requestAddTask,
  addTask,
  getTasks,
  requestGetTasks,
  requestDeleteTask,
  deleteTask,
  requestToggleReminder,
  toggleReminder,
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
            return getTasks({ tasks: data });
          })
        );
      })
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAddTask),
      switchMap((action) => {
        return this.taskService.addTask(action.task).pipe(
          map((data: any) => {
            return addTask({ task: data });
          })
        );
      })
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestDeleteTask),
      switchMap((action) => {
        return this.taskService.deleteTask(action.task).pipe(
          map((data) => {
            return deleteTask();
          })
        );
      })
    )
  );

  toggleReminder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestToggleReminder),
      switchMap((action) => {
        console.log('action');
        console.log(action.task);
        return this.taskService.updateTaskReminder(action.task).pipe(
          map((data) => {
            console.log(`below is data`);
            console.log(data);
            return toggleReminder();
          })
        );
      })
    )
  );
}
