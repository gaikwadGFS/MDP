import { Component} from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../Customer_Pages/Core/Services/api.service';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CheckboxModule,ButtonModule,RouterLink, CommonModule,ReactiveFormsModule,Toast],
  providers:[MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword: boolean = false;
  // loginCredentials:any={
  //   mobileNum:'',
  //   password:''
  // }
  loginForm = new FormGroup({
    mobile: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  // loginMessage:string='';
  // loginError:boolean=true;
  customerList:any[]=[];
  constructor(private route:Router,private apiSrv:ApiService,private messageService: MessageService){
    // this.getAllCustomers();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // signIn(){
  //   if(this.loginCredentials.mobileNum === this.loginCredentials.mobileNum && this.loginCredentials.password === this.loginCredentials.password){
  //     localStorage.setItem("loginCredentails", this.loginCredentials);
  //     alert("Login successfull");
  //     this.route.navigateByUrl("/customer/dashboard")
  //   }else{
  //     alert("Enter Correct Mobile number or password")
  //   }
  
  // }



  // getAllCustomers() {
  //   this.apiSrv.getAllCustomers().subscribe({
  //     next: (res) => this.customerList = res,
  //     error: (err) => console.error('Error fetching customers:', err)
  //   });
  // }


  onLogin(): void {
    if (this.loginForm.valid) {
      const { mobile, password } = this.loginForm.value;
      this.apiSrv.getAllCustomers().subscribe((customers: any[]) => {
        const customer = customers.find(
          (cust) => cust.mobile === mobile && cust.password === password
        );

        if (customer) {
          localStorage.setItem("loginDetails",JSON.stringify(customer));
          this.messageService.add({ severity: 'success', summary: 'Login Sucessfull' });
         
          this.route.navigateByUrl("/customer/dashboard")
          
        } else {
          this.messageService.add({ severity: 'error', summary: 'Something wrong', detail: 'Pls enter correct mobile no or password' });
        }
      });
    }
  }
}
  


