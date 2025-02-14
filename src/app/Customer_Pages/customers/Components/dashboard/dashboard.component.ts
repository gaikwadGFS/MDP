import { Component, OnInit } from '@angular/core';
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
    CarouselModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboardForm: FormGroup;
  activeTabIndex: number = 0;
  properties: any[] = []; // Array to hold properties
  filteredProperties: any[] = []; // Array to hold filtered properties

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

  propertyImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7BlPQnpAmVTuhPN2UsvfgkxGVNzfsHZwlg&s',
    'https://3.imimg.com/data3/QF/VC/MY-11005443/princetown.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFlyQWxv72erCxTodjvHGPFEUbWmzME43LA&s'
  ];

  constructor(private apiService: ApiService) {
    this.dashboardForm = new FormGroup({
      tabSelection: new FormControl(''),
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

  fetchProperties(): void {
    this.apiService.getProperties().subscribe((data: any) => {
      this.properties = data;
      this.filteredProperties = data; // Initialize filteredProperties with all properties
    });
  }

  onTabChange(tabIndex: number): void {
    this.activeTabIndex = tabIndex;
    this.tabs.forEach((tab, index) => {
      tab.isActive = index === tabIndex;
    });
  }

  onSubmit(): void {
    const formValue = this.dashboardForm.value;
    this.filteredProperties = this.properties.filter(property => {
      return (
        (!formValue.searchCity || property.city.toLowerCase().includes(formValue.searchCity.toLowerCase())) &&
        (!formValue.searchArea || property.location.toLowerCase().includes(formValue.searchArea.toLowerCase())) &&
        (!formValue.searchPincode || property.pincode === formValue.searchPincode) &&
        (!formValue.propertyType || property.propertyType === formValue.propertyType) &&
        (!formValue.budget || this.isWithinBudget(property.rent, formValue.budget))
      );
    });
  }

  isWithinBudget(rent: number, budget: string): boolean {
    const budgetRange = budget.split(' - ');
    const minBudget = parseInt(budgetRange[0].replace(/,/g, ''), 10);
    const maxBudget = budgetRange[1] ? parseInt(budgetRange[1].replace(/,/g, ''), 10) : Infinity;
    return rent >= minBudget && rent <= maxBudget;
  }
}