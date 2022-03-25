import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string | undefined = 'seap';
  day: string | undefined = 'swap';
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit = () => {
    if (!this.text) {
      alert('please add a task');
      return;
    }
    const newTask: any = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  };
}
