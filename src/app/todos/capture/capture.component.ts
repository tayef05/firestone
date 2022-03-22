import { formatDate } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css'],
})
export class CaptureComponent implements OnInit, OnDestroy, OnChanges {
  constructor(private fb: FormBuilder, private server: TasksService) {}
  subscription: Subscription;
  data = 'Tayef';
  dateObj = formatDate('2022-04-21T19:42', 'short', 'en-us');
  priority = ['Low', 'Medium', 'High'];
  myForm = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(5), Validators.required],
    ],
    details: ['', [Validators.required, Validators.minLength(5)]],
    priority: ['Medium', []],
    time: [
      this.dateObj,
      [
        Validators.required,
        Validators.minLength(5),
        Validators.required,
        Validators.min(0),
      ],
    ],
  });
  low = Array();
  medium = Array();
  high = Array();
  todos = [this.low, this.medium, this.high];
  formSubmit(myForm: any) {
    const myArray: string[] = Object.values(myForm);
    this.formChecked(myArray);
    console.log(this.todos, this.medium);
    console.log(myArray);
    this.newData();
  }
  formChecked(exa: string[]) {
    if (exa[0] === 'high') {
      this.high.push(exa);
    } else if (exa[1] === 'low') {
      this.low.push(exa);
    } else {
      this.medium.push(exa);
    }
  }
  ngOnInit() {
    this.subscription = this.server.currentData.subscribe(
      (message) => (message = this.todos)
    );
  }
  newData() {
    this.server.changeData(this.todos);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnChanges() {
    this.newData();
  }
}
