import { Component, OnInit } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-registerproperty',
  standalone: true,
  imports: [StepperModule,ButtonModule,FormsModule,Select,InputTextModule,TextareaModule,FileUpload,ToastModule,
    InputGroupModule,InputNumberModule,InputGroupAddonModule,PasswordModule],
  providers: [MessageService],
  templateUrl: './registerproperty.component.html',
  styleUrl: './registerproperty.component.css'
})
export class RegisterpropertyComponent implements OnInit {
  propertyType:any[]=['Residential', 'Commercial', 'Land'];
  ownerShipType:any[]=['Single', 'Joint', 'Leasehold', 'Freehold']
  identityType:any[]=['Aadhaar', 'PAN', 'Passport']

  selectedPropertyType:string='';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    
  }

  onUpload(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
}

}
