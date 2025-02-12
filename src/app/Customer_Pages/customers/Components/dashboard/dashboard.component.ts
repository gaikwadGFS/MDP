import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TabsModule } from 'primeng/tabs';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PopoverModule } from 'primeng/popover';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { ApiService } from '../../../Core/Services/api.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TabViewModule,
    TabsModule,
    ButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    DialogModule,
    SidebarModule,
    ConfirmDialogModule,
    PopoverModule,
    InputTextModule,
    InputGroupAddonModule,
    InputGroup,
    ConfirmPopupModule,
    ToastModule,
    CarouselModule,
    HttpClientModule // Ensure HTTP Client is available
  ],
  // providers:[ApiService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent implements OnInit {
  dashboardForm: FormGroup;
  activeTabIndex: number = 0;
  propertyImages: any[] = []; // Define this based on your image data


  tabs = [
    { route: '/dashboard/buy', label: 'Buy', icon: 'pi pi-shopping-cart', isActive: true },
    { route: '/dashboard/rent', label: 'Rent', icon: 'pi pi-home', isActive: false },
    { route: '/dashboard/commercial', label: 'Commercial', icon: 'pi pi-building', isActive: false }
  ];

  propertyTypes = [
    { label: 'Commercial', value: 'Commercial' },
    { label: 'Residential', value: 'Residential' },
    { label: 'R-zone Plot', value: 'R-zone Plot' },
    { label: 'NA Plot', value: 'NA Plot' }
  ];

  budgetOptions = [
    { label: 'Up to 5,00,000', value: '5,00,000' },
    { label: '5,00,000 - 10,00,000', value: '10,00,000' },
    { label: '10,00,000 - 20,00,000', value: '20,00,000' },
    { label: 'Above 20,00,000', value: 'Above 20,00,000' }
  ];

  properties: any[] = []; // API se aane wala pura data
  filteredProperties: any[] = []; // Search hone ke baad ka data

  constructor(private apiService: ApiService) {
    this.dashboardForm = new FormGroup({
      searchCity: new FormControl(''),
      searchArea: new FormControl(''),
      searchPincode: new FormControl(''),
      searchPropertyName: new FormControl(''),
      propertyType: new FormControl(''),
      budget: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.fetchProperties();
  }

  fetchProperties() {
    this.apiService.getProperties().subscribe(
      (data: any) => {
        this.properties = data.propertiesList || []; // Ensure correct data extraction
        this.filteredProperties = this.properties;
      },
      (error) => {
        console.error('Error fetching properties:', error);
      }
    );
  }

  searchByCity() {
    const searchCity = this.dashboardForm.value.searchCity;
    if (!searchCity || searchCity.trim() === '') {
      this.filteredProperties = this.properties;
    } else {
      this.filteredProperties = this.properties.filter(property =>
        property.city.toLowerCase().includes(searchCity.toLowerCase())
      );
    }
  }

  onSubmit() {
    console.log('Form submitted:', this.dashboardForm.value);
  }
}
