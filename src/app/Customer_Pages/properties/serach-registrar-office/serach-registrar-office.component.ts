import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-serach-registrar-office',
  standalone: true,
  imports: [CardModule,DropdownModule,TableModule,FormsModule,Select,ButtonModule,RatingModule],
  templateUrl: './serach-registrar-office.component.html',
  styleUrl: './serach-registrar-office.component.css'
})
export class SerachRegistrarOfficeComponent {


  // City Dropdown Options
  cities: any[] = [
    { label: 'Pune', value: 'Pune' },
    { label: 'Nashik', value: 'Nashik' }
  ];

  selectedCity: string | null = null; // Stores the selected city

  // List of Registrar Offices
  products: any[] = [
    { id: '1', srnumber: '1', Officename: 'Registrar Office Hinjawadi', Address: 'HPWM+2R6, Hinjawadi Village, Pune', contact: '8446755298', SiteOfficeLink: "click here", Rating: '4.5', city: 'Pune' },
    { id: '2', srnumber: '2', Officename: 'Registrar Office Nashik', Address: '123 Street, Nashik', contact: '9876543210', SiteOfficeLink: "click here", Rating: '4', city: 'Nashik' },
    { id: '3', srnumber: '3', Officename: 'Registrar Office Pune', Address: '456 Avenue, Pune', contact: '8527419630', SiteOfficeLink: "click here", Rating: '5', city: 'Pune' },
    { id: '4', srnumber: '4', Officename: 'Registrar Office Nashik', Address: '789 Road, Nashik', contact: '3692581470', SiteOfficeLink: "click here", Rating: '5', city: 'Nashik' },
    { id: '5', srnumber: '5', Officename: 'Registrar Office Hinjawadi', Address: 'Pimpri-Chinchwad, Pune', contact: '1597534862', SiteOfficeLink: "click here", Rating: '3.5', city: 'Pune' }
  ];

  filteredProducts = [...this.products]; // Initially, display all offices

  // Search function to filter products by selected city
  search() {
    if (this.selectedCity) {
      this.filteredProducts = this.products.filter(product => product.city === this.selectedCity);
    } else {
      this.filteredProducts = [...this.products]; // Show all if no city is selected
    }
  }}
