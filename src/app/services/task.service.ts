import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'appliction/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = "http://localhost:5000/tasks"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.patch<Task>(url, task, httpOptions);
  }
}
