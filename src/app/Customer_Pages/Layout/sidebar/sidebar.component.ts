import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
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
    ReactiveFormsModule,
    RouterModule,
    SidebarModule,
    CardModule,
    ButtonModule,
    RouterLink,
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
  sidebarVisible: boolean = false; // Sidebar toggle variable
  searchDrawerVisible: boolean = false; // Drawer visibility toggle
  selectedCity: string | null = null; // Selected city filter
  selectedOccupancy: string | null = null; // Selected occupancy filter
  budget: number | null = null; // Selected budget filter

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
}
