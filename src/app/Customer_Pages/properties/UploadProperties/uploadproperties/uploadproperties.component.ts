import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { CommonModule } from "@angular/common";
import { DropdownModule } from "primeng/dropdown";
import { StepsModule } from "primeng/steps";
import { PanelMenu } from "primeng/panelmenu";
import { MenuItem, MessageService } from "primeng/api";
import { RadioButton } from "primeng/radiobutton";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputGroupModule } from "primeng/inputgroup";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { TextareaModule } from "primeng/textarea";
import { PasswordModule } from "primeng/password";
import { FileUploadModule } from "primeng/fileupload";
import { ToastModule } from "primeng/toast";
import { Select } from "primeng/select";
import { DatePicker } from "primeng/datepicker";


@Component({
  selector: 'app-uploadproperties',
  standalone: true,
  imports: [TableModule,ButtonModule, StepperModule,CommonModule,ReactiveFormsModule,DropdownModule,StepsModule,RadioButton,FormsModule,InputGroupModule,InputNumberModule,InputTextModule,TextareaModule,InputGroupAddonModule,PasswordModule,TextareaModule,FileUploadModule,ToastModule,Select],
  templateUrl: './uploadproperties.component.html',
  styleUrl: './uploadproperties.component.css'
})
export class UploadpropertiesComponent implements OnInit {









 propertyType:any[]=['Apartment', 'Independent House/Villa', 'Gated Community Villa'];
  ownerShipType:any[]=['Single', 'Joint', 'Leasehold', 'Freehold']
  identityType:any[]=['Aadhaar', 'PAN', 'Passport']
  BhkType:any[]=['1RK','1 BHK','2 BHK','3 BHK','4 BHK ','4+ BHK']

  selectedPropertyType:string='';

  constructor() {}

  ngOnInit(): void {
    
  }

  onUpload(event: any) {
    // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
}



}
