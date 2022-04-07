import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';
import { addTask, requestGetTasks } from 'src/app/store/actions/task.actions';
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

  deleteTask = (task: Task | undefined) => {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks$ = this.tasks$.filter((t: any) => t.id !== task?.id))
      );
  };

  toggleReminder = (task: Task) => {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  };

  addTask = (task: any) => {
    this.store.dispatch(addTask(task));
    this.taskService.addTask(task).subscribe((task) => this.tasks$.push(task));
  };
}
