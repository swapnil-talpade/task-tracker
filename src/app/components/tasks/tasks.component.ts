import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';
import {
  addTask,
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
  constructor(private taskService: TaskService, private store: Store) {}

  ngOnInit(): void {
    // this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    this.store.dispatch(requestGetTasks());
    this.tasks$ = this.store.select(taskSelector);
  }

  deleteTask = (task: any) => {
    this.store.dispatch(requestDeleteTask({ task }));
    this.store.dispatch(requestGetTasks());
  };

  toggleReminder = (task: Task) => {
    // task.reminder = !task.reminder;
    console.log(task);
    const updatedTask: Task = { ...task };
    updatedTask.reminder = !updatedTask.reminder;
    console.log(updatedTask);
    // console.log(task);
    // const updatedTask: Task = {
    //   ...task,
    //   reminder: !task.reminder,
    // };
    // console.log(updatedTask);
    // console.log(`getting triggered`);
    this.store.dispatch(requestToggleReminder({ task: updatedTask }));
    this.store.dispatch(requestGetTasks());
    // this.taskService.updateTaskReminder(task).subscribe();
  };

  addTask = (task: any) => {
    console.log(task);
    this.store.dispatch(requestAddTask({ task }));
    this.store.dispatch(requestGetTasks());
    // this.tasks$ = this.store.select(taskSelector);
    // this.taskService.addTask(task).subscribe((task) => this.tasks$.push(task));
  };
}
