import { createReducer, on, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTasks, requestGetTasks } from '../actions/task.actions';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';

export interface TaskState {
  task: ReadonlyArray<Task>;
}

const initialState: ReadonlyArray<Task> = [];

export const taskReducer = createReducer(
  initialState,
  on(requestGetTasks, (state) => [...state]),
  on(getTasks, (state, action) => {
    return action.tasks;
  })
);
