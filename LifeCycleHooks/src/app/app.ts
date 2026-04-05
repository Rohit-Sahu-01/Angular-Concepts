import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo';


@Component({
  selector: 'app-root',
  imports: [CommonModule,LifecycleDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  message:string = 'Hello Angular';
  showComponent:boolean = true;

  updateMessage() {
    this.message = 'Updated Message ' + new Date().toLocaleTimeString();
  }

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }
}
