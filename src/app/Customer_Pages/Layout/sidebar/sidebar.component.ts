import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    SidebarModule,
    CardModule,
    ButtonModule,
    RouterLink,
    DropdownModule,
    OverlayPanelModule,
    CommonModule, // Add CommonModule to the imports array
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sidebarVisible: boolean = false;
  dropdownVisible: boolean = false; // Add this variable for dropdown

  dropdownItems = [
    { label: 'My Profile' },
    { label: 'Logout' }
  ];

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
