import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, delay, exhaustMap, map, of, switchMap } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { getTasks, requestGetTasks } from '../actions/task.actions';

@Injectable()
export class TaskEffects {
  constructor(private taskService: TaskService, private actions$: Actions) {}
  getTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestGetTasks),
      switchMap((action) => {
        return this.taskService
          .getTasks()
          .pipe(map((data) => getTasks({ tasks: data })));
      })
    )
  );
}
