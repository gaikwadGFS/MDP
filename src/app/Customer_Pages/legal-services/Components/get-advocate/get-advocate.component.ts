import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-get-advocate',
  standalone: true,
  imports: [DividerModule, CommonModule, TabsModule, InputTextModule, FormsModule, Select,ButtonModule,ScrollPanelModule],
  templateUrl: './get-advocate.component.html',
  styleUrl: './get-advocate.component.css'
})
export class GetAdvocateComponent {

  cities: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  specialization: any[] = ["Property Verification", "Agreement Drafting", "Dispute Resolution", "Property Registration", "Tax and Compliance", "Inheritance and Partition Law"]
  rating: any[] = ["1 Start", "2 Start", "3 Start", "4 Start", "5 Start", "Above", "Most Reviews"];
  feeRamge: any[] = ["Below ₹5,000","₹5,000 - ₹10,000","₹10,000 and Above"]
}
