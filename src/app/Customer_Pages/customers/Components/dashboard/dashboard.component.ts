import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown'; // For dropdown
import { TabsModule } from 'primeng/tabs';

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
    DropdownModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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

  dashboardForm: FormGroup;
  activeTabIndex: number = 0; // Tracks the active tab index

  constructor() {
    this.dashboardForm = new FormGroup({
      tabSelection: new FormControl(''),
      searchCity: new FormControl(''),
      searchArea: new FormControl(''),
      searchPincode: new FormControl(''),
      searchPropertyName: new FormControl(''),
      propertyType: new FormControl(''),
      budget: new FormControl('') // Added for budget
    });
  }

  ngOnInit(): void {
    // Initialization logic (if any) can be added here
  }

  onTabChange(tabIndex: number): void {
    this.activeTabIndex = tabIndex;
    this.tabs.forEach((tab, index) => {
      tab.isActive = index === tabIndex; // Mark only the selected tab as active
    });
  }

  onSubmit(): void {
    console.log('Form Submitted:', this.dashboardForm.value);
    // Handle the search filter logic here (e.g., API call or filtering logic)
  }
}
