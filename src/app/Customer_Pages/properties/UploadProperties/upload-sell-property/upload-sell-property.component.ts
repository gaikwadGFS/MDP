import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ApiService } from '../../../Core/Services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-upload-buy-property',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    SelectModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    CheckboxModule,
    CalendarModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './upload-sell-property.component.html',
  styleUrl: './upload-sell-property.component.css'
})
export class UploadSellPropertyComponent implements OnInit {
  propertyForm!: FormGroup;

  property_Types = [
    { label: 'Residential', value: 'Residential' },
    { label: 'Commercial', value: 'Commercial' },
    { label: 'Land', value: 'Land' },
    { label: 'Apartment', value: 'Apartment' },
    { label: 'Villa', value: 'Villa' }
  ];

  market_Demand = [
    { label: 'High', value: 'High' },
    { label: 'Low', value: 'Low' }
  ];

  mode_OfSale = [
    { label: 'Direct Owner', value: 'Direct Owner' },
    { label: 'Broker', value: 'Broker' },
    { label: 'Online Listing', value: 'Online Listing' }
  ];
  property_Conditions = [
    { label: 'Newly Constructed', value: 'Newly Constructed' },
    { label: 'Renovated', value: 'Renovated' },
    { label: 'Needs Repairs', value: 'Needs Repairs' }
  ];

  legal_DocumentationOptions = [
    { label: 'Ownership Proof', value: 'Ownership Proof' },
    { label: 'Title Clearance', value: 'Title Clearance' }
  ];

  selling_Timelines = [
    { label: 'Urgent Sale', value: 'Urgent Sale' },
    { label: 'Open for Offers', value: 'Open for Offers' }
  ];

  advertisement_MarketingOptions = [
    { label: 'Online Platforms', value: 'Online Platforms' },
    { label: 'Real Estate Agents', value: 'Real Estate Agents' }
  ];

  transfer_ProcessOptions = [
    { label: 'Legal Formalities', value: 'Legal Formalities' },
    { label: 'Paperwork Handling', value: 'Paperwork Handling' }
  ];

  tax_ImplicationsOptions = [
    { label: 'Capital Gains Tax', value: 'Capital Gains Tax' },
    { label: 'Stamp Duty', value: 'Stamp Duty' }
  ];

  incentives_ForBuyersOptions = [
    { label: 'Discounts', value: 'Discounts' },
    { label: 'Free Registration', value: 'Free Registration' },
    { label: 'Added Amenities', value: 'Added Amenities' }
  ];

  payment_Modes = [
    { label: 'Cash', value: 'Cash' },
    { label: 'Loan Buyers', value: 'Loan Buyers' },
    { label: 'Installments', value: 'Installments' }
  ];

  furnishing_Status = [
    { label: 'Fully Furnished', value: 'Fully Furnished' },
    { label: 'Semi-Furnished', value: 'Semi-Furnished' },
    { label: 'Unfurnished', value: 'Unfurnished' }
  ];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private apiSrv: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.activatedRoute.paramMap.subscribe(params => {
      const propertyId = params.get('id');
      if (propertyId) {
        this.loadPropertyDetails(propertyId);
      }
    });
  }

  initializeForm(): void {
    this.propertyForm = this.fb.group({
      propertyType: ['', Validators.required],
      location: ['', Validators.required],
      askingPrice: ['', Validators.required,],
      size: ['', Validators.required],
      propertyCondition: ['', Validators.required],
      legalDocumentation: ['', Validators.required],
      marketDemand: ['', Validators.required],
      modeOfSale: ['', Validators.required],
      sellingTimeline: ['', Validators.required],
      advertisementMarketing: ['', Validators.required],
      transferProcess: ['', Validators.required],
      taxImplications: ['', Validators.required],
      paymentModeAcceptance: ['', Validators.required],
      furnishingStatus: ['', Validators.required],
      incentivesForBuyers: ['', Validators.required]
    });
  }
  loadPropertyDetails(id: string): void {
    this.apiSrv.getPropertyDetailsById(id).subscribe(property => {
      this.propertyForm.patchValue(property);
    });
  }

  onSubmit(): void {
    if (this.propertyForm.valid) {
      this.apiSrv.uploadSellProperty(this.propertyForm.value).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Property uploaded successfully!',
          });
        // this.router.navigate(['/properties']);
        },
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to upload property. Please try again.',
          });
        },
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid Form',
        detail: 'Please fill all required fields.',
      });
    }
  }

  onReset(): void {
    this.propertyForm.reset();
  }
}
