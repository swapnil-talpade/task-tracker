import { createReducer, on, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addTask,
  deleteTask,
  getTasks,
  requestAddTask,
  requestDeleteTask,
  requestGetTasks,
  requestToggleReminder,
  toggleReminder,
} from '../actions/task.actions';
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
  }),
  on(requestAddTask, (state, action) => {
    console.log(action.task);
    console.log(action);
    return [...state, action.task];
  }),
  on(addTask, (state, action) => {
    return [...state, action.task];
  }),
  on(requestDeleteTask, (state, action) => {
    console.log(action);
    return [...state];
  }),
  on(deleteTask, (state) => {
    return [...state];
  }),
  on(requestToggleReminder, (state) => {
    console.log(`called`);
    return [...state];
  }),
  on(toggleReminder, (state) => {
    return [...state];
  })
);
