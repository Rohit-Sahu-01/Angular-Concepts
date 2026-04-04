import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  // 🔹 Page Title
  title = signal('User Registration');

  // 🔹 Success Message
  successMessage = signal('');

  // 🔹 Store submitted data (optional UI preview)
  userData = signal<any>(null);

  // 🔹 Form Submit Function
  onSubmit(form: NgForm) {

    if (form.invalid) return;

    console.log('Form Data:', form.value);

    // Store data (for UI preview if needed)
    this.userData.set(form.value);

    // Show success message
    this.successMessage.set('Registration successful! 🎉');

    // Reset form
    form.reset();

    // Auto hide success message
    setTimeout(() => {
      this.successMessage.set('');
    }, 3000);
  }
}