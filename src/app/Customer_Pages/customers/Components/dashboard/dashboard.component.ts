import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TabsModule } from 'primeng/tabs';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PopoverModule } from 'primeng/popover';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { ApiService } from '../../../Core/Services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TabViewModule,
    TabsModule,
    ButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    DialogModule,
    SidebarModule,
    ConfirmDialogModule,
    PopoverModule,
    InputTextModule,
    InputGroupAddonModule,
    InputGroup,
    ConfirmPopupModule,
    ToastModule,
    CarouselModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboardForm: FormGroup;
  activeTabIndex: number = 0;
  properties: any[] = []; 
  filteredProperties: any[] = [];
  filterBuyProperties:any[]=[]; 
  // Rent
  furnishing:any=[]=['Full','Semi','Fully Furnished'];
  preferedTenants:any[]=['Family','Anyone','Bachelor Male','Bachelor Female','Comapany'];
  rentSearchCriteriaForm:FormGroup;
  buySearchCriteriaForm:FormGroup;
  // displayBuyRentProperty:boolean=false;
  selectedTab: string = 'buy';
  buyProperty:any[]=[];

  tabs = [
    { route: '/dashboard/buy', label: 'Buy', icon: 'pi pi-shopping-cart', isActive: true },
    { route: '/dashboard/rent', label: 'Rent', icon: 'pi pi-home', isActive: false },
    { route: '/dashboard/commercial', label: 'Commercial', icon: 'pi pi-building', isActive: false }
  ];

  locations:any[]=['City Center','Suburban','Rural']

  propertyTypes = [
    { label: 'Commercial', value: 'Commercial' },
    { label: 'Residential', value: 'Residential' },
    { label: 'R-zone Plot', value: 'R-zone Plot' },
    { label: 'NA Plot', value: 'NA Plot' }
  ];

  budgetOptions = [
    { label: 'Up to 5,00,000', value: '5,00,000' },
    { label: '5,00,000 - 10,00,000', value: '10,00,000' },
    { label: '10,00,000 - 20,00,000', value: '20,00,000' },
    { label: 'Above 20,00,000', value: 'Above 20,00,000' }
  ];

  propertyImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7BlPQnpAmVTuhPN2UsvfgkxGVNzfsHZwlg&s',
    'https://3.imimg.com/data3/QF/VC/MY-11005443/princetown.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFlyQWxv72erCxTodjvHGPFEUbWmzME43LA&s'
  ];

  constructor(private apiService: ApiService, private router: Router,private fb: FormBuilder) {
    this.dashboardForm = new FormGroup({
      tabSelection: new FormControl(''),
      searchCity: new FormControl(''),
      searchArea: new FormControl(''),
      searchPincode: new FormControl(''),
      searchPropertyName: new FormControl(''),
      propertyType: new FormControl(''),
      budget: new FormControl('')
    });
    this.rentSearchCriteriaForm= this.fb.group({
      rent: (''),
      city: (''),
      furnishing: [''],
      preferedTenants:['']

    });

    this.buySearchCriteriaForm=this.fb.group({
       location:['']
    })
   
  }

  ngOnInit(): void {
    this.resetRentFilters();
    this.fetchProperties();
    this.allBuyProperties();
    this.filteredProperties=[...this.properties];
    this.filterBuyProperties=[...this.buyProperty];
  }

  fetchProperties(): void {
    this.apiService.getProperties().subscribe((data: any) => {
      this.properties = data;
      this.filteredProperties = data; 
    });
  }

  // onTabChange(tabIndex: number): void {
  //   this.activeTabIndex = tabIndex;
  //   this.tabs.forEach((tab, index) => {
  //     tab.isActive = index === tabIndex;
  //   });
    
  // }

  onTabChange(event: any) {
    if (event.index === 0) {
        this.selectedTab = 'buy';
    } else if (event.index === 1) {
        this.selectedTab = 'rent';
    }
}

  // buyOrRent(){
  //   alert(this.displayBuyRentProperty);
  //  this.displayBuyRentProperty = !this.displayBuyRentProperty;
  // }

  onSubmit(): void {
    // const formValue = this.dashboardForm.value;
    // this.filteredProperties = this.properties.filter(property => {
    //   return (
    //     (!formValue.searchCity || property.city.toLowerCase().includes(formValue.searchCity.toLowerCase())) &&
    //     (!formValue.searchArea || property.location.toLowerCase().includes(formValue.searchArea.toLowerCase())) &&
    //     (!formValue.searchPincode || property.pincode === formValue.searchPincode) &&
    //     (!formValue.propertyType || property.propertyType === formValue.propertyType) &&
    //     (!formValue.budget || this.isWithinBudget(property.rent, formValue.budget))
    //   );
    // });
  }

  isWithinBudget(rent: number, budget: string): boolean {
    const budgetRange = budget.split(' - ');
    const minBudget = parseInt(budgetRange[0].replace(/,/g, ''), 10);
    const maxBudget = budgetRange[1] ? parseInt(budgetRange[1].replace(/,/g, ''), 10) : Infinity;
    return rent >= minBudget && rent <= maxBudget;
  }
  
  viewDetails(propertyId: string) {
    this.router.navigate(['/properties/propertyDetails', propertyId]);
  }

  searchRent(){
    const searchCriteria = this.rentSearchCriteriaForm.value;

    // Filter properties based on selected criteria
    this.filteredProperties = this.properties.filter(property => {
      const matchesProperty = searchCriteria.city ? property.city === searchCriteria.city : true;
      // const matchesCity = searchCriteria.selectedCity ? property.city.id === searchCriteria.selectedCity.id : true;
      const matchesCity = searchCriteria.rent ? property.rent === searchCriteria.rent : true;
      const matchesArea = searchCriteria.furnishing ? property.furnishing === searchCriteria.furnishing : true;
      const tenants=searchCriteria.preferedTenants ? property.preferedTenants === searchCriteria.preferedTenants : true;
      console.log('Matches:', matchesProperty, matchesCity, matchesArea,tenants);

      return matchesProperty && matchesCity && matchesArea && tenants;
    });

    console.log('Filtered Properties:', this.filteredProperties);
    console.log('Search Criteria:', searchCriteria);
    console.log('Current Property:', this.properties);
  }
  searchBuy(){
    const searchCriteria = this.buySearchCriteriaForm.value;

    // Filter properties based on selected criteria
    this.filterBuyProperties = this.buyProperty.filter(property => {
      const matchesProperty = searchCriteria.location ? property.location === searchCriteria.location : true;
      // const matchesCity = searchCriteria.selectedCity ? property.city.id === searchCriteria.selectedCity.id : true;
      // const matchesCity = searchCriteria.rent ? property.rent === searchCriteria.rent : true;
      // const matchesArea = searchCriteria.furnishing ? property.furnishing === searchCriteria.furnishing : true;
      // const tenants=searchCriteria.preferedTenants ? property.preferedTenants === searchCriteria.preferedTenants : true;
      // console.log('Matches:', matchesProperty, matchesCity, matchesArea,tenants);

      return matchesProperty
    });

    console.log('Filtered Properties:', this.filterBuyProperties);
    console.log('Search Criteria:', searchCriteria);
    console.log('Current Property:', this.buyProperty);
  }
  allBuyProperties(){
   this.apiService.getAllBuyProperty().subscribe((data:any)=>{
    this.buyProperty=data;
    this.filterBuyProperties=data;
   })
  }

  resetRentFilters() {
    this.filteredProperties = [...this.properties];
    this.rentSearchCriteriaForm.reset(); 
}
resetBuyFilters(){
  this.filterBuyProperties = [...this.buyProperty];
  this.buySearchCriteriaForm.reset(); 
}
}