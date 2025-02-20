import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { ApiService } from '../../../Customer_Pages/Core/Services/api.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputTextModule, Select, ReactiveFormsModule, CommonModule, ButtonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cities: any[] = ['Pune', 'Nashik'];
  property: any = ['Buy', 'Rent'];
  searchForm: FormGroup;
  properties: any[] = [];
  filteredProperties: any[] = [];
  displayProperties: boolean = true;

  constructor(private apiSrv: ApiService, private fb: FormBuilder) {
    //  this.allCities();
    this.loadProperties();
    this.searchForm = this.fb.group({
      selectedProperty: [''],
      selectedCity: [''],
      area: ['']
    });
  }

  ngOnInit(): void {
    this.filteredProperties = [...this.properties];
  }
  allCities() {
    this.apiSrv.getAllCities().subscribe((res: any) => {
      this.cities = res;
    })
  }
  loadProperties() {
    // Fetch or define your properties here
    this.properties = [
      {
        id: '1',
        name: 'Luxury Villa',
        city: 'Pune',
        area: '1000',
        type: 'Buy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, voluptatibus provident sapiente recusandae exercitationem repudiandae consequuntur suscipit illo possimus maxime.',
        img: 'https://media.istockphoto.com/id/1396856251/photo/colonial-house.jpg?s=612x612&w=0&k=20&c=_tGiix_HTQkJj2piTsilMuVef9v2nUwEkSC9Alo89BM='
      },
      {
        id: '2',
        name: 'Modern Apartment',
        city: 'Pune',
        area: '1500',
        type: 'Rent',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, voluptatibus provident sapiente recusandae exercitationem repudiandae consequuntur suscipit illo possimus maxime.',
        img: 'https://cdn.britannica.com/05/157305-004-53D5D212.jpg'
      },
      {
        id: '3',
        name: 'Cozy Cottage',
        city: 'Nashik',
        area: '1500',
        type: 'Rent',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, voluptatibus provident sapiente recusandae exercitationem repudiandae consequuntur suscipit illo possimus maxime.',
        img: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D'
      },
      {
        id: '4',
        name: 'Sky Villa',
        city: 'Nashik',
        area: '1000',
        type: 'Buy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, voluptatibus provident sapiente recusandae exercitationem repudiandae consequuntur suscipit illo possimus maxime.',
        img: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D'
      }
    ];

  }

  onSubmit() {
    const searchCriteria = this.searchForm.value;

    // Filter properties based on selected criteria
    this.filteredProperties = this.properties.filter(property => {
      const matchesProperty = searchCriteria.selectedProperty ? property.type === searchCriteria.selectedProperty : true;
      // const matchesCity = searchCriteria.selectedCity ? property.city.id === searchCriteria.selectedCity.id : true;
      const matchesCity = searchCriteria.selectedCity ? property.city === searchCriteria.selectedCity : true;
      const matchesArea = searchCriteria.area ? property.area === searchCriteria.area : true;
      console.log('Matches:', matchesProperty, matchesCity, matchesArea);

      return matchesProperty && matchesCity && matchesArea;
    });

    console.log('Filtered Properties:', this.filteredProperties);
    console.log('Search Criteria:', searchCriteria);
    console.log('Current Property:', this.properties);
  }


  resetFilters() {
    this.filteredProperties = [...this.properties];
    this.searchForm.reset(); // Reset the form as well
}


}
