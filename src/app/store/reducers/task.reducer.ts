import { createReducer, on, State } from '@ngrx/store';
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
    return [...state, action.task];
  }),
  on(addTask, (state, action) => {
    return [...state, action.task];
  }),
  on(requestDeleteTask, (state: any, action) => {
    const updatedTasks = state.filter(
      (task: Task) => task.id != action.task.id
    );
    return [...updatedTasks];
  }),
  on(deleteTask, (state) => {
    return [...state];
  }),
  on(requestToggleReminder, (state) => {
    return [...state];
  }),
  on(toggleReminder, (state) => {
    return [...state];
  })
);
