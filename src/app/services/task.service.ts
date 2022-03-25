import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from 'src/app/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://127.0.0.1:5000/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task | undefined): Observable<Task[]> {
    const url = `${this.apiUrl}/${task?.id}`;
    return this.http.delete<Task[]>(url);
  }
  updateTaskReminder(task: Task | undefined): Observable<Task[]> {
    const url = `${this.apiUrl}/${task?.id}`;
    return this.http.put<Task[]>(url, task, httpOptions);
  }
  addTask(task: Task | undefined): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
