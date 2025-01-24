import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';  
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule here instead of BrowserModule
 
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule, // Use CommonModule instead of BrowserModule
    RouterModule,
    SidebarModule,
    CardModule,
    ButtonModule,
    
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * Submit handler for the registration form
   */
  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      // You can replace this with an API call or further processing
    } else {
      console.log('Form is invalid');
      this.markAllFieldsAsTouched();
    }
  }

  /**
   * Marks all fields as touched to display validation errors
   */
  private markAllFieldsAsTouched(): void {
    Object.keys(this.registerForm.controls).forEach((field) => {
      const control = this.registerForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
}
