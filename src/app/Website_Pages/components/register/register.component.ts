import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';  
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule here instead of BrowserModule
import { ApiService } from '../../../Customer_Pages/Core/Services/api.service';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
// import { Ripple } from 'primeng/ripple';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,Toast,
    CommonModule, // Use CommonModule instead of BrowserModule
    RouterModule,
    SidebarModule,
    CardModule,
    ButtonModule,
    
  ],
  providers:[MessageService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,private apiSrv:ApiService,private messageService: MessageService,private route:Router) {
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
      this.apiSrv.customerRegistration(this.registerForm.value).subscribe((result:any)=>{
        if(result){
          console.log("Sumit form Result",result)
          this.messageService.add({ severity: 'success', summary: 'Registration Sucessfull', detail: 'Login Your Account' });
          this.route.navigateByUrl("/login");
          // alert("Registration successfull ...! Login Your Accout");
          this.clearForm()
        }else{
          this.messageService.add({ severity: 'error', summary: 'Something wrong', detail: 'Please try Again' });
          // alert("Something worng try again later")
        }
       
      })
      // You can replace this with an API call or further processing
    } else {
      this.messageService.add({ severity: 'error', summary: 'Form is Invalid', detail: 'Fill the all fields' });
      // console.log('Form is invalid');
      this.markAllFieldsAsTouched();
    }
  }

  clearForm(){
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      mobile: [''],
      address: [''],
      password: ['']
    });
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
