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
import { ApiService } from "../../../Core/Services/api.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-uploadproperties',
  standalone: true,
  imports: [TableModule,ButtonModule, StepperModule,CommonModule, DatePicker,ReactiveFormsModule,DropdownModule,StepsModule,RadioButton,FormsModule,InputGroupModule,InputNumberModule,InputTextModule,TextareaModule,InputGroupAddonModule,PasswordModule,TextareaModule,FileUploadModule,ToastModule,Select,CheckboxModule],
  providers:[MessageService],
  templateUrl: './uploadproperties.component.html',
  styleUrl: './uploadproperties.component.css'
})
export class UploadpropertiesComponent implements OnInit {


 property_Type:any[]=['Apartment', 'Independent House/Villa', 'Gated Community Villa'];
 facing_Property:any[]=['East', 'West', 'North', 'South','North-East','North-West','South-East','South-West']
 monthly_Maintenance:any[]=['Maintenance Included', 'Maintenance Extra']
 furnishing_Property:any[]=['Full', 'Semi','unfurnished']
//  propertySize:any[]= ['']
//  state:any[]= ['']
//  city:any[]= ['']
//  deposite:any[]= ['']
//  buildingName:any[]= ['']
//  pincode:any[]= ['']
//  propertyDescription:any[]= ['']
 parkings:any[]=['None', 'Car','Bike','Car & Bike']
 prefered_Tenants:any[]=['Anyone', 'Family','Bachelor Male','Bachelor Female','Company']
  // identity_Type:any[]=['Aadhaar', 'PAN', 'Passport']
  bhk_Type:any[]=['1RK','1 BHK','2 BHK','3 BHK','4 BHK ','4+ BHK']
  property_Age:any[]=['Less than 1 year','1-3 Years','3-5 Years','5-10 Years','>10 Years']
  property_Condition:any[]=['New','Renovated','Needs Repair','None']
  // selectedPropertyType:string='';
  floor_Options = Array.from({ length: 101 }, (_, i) => ({ label: i.toString(), value: i }));

  // date: Date | undefined;
  // rentType!: string ;
  // formGroup: FormGroup | undefined;


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


// property:any = {
//   "propertyId":"",
//   "apartmentType":"",
//   "bhkType":"",
//   "propertyType":"",
//   "propertySize":"",
//   "buildingName":"",
//   "facing":"",
//   "propertyAge":"",
//   "propertyCondition":"",
//   "floor":"",
//   "totalFloor":"",
//   "state":"",
//   "rentDurationOptions":"",
//   "city":"",
//   "pincode":"",
//   "address":"",
//    "rentType":"",
//   "rent":"",
//   "deposite":"",
//   "perMonthOrAnum":"",
//   "monthlyMaintenance":"",
//   "furnishing":"",
//   "parking":"",
//   "preferedTenants":"",
//   "propertyDescription":"",
//   "amenities":[],
//   "utilitiesAvailable":[],
//   "nearbyFacilities:":[],
//   "restrictions":[],
//   "ownerName":"",
//   "ownerContact":"",
//   "ownerAddress":"",
//   "ownerEmail":"",
//   "availableFrom": "",
//  "propertyImages": [
//     {
//       "src": ""
//     }
//   ]

// }




  constructor(private messageService:MessageService,private fb: FormBuilder,private apiSrv:ApiService, private route:Router,private activatedRoute:ActivatedRoute) {

    this.propertyForm = this.fb.group({
      // propertyId: [0, Validators.required],
      // apartmentType: ['', Validators.required],
      bhkType: ['', Validators.required],
      propertyType: ['', Validators.required],
      propertySize: ['', [Validators.required]],
      buildingName: ['', Validators.required],
      facing: ['', Validators.required],
      propertyAge: ['', Validators.required],
      propertyCondition: ['', Validators.required],
      floor: ['', [Validators.required]],
      totalFloor: ['', Validators.required],
      state: ['', Validators.required],
      // rentDurationOptions: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required]],
      address: ['', [Validators.required]],
      rentType: ['', Validators.required],
      rent: ['', [Validators.required]],
      deposite: ['', [Validators.required]],
      perMonthOrAnum: ['', Validators.required],
      monthlyMaintenance: ['', Validators.required],
      furnishing: ['', Validators.required],
      parking: ['', Validators.required],
      preferedTenants: ['', Validators.required],
      propertyDescription: ['', [Validators.required]],
      amenities: [[], Validators.required],
      utilitiesAvailable: [[], Validators.required],
      nearbyFacilities: [[], Validators.required],
      restrictions: [[]],
      ownerName: ['', [Validators.required]],
      ownerContact: ['', [Validators.required]],
      ownerAddress: ['', Validators.required],
      ownerEmail: ['', [Validators.required]],
      // availableFrom: ['', Validators.required],
      // propertyImages: this.fb.array([
      //   this.fb.group({ src: ['', Validators.required] })
      // ])
      active:[false]
    });


  }

  currentPropertyId:any=''

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((params:any) => {
      this.currentPropertyId = params.get('id'); // Get ID from route
      console.log(this.currentPropertyId)
      if (this.currentPropertyId) {
        this.getUserDetails(this.currentPropertyId);
      }
    });
    
  }
  getUserDetails(id: number) {
    this.apiSrv.getPropertyDetailsById(id).subscribe(user => {
      this.propertyForm.patchValue(user); // Populate form with data
    });
  }

  // updateUser() {
  //   if (this.userForm.valid) {
  //     this.userService.updateUser(this.userId, this.userForm.value).subscribe(() => {
  //       alert('User updated successfully!');
  //     });
  //   }
  // }


  onSubmit() {
    if (this.propertyForm.valid) {
      console.log('Form Submitted:', this.propertyForm.value);
      this.apiSrv.propertyUpload(this.propertyForm.value).subscribe((res:any)=>{
        if(res){
          setTimeout(() => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Property Uploaded Successfully' });
            
          }, 3000);
          this.clear();
          this.route.navigateByUrl('/properties/viewUploadedProperties')
        }else{
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something Wrong Try Again' });

        }
      })
    } else {
      console.log('Form is invalid!');
      this.messageService.add({ severity: 'error', summary: 'form is invalid', detail: 'Pls fill all details' });

    }
  }

  updateProperty(){
    if(this.propertyForm.valid){
    this.apiSrv.updateProperty(this.currentPropertyId,this.propertyForm.value).subscribe((res:any)=>{
     if(res){
      this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Property Updated Successfully' });
      this.clear();
      this.route.navigateByUrl('/properties/viewUploadedProperties')
     }
     else{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something Wrong Try Again' });

    }
    })
  }else {
    console.log('Form is invalid!');
    this.messageService.add({ severity: 'error', summary: 'form is invalid', detail: 'Pls fill all details' });

  }
  }

  clear(){
    this.propertyForm = this.fb.group({
      propertyId: [0],
      // apartmentType: [''],
      bhkType: [''],
      propertyType: [''],
      propertySize: [''],
      buildingName: [''],
      facing: [''],
      propertyAge: [''],
      propertyCondition: [''],
      floor: [''],
      totalFloor: [''],
      state: [''],
      // rentDurationOptions: [''],
      city: [''],
      pincode: [''],
      // address: [''],
      rentType: [''],
      rent: [''],
      deposite: [''],
      perMonthOrAnum: [''],
      monthlyMaintenance: [''],
      furnishing: [''],
      parking: [''],
      preferedTenants: [''],
      propertyDescription: [''],
      amenities: [[]],
      utilitiesAvailable: [[]],
      nearbyFacilities: [[]],
      restrictions: [[]],
      ownerName: [''],
      ownerContact: [''],
      ownerAddress: [''],
      ownerEmail: [''],
      // availableFrom: [''],
      // propertyImages: this.fb.array([
      //   this.fb.group({ src: [''] })
      // ])
    });
  }

  

//   onUpload(event: any) {
//     this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
// }



}
