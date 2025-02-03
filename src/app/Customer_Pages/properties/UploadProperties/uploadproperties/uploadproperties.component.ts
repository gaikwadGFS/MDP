import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

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
import { CheckboxModule } from "primeng/checkbox";


@Component({
  selector: 'app-uploadproperties',
  standalone: true,
  imports: [TableModule,ButtonModule, StepperModule,CommonModule, DatePicker,ReactiveFormsModule,DropdownModule,StepsModule,RadioButton,FormsModule,InputGroupModule,InputNumberModule,InputTextModule,TextareaModule,InputGroupAddonModule,PasswordModule,TextareaModule,FileUploadModule,ToastModule,Select,CheckboxModule],
  providers:[MessageService],
  templateUrl: './uploadproperties.component.html',
  styleUrl: './uploadproperties.component.css'
})
export class UploadpropertiesComponent implements OnInit {


 propertyType:any[]=['Apartment', 'Independent House/Villa', 'Gated Community Villa'];
 Facing:any[]=['East', 'West', 'North', 'South','North-East','North-West','South-East','South-West']
 MonthlyMaintenance:any[]=['Maintenance Included', 'Maintenance Extra']
 Furnishing:any[]=['Full', 'Semi','unfurnished']
 Parking:any[]=['None', 'Car','Bike','Car & Bike']
 PreferedTenants:any[]=['Anyone', 'Family','Bachelor Male','Bachelor Female','Company']
  identityType:any[]=['Aadhaar', 'PAN', 'Passport']
  BhkType:any[]=['1RK','1 BHK','2 BHK','3 BHK','4 BHK ','4+ BHK']
  PropertyAge:any[]=['Less than 1 year','1-3 Years','3-5 Years','5-10 Years','>10 Years']
  selectedPropertyType:string='';
  floorOptions = Array.from({ length: 101 }, (_, i) => ({ label: i.toString(), value: i }));

  date: Date | undefined;
  rentType!: string ; // Stores selected rent type
  formGroup: FormGroup | undefined;


// Options for "Per Month/Annum" dropdown
rentDurationOptions = [
  { label: 'Month', value: 'month' },
  { label: 'Annum', value: 'year' }
];

  constructor(private messageService:MessageService) {}

  ngOnInit() {

    this.formGroup = new FormGroup({
      city: new FormControl<string | null>(null)
  });

    
  }








  

  onUpload(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
}



}
