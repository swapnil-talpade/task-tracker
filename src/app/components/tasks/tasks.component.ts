import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../Task';
import {
  requestAddTask,
  requestDeleteTask,
  requestGetTasks,
  requestToggleReminder,
} from 'src/app/store/actions/task.actions';
import { taskSelector } from '../../store/selectors/task.selector';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]> | undefined | any;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(requestGetTasks());
    this.tasks$ = this.store.select(taskSelector);
  }

  deleteTask = (task: any) => {
    this.store.dispatch(requestDeleteTask({ task }));
    this.store.dispatch(requestGetTasks());
  };

  toggleReminder = (task: Task) => {
    const updatedTask: Task = { ...task };
    updatedTask.reminder = !updatedTask.reminder;
    this.store.dispatch(requestToggleReminder({ task: updatedTask }));
    this.store.dispatch(requestGetTasks());
  };

  addTask = (task: any) => {
    this.store.dispatch(requestAddTask({ task }));
    this.store.dispatch(requestGetTasks());
  };
}
