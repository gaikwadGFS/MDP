import { Component} from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CheckboxModule,ButtonModule,RouterLink, CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword: boolean = false;
  loginCredentials:any={
    mobileNum:'',
    password:''
  }

  constructor(private route:Router){}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  signIn(){
    if(this.loginCredentials.mobileNum === '1234567890' && this.loginCredentials.password === 'admin'){
      localStorage.setItem("loginCredentails", this.loginCredentials);
      alert("Login successfull");
      this.route.navigateByUrl("/customer/dashboard")
    }else{
      alert("Enter Correct Mobile number or password")
    }
  
  }

}
