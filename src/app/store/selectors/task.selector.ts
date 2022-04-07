import { createFeatureSelector } from '@ngrx/store';
import * as fromStore from '../reducers/task.reducer';

export const taskSelector = createFeatureSelector<fromStore.TaskState>('tasks');
