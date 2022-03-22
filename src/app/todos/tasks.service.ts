import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private dataSource = new BehaviorSubject([]);
  currentData = this.dataSource.asObservable();

  constructor() {}
  changeData(message: any[]) {
    this.dataSource.next(message);
  }
}
