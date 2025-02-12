import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown'; // For dropdown
import { TabsModule } from 'primeng/tabs';
import { CarouselModule } from 'primeng/carousel'; // Importing CarouselModule
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PopoverModule } from 'primeng/popover';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';

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
    CarouselModule // Adding CarouselModule to imports
  ],
  providers:[],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent implements OnInit {
  dashboardForm: FormGroup;
  activeTabIndex: number = 0;

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

  properties = [
    { image: 'https://via.placeholder.com/300x200?text=Property+1', name: 'Modern 2BHK Flat', price: '₹45,00,000', description: 'Spacious 2BHK flat in a prime location.' },
    { image: 'https://via.placeholder.com/300x200?text=Property+2', name: 'Luxury 3BHK Apartment', price: '₹75,00,000', description: 'Luxury 3BHK apartment with modern amenities.' },
    { image: 'https://via.placeholder.com/300x200?text=Property+3', name: 'Commercial Office Space', price: '₹1,50,00,000', description: 'Well-located office space in a business hub.' },
    // Add more properties as needed
  ];

  propertyImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7BlPQnpAmVTuhPN2UsvfgkxGVNzfsHZwlg&s',
    'https://3.imimg.com/data3/QF/VC/MY-11005443/princetown.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFlyQWxv72erCxTodjvHGPFEUbWmzME43LA&s'
  ];

  constructor() {
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

  ngOnInit(): void { }

  onTabChange(tabIndex: number): void {
    this.activeTabIndex = tabIndex;
    this.tabs.forEach((tab, index) => {
      tab.isActive = index === tabIndex;
    });
  }

  onSubmit(): void {
    console.log('Form Submitted:', this.dashboardForm.value);
  }
}
