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
    this.registerForm = this.fb.group(
      {
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Registration Data:', this.registerForm.value);
      // Implement registration logic here
    }
  }


}
