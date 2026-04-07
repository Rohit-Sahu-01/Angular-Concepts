import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxDemo } from "./rx-demo/rx-demo";

@Component({
  selector: 'app-root',
  imports: [RxDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
