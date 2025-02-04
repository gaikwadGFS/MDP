import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DrawerModule } from 'primeng/drawer';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { AvatarModule } from 'primeng/avatar'; 

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    InputNumberModule,
    OverlayPanelModule,
    AvatarModule,
    DrawerModule,
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  drawerVisible: boolean = false; // To toggle drawer visibility
  searchDrawerVisible: boolean = false; // Drawer visibility toggle
  selectedCity: string | null = null; // Selected city filter
  selectedOccupancy: string | null = null; // Selected occupancy filter
  budget: number | null = null; // Selected budget filter
  dropdowns: { [key: string]: boolean } = {
    getServices: false, // Initially, dropdowns are hidden
    uploadProperty: false,
  };
  visible: boolean = false;
  
  constructor(private router: Router) {}

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

  // Toggle the drawer
  toggleDrawer() {
    this.drawerVisible = !this.drawerVisible;
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

  // Toggle dropdown visibility without closing the drawer
  toggleDropdown(menu: string) {
    this.dropdowns[menu] = !this.dropdowns[menu];
  }
  

  // Navigate to a route and close the drawer
  navigateTo(route: string) {
    if (!this.dropdowns['getServices'] && !this.dropdowns['uploadProperty']) {
      this.drawerVisible = false; // Close the drawer only when dropdowns are not open
    }
    this.router.navigate([`/${route}`]);
  }

  // Logout functionality
  logout() {
    // Perform logout operations (e.g., clear user session data)
    localStorage.clear(); // Clearing local storage (assuming token is stored here)
    sessionStorage.clear(); // Clearing session storage (optional)
    console.log('User logged out successfully.');
    this.router.navigate(['/login']); // Redirecting to the login page
  }
}
