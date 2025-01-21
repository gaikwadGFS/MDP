import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DrawerModule } from 'primeng/drawer';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SidebarModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    InputNumberModule,
    OverlayPanelModule,
    DrawerModule,
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sidebarVisible: boolean = false;  // To toggle sidebar visibility
  searchDrawerVisible: boolean = false;  // Drawer visibility toggle
  selectedCity: string | null = null; // Selected city filter
  selectedOccupancy: string | null = null; // Selected occupancy filter
  budget: number | null = null; // Selected budget filter
  dropdowns: { [key: string]: boolean } = {
    getServices: false,  // Initially, dropdowns are hidden
    uploadProperty: false,
  };

  constructor(private router: Router) {}

<<<<<<< HEAD
  toggleDropdown(dropdown: string) {
    this.dropdowns[dropdown] = !this.dropdowns[dropdown];
  }

  navigateTo(route: string) {
    // this.sidebarVisible = false;
    this.router.navigate([`/${route}`]);
  }
 

=======
>>>>>>> f557a7413354fef87b1aff772ef5fc7e6562a16c
  // Options for city dropdown
  cityOptions = [
    { label: 'New York', value: 'NY' },
    { label: 'London', value: 'LDN' },
    { label: 'Paris', value: 'PAR' },
  ];

  // Options for occupancy dropdown
  occupancyOptions = [
    { label: 'Single', value: 'SINGLE' },
    { label: 'Family', value: 'FAMILY' },
    { label: 'Corporate', value: 'CORPORATE' },
  ];

  // Toggle the sidebar
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  // Open the search/filter drawer
  openSearchDrawer() {
    this.searchDrawerVisible = true;
  }

  // Apply filters and close the drawer
  applyFilters() {
    console.log('Filters applied:', {
      city: this.selectedCity,
      occupancy: this.selectedOccupancy,
      budget: this.budget,
    });
    this.searchDrawerVisible = false; // Close the drawer
  }

  // Reset the filters
  resetFilters() {
    this.selectedCity = null;
    this.selectedOccupancy = null;
    this.budget = null;
  }

 // Toggle dropdown visibility without closing the sidebar
toggleDropdown(dropdown: string) {
  this.dropdowns[dropdown] = !this.dropdowns[dropdown]; // Show/hide the dropdown options
  this.sidebarVisible = true; // Ensure sidebar stays visible
}

// Navigate to a route and close the sidebar
navigateTo(route: string) {
  if (!this.dropdowns['getServices'] && !this.dropdowns['uploadProperty']) {
    this.sidebarVisible = false; // Close the sidebar only when dropdowns are not open
  }
  this.router.navigate([`/${route}`]);
}
}
