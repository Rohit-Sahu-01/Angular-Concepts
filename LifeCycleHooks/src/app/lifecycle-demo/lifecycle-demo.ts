import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.html',
  imports:[CommonModule],
  styleUrls: ['./lifecycle-demo.css']
})
export class LifecycleDemoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input() data: string = '';

  logs: { message: string; color: string }[] = [];

  constructor() {
    this.addLog('Constructor called', 'secondary');
  }

  addLog(message: string, color: string) {
    console.log(`%c${message}`, `color:${color}; font-weight:bold`);
    this.logs.push({ message, color });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.addLog('ngOnChanges triggered', 'blue');
  }

  ngOnInit(): void {
    this.addLog('ngOnInit triggered', 'green');
  }

  ngDoCheck(): void {
    this.addLog('ngDoCheck triggered', 'purple');
  }

  ngAfterContentInit(): void {
    this.addLog('ngAfterContentInit triggered', 'orange');
  }

  ngAfterContentChecked(): void {
    this.addLog('ngAfterContentChecked triggered', 'teal');
  }

  ngAfterViewInit(): void {
    this.addLog('ngAfterViewInit triggered', 'brown');
  }

  ngAfterViewChecked(): void {
    this.addLog('ngAfterViewChecked triggered', 'pink');
  }

  ngOnDestroy(): void {
    console.log('%c ngOnDestroy triggered', 'color:red; font-weight:bold');
  }
}