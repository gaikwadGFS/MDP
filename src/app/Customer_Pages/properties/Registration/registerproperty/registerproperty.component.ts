import { Component, OnInit } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { ApiService } from '../../../Core/Services/api.service';
import { DatePicker } from 'primeng/datepicker';
import { Router } from '@angular/router';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-registerproperty',
  standalone: true,
  imports: [StepperModule,ButtonModule,ReactiveFormsModule,Select,InputTextModule,TextareaModule,FileUpload,ToastModule,
    InputGroupModule,InputNumberModule,InputGroupAddonModule,PasswordModule,DatePicker],
  providers: [MessageService],
  templateUrl: './registerproperty.component.html',
  styleUrl: './registerproperty.component.css'
})
export class RegisterpropertyComponent implements OnInit {
  propertyType:any[]=['Residential', 'Commercial', 'Land'];
  ownerShipType:any[]=['Single', 'Joint', 'Leasehold', 'Freehold']
  identityType:any[]=['Aadhaar', 'PAN', 'Passport']

  selectedPropertyType:string='';

  myForm = new FormGroup({
    propertyType: new FormControl(''), 
    identificationNumber: new FormControl(''), 
    totalArea: new FormControl(''), 
    propertyValue: new FormControl(''), 
    ownershipType: new FormControl(''), 

    propertyAddress: new FormControl(''),
    // propertyDeed: new FormControl(''), 
    // previousSaleAgreement: new FormControl(null), 
    // taxReceipts: new FormControl(null), 
    // encumbranceCertificate: new FormControl(null), 

    // addressProof: new FormControl(null), 
    // noc: new FormControl(null), 

    // identityType: new FormControl(''), 
    // identityProof: new FormControl(null), 
    cardNumber: new FormControl(''), 
    expiryDate: new FormControl(''), 
    cvcNumber: new FormControl(''),
    cardholderName: new FormControl(''), 
     document:new FormArray([]),
    mobileNo: new FormControl('', Validators.required), 
    isPaymentDone: new FormControl(false) 
  });

  selectedFiles: File[] = [];

  constructor(private messageService: MessageService,private apiSrv:ApiService,private route:Router) {}

  ngOnInit(): void {
    
  }

 
 

  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  registerUser() {
    const fileData = this.selectedFiles.map((file, index) => {
      return new FormGroup({
        id: new FormControl(Date.now() + index),
        fileName: new FormControl(file.name),
        fileUrl: new FormControl(`/uploads/${file.name}`) // Mock URL (In real case, upload to a server)
      });
    });
  
    // Correctly update FormArray
    const documentArray = this.myForm.get('document') as FormArray;
    documentArray.clear(); // Clear previous files (optional)
    fileData.forEach(fileGroup => documentArray.push(fileGroup));
    this.myForm.get('isPaymentDone')?.setValue(true);
    // Now submit the form with the updated document array
    this.apiSrv.propertyRegistratation(this.myForm.value).subscribe((res) => {

      if(res){
        setTimeout(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Property Uploaded Successfully' });
       
          
        }, 3000);
        this.clear();
        this.route.navigateByUrl('/properties/uploadProperties')
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something Wrong Try Again' });

      }
    });
  }

  clear(){
    this.myForm = new FormGroup({
      propertyType: new FormControl(''), 
      identificationNumber: new FormControl(''), 
      totalArea: new FormControl(''), 
      propertyValue: new FormControl(''), 
      ownershipType: new FormControl(''), 
  
      propertyAddress: new FormControl(''),
      cardNumber: new FormControl(''), 
      expiryDate: new FormControl(''), 
      cvcNumber: new FormControl(''),
      cardholderName: new FormControl(''), 
       document:new FormArray([]),
      mobileNo: new FormControl('', Validators.required), 
      isPaymentDone: new FormControl(false) 
    });
  }
  
}
 
