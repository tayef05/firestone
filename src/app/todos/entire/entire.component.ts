import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-entire',
  templateUrl: './entire.component.html',
  styleUrls: ['./entire.component.css'],
})
export class EntireComponent implements OnInit, OnDestroy, DoCheck {
  data: any[];
  subscription: Subscription;
  constructor(private server: TasksService) {}
  ngOnInit(): void {
    this.subscription = this.server.currentData.subscribe(
      (message) => (this.data = message)
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  lengthChecker(myArray) {
    return myArray.length > 0;
  }
  ngDoCheck() {
    this.subscription = this.server.currentData.subscribe(
      (message) => (this.data = message)
    );
  }
}
