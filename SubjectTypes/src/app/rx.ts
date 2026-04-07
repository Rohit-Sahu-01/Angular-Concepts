import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Rx {
  subject$ = new Subject<number>();
  behaviorSubject$ = new BehaviorSubject<number>(0);
  replaySubject$ = new ReplaySubject<number>(3);

  emitValue(value: number) {
    this.subject$.next(value);
    this.behaviorSubject$.next(value);
    this.replaySubject$.next(value);
  }
}
