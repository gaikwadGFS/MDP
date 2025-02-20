import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { ApiService } from '../../../Customer_Pages/Core/Services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputTextModule,Select,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 cities:any[]=[];
 property:any=['Buy','Rent'];
 searchForm: FormGroup;
 properties:any[]=[];


  constructor(private apiSrv:ApiService,private fb: FormBuilder){
   this.allCities();
   this.loadProperties()
   this.searchForm = this.fb.group({
    selectedProperty: [''],
    selectedCity: [''],
    area: ['']
  });
  }

  allCities(){
    this.apiSrv.getAllCities().subscribe((res:any)=>{
       this.cities=res;
    })
  }
  loadProperties() {
    // Fetch or define your properties here
    this.properties = [
      {
        id: '1',
        name: 'Luxury Villa',
        city: { id: '4', name: 'Nashik' },
        area: '1000 ',
        type: 'Buy'
      },
      {
        id: '2',
        name: 'Modern Apartment',
        city: { id: '5', name: 'Pune' },
        area: '1500',
        type: 'Rent'
      },
      {
        id: '3',
        name: 'Cozy Cottage',
        city: { id: '5', name: 'Pune' },
        area: '1500',
        type: 'Rent'
      }
    ];
    
  }

  onSubmit() {
    const searchCriteria = this.searchForm.value;
  debugger
    // Filter properties based on selected criteria
    const filteredProperties = this.properties.filter(property => {
      debugger;
      const matchesProperty = searchCriteria.selectedProperty ? property.type === searchCriteria.selectedProperty : true;
      const matchesCity = searchCriteria.selectedCity ? property.city.id === searchCriteria.selectedCity.id : true;
      const matchesArea = searchCriteria.area ? property.area.includes(searchCriteria.area) : true;
  
      return matchesProperty && matchesCity && matchesArea;
    });
  
    console.log('Filtered Properties:', filteredProperties);
  }
  
  
}
