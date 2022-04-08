import { createAction, props } from '@ngrx/store';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

export const requestGetTasks = createAction('[Tasks] requestGetTasks');
export const getTasks = createAction(
  '[Tasks] getTasks',
  props<{ tasks: Task[] }>()
);
export const requestAddTask = createAction(
  '[Tasks] requestAddTask',
  props<{ task: Task }>()
);
export const addTask = createAction('[Tasks] addTask', props<{ task: Task }>());
export const requestDeleteTask = createAction(
  '[Tasks] requestDeleteTask',
  props<{ task: Task }>()
);
export const deleteTask = createAction('[Tasks] deleteTask');
// export const addTaskSuccess = createAction(
//   '[Tasks] addTaskSuccess',
//   (task: Task) => task //can also use this
// );
