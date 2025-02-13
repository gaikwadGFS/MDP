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
 monthlyMaintenance:any[]=['Maintenance Included', 'Maintenance Extra']
 Furnishing:any[]=['Full', 'Semi','unfurnished']
 propertySize:any[]= ['']
 state:any[]= ['']
 city:any[]= ['']
 deposite:any[]= ['']
 buildingName:any[]= ['']
 pincode:any[]= ['']
 propertyDescription:any[]= ['']
 Parking:any[]=['None', 'Car','Bike','Car & Bike']
 preferedTenants:any[]=['Anyone', 'Family','Bachelor Male','Bachelor Female','Company']
  identityType:any[]=['Aadhaar', 'PAN', 'Passport']
  BhkType:any[]=['1RK','1 BHK','2 BHK','3 BHK','4 BHK ','4+ BHK']
  propertyAge:any[]=['Less than 1 year','1-3 Years','3-5 Years','5-10 Years','>10 Years']
  Condition:any[]=['New','Renovated','Needs Repair']
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
// Options for "titlestatus" dropdown
titlestatus = [
  { label: 'Freehold', value: 'Freehold' },
  { label: 'Leasehold', value: 'Leasehold' },
  { label: 'Encumbered', value: 'Encumbered' }
];
// Options for "zoningclassification" dropdown
zoningclassification = [
  { label: 'Residential', value: 'Residential' },
  { label: 'Commercial', value: 'Commercial' },
  { label: 'Mixed-use', value: 'Mixed-use' }
];
// Options for "Encumbrances" dropdown
Encumbrances = [
  { label: 'Mortgages', value: 'Mortgages' },
  { label: 'Liens', value: 'Liens' },
  { label: 'Legal Disputes', value: 'Legal Disputes' }
];
// Options for "Amenities" dropdown
amenities = [
  { label: 'Parking', value: 'Parking' },
  { label: 'Garden', value: 'Garden' },
  { label: 'Swimming Pool', value: 'Swimming Pool' },
  { label: 'Gym', value: 'Gym' }
];
// Options for "Utilities Available" dropdown
utilitiesAvailable = [
  { label: 'Water', value: 'Water' },
  { label: 'Electricity', value: 'Electricity' },
  { label: 'Gas', value: 'Gas' },
  { label: 'Internet', value: 'Internet' }
];
// Options for "Nearby Facilities" dropdown
nearbyFacilities = [
  { label: 'Schools', value: 'Schools' },
  { label: 'Hospitals', value: 'Hospitals' },
  { label: 'Malls', value: 'Malls' },
  { label: 'Public Transport', value: 'Public Transport' }
];
// Options for "Restrictions" dropdown
restrictions= [
  { label: 'HOA Rules', value: 'HOA Rules' },
  { label: 'Building Codes', value: 'Building Codes' },
  { label: 'Easements', value: 'Easements' },
];


propertyForm: FormGroup;


property:any = {
  "propertyId":"",
  "apartmentType":"",
  "bhkType":"",
  "propertyType":"",
  "propertySize":"",
  "buildingName":"",
  "facing":"",
  "propertyAge":"",
  "propertyCondition":"",
  "floor":"",
  "totalFloor":"",
  "state":"",
  "rentDurationOptions":"",
  "city":"",
  "pincode":"",
  "address":"",
   "rentType":"",
  "rent":"",
  "deposite":"",
  "perMonthOrAnum":"",
  "monthlyMaintenance":"",
  "furnishing":"",
  "parking":"",
  "preferedTenants":"",
  "propertyDescription":"",
  "amenities":[],
  "utilitiesAvailable":[],
  "nearbyFacilities:":[],
  "restrictions":[],
  "ownerName":"",
  "ownerContact":"",
  "ownerAddress":"",
  "ownerEmail":"",
  "availableFrom": "",
 "propertyImages": [
    {
      "src": ""
    }
  ]

}




  constructor(private messageService:MessageService,private fb: FormBuilder) {

    this.propertyForm = this.fb.group({
      propertyId: ['', Validators.required],
      apartmentType: ['', Validators.required],
      bhkType: ['', Validators.required],
      propertyType: ['', Validators.required],
      propertySize: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      buildingName: ['', Validators.required],
      facing: ['', Validators.required],
      propertyAge: ['', Validators.required],
      propertyCondition: ['', Validators.required],
      floor: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      totalFloor: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      state: ['', Validators.required],
      rentDurationOptions: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      rentType: ['', Validators.required],
      rent: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      deposite: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      perMonthOrAnum: ['', Validators.required],
      monthlyMaintenance: ['', Validators.required],
      furnishing: ['', Validators.required],
      parking: ['', Validators.required],
      preferedTenants: ['', Validators.required],
      propertyDescription: ['', [Validators.required, Validators.minLength(10)]],
      amenities: [[], Validators.required],
      utilitiesAvailable: [[], Validators.required],
      nearbyFacilities: [[], Validators.required],
      restrictions: [[]],
      ownerName: ['', [Validators.required, Validators.minLength(2)]],
      ownerContact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      ownerAddress: ['', Validators.required],
      ownerEmail: ['', [Validators.required, Validators.email]],
      availableFrom: ['', Validators.required],
      propertyImages: this.fb.array([
        this.fb.group({ src: ['', Validators.required] })
      ])
    });




  }

  ngOnInit() {

    this.formGroup = new FormGroup({
      city: new FormControl<string | null>(null)
  });

    
  }






  onSubmit() {
    if (this.propertyForm.valid) {
      console.log('Form Submitted:', this.propertyForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }

  

  onUpload(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
}



}
