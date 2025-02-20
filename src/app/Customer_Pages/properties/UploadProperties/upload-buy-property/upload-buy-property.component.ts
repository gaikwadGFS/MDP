import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ApiService } from '../../../Core/Services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-buy-property',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    CheckboxModule,
    CalendarModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './upload-buy-property.component.html',
  styleUrls: ['./upload-buy-property.component.css'],
})
export class UploadBuyPropertyComponent implements OnInit {
  propertyForm!: FormGroup;

  propertyTypes = [
    { label: 'Residential', value: 'Residential' },
    { label: 'Commercial', value: 'Commercial' },
    { label: 'Land', value: 'Land' },
    { label: 'Apartment', value: 'Apartment' },
    { label: 'Villa', value: 'Villa' }
  ];

  locations = [
    { label: 'City Center', value: 'City Center' },
    { label: 'Suburban', value: 'Suburban' },
    { label: 'Rural', value: 'Rural' }
  ];

  conditions = [
    { label: 'New', value: 'New' },
    { label: 'Resale', value: 'Resale' },
    { label: 'Under Construction', value: 'Under Construction' }
  ];

  paymentModes = [
    { label: 'Mortgage', value: 'Mortgage' },
    { label: 'Full Payment', value: 'Full Payment' },
    { label: 'Installments', value: 'Installments' }
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
      budgetMin: ['', [Validators.required, Validators.min(0)]],
      budgetMax: ['', [Validators.required, Validators.min(0)]],
      size: ['', Validators.required],
      bedrooms: ['', Validators.required],
      bathrooms: ['', Validators.required],
      condition: ['', Validators.required],
      legalCompliance: [false, Validators.requiredTrue], // Fixed Checkbox Issue
      paymentMode: ['', Validators.required],
      possessionDate: [null, Validators.required] // Ensure proper date format
    });
  }

  loadPropertyDetails(id: string): void {
    this.apiSrv.getPropertyDetailsById(id).subscribe(property => {
      this.propertyForm.patchValue(property);
    });
  }

  onSubmit(): void {
    if (this.propertyForm.valid) {
      this.apiSrv.uploadBuyProperty(this.propertyForm.value).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Property uploaded successfully!',
          });
          this.router.navigate(['/properties']);
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
    this.propertyForm.reset({
      legalCompliance: false
    });
  }
}
