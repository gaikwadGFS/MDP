import { Component, forwardRef, input, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ApiService } from '../../../Core/Services/api.service';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-get-advocate',
  standalone: true,
  imports: [DividerModule, DropdownModule, CommonModule, TabsModule, InputTextModule, FormsModule, ButtonModule, ScrollPanelModule, AutoCompleteModule],
  providers: [ApiService],
  templateUrl: './get-advocate.component.html',
  styleUrl: './get-advocate.component.css'
})
export class GetAdvocateComponent implements OnInit {


  cities: any[] = [];
  advocates: any[] = [];
  selectedCity: any = null;
  displayData: boolean = false;
  constructor(private apiSrv: ApiService) {
    this.allCities();
  }
  ngOnInit() {
    this.apiSrv.searchCities('').subscribe((data) => {
      this.cities = data; // Load all cities initially
    });
  }
  allCities() {
    this.apiSrv.getAllCities().subscribe((res: any) => {
      console.log(res);
      this.cities = res
    })
  }

  onCitySelect() {
    this.displayData = true

    if (this.selectedCity?.id) {
      this.apiSrv.getAdvocatesByCity(this.selectedCity.id).subscribe((data) => {
        this.advocates = data;
      });
    } else {
      this.advocates = [];
    }
  }

  searchAdvocates() {
    this.displayData = true;
    if (this.selectedCity?.id) {
      this.apiSrv.getAdvocatesByCity(this.selectedCity.id).subscribe((data) => {
        this.advocates = data;
      });
    } else {
      this.advocates = [];
    }
  }

  clearSearch() {
    this.selectedCity = "";
  }




}
