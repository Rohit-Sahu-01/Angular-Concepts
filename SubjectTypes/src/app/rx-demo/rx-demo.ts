import { Component } from '@angular/core';
import { Rx } from '../rx';
import { CommonModule } from '@angular/common';

interface Log {
  value: number;
  time: string;
}

@Component({
  selector: 'app-rx-demo',
  imports: [CommonModule],
  templateUrl: './rx-demo.html',
  styleUrl: './rx-demo.css',
})


export class RxDemo {

  value = 1;

  subjectData: Log[] = [];
  behaviorData: Log[] = [];
  replayData: Log[] = [];

  constructor(private service: Rx) {}

  getTime() {
    return new Date().toLocaleTimeString();
  }

  emit() {
    this.service.emitValue(this.value++);
  }

  reset() {
    this.subjectData = [];
    this.behaviorData = [];
    this.replayData = [];
    this.value = 1;
  }

  subscribeSubject() {
    this.service.subject$.subscribe(res => {
      this.subjectData.push({ value: res, time: this.getTime() });
    });
  }

  subscribeBehavior() {
    this.service.behaviorSubject$.subscribe(res => {
      this.behaviorData.push({ value: res, time: this.getTime() });
    });
  }

  subscribeReplay() {
    this.service.replaySubject$.subscribe(res => {
      this.replayData.push({ value: res, time: this.getTime() });
    });
  }

}
