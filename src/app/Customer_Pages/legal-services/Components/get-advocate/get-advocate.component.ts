import { Component, forwardRef, input, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Select } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
// import { ApiService } from '../../../Core/Services/api.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ApiService } from '../../../Core/Services/api.service';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-get-advocate',
  standalone: true,
  imports: [DividerModule,DropdownModule, CommonModule, TabsModule, InputTextModule, FormsModule, Select,ButtonModule,ScrollPanelModule,AutoCompleteModule ],
  providers:[ApiService],
  templateUrl: './get-advocate.component.html',
  styleUrl: './get-advocate.component.css'
})
export class GetAdvocateComponent implements OnInit {

  // cities: any[] = [
  //   { name: 'New York', code: 'NY' },
  //   { name: 'Rome', code: 'RM' },
  //   { name: 'London', code: 'LDN' },
  //   { name: 'Istanbul', code: 'IST' },
  //   { name: 'Paris', code: 'PRS' }
  // ];
  specialization: any[] = ["Property Verification", "Agreement Drafting", "Dispute Resolution", "Property Registration", "Tax and Compliance", "Inheritance and Partition Law"]
  rating: any[] = ["1 Start", "2 Start", "3 Start", "4 Start", "5 Start", "Above", "Most Reviews"];
  feeRamge: any[] = ["Below ₹5,000","₹5,000 - ₹10,000","₹10,000 and Above"]

  cities: any[] = [] ;
  advocates: any[] = [];
  selectedCity: any = null;
 displayData:boolean=false;
  constructor(private apiSrv:ApiService){
    this.allCities();
  }
  ngOnInit() {
    this.apiSrv.searchCities('').subscribe((data) => {
      this.cities = data; // Load all cities initially
    });
  }
  allCities(){
    this.apiSrv.getAllCities().subscribe((res:any)=>{
      console.log(res);
     this.cities=res
    })
  }

  // onSearch(event: any) {
  //   console.log(event);
  //   const searchTerm = event.query; // Access the search term correctly
  
  //   this.apiSrv.searchCities(searchTerm).subscribe((data) => {
  //     this.cities = data;
  //     this.advocates = []; // Clear advocates when searching new city
  //   });
  // }

  // onCitySelect(event: any) {
  //   console.log("Event", event);
  //   this.selectedCity = event.value; // Store selected city object

  //   if (this.selectedCity?.id) {
  //     this.apiSrv.getAdvocatesByCity(this.selectedCity.id).subscribe((data) => {
  //       this.advocates = data;
  //     });
  //   } else {
  //     this.advocates = [];
  //   }
  // }

  searchCities() {
    if (this.selectedCity && typeof this.selectedCity === 'string') {
      this.apiSrv.searchCities(this.selectedCity).subscribe((data) => {
        this.cities = data;
        this.advocates = []; // Clear advocates when searching new city
      });
    }
  }

  onCitySelect(event: any) {
    this.displayData=true
    console.log("Event", event);
    this.selectedCity = event.value; // Store selected city object

    if (this.selectedCity?.id) {
      this.apiSrv.getAdvocatesByCity(this.selectedCity.id).subscribe((data) => {
        this.advocates = data;
      });
    } else {
      this.advocates = [];
    }
  }
  // Using all fields

  

}
