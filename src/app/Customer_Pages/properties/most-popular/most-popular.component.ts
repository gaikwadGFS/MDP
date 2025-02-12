import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ApiService } from '../../../../Services/api.service';

@Component({
  selector: 'app-most-popular',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  providers:[ApiService],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.css'
})
export class MostPopularComponent {
  propertiesList: any[] = [];

  propertyImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7BlPQnpAmVTuhPN2UsvfgkxGVNzfsHZwlg&s',
    'https://3.imimg.com/data3/QF/VC/MY-11005443/princetown.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFlyQWxv72erCxTodjvHGPFEUbWmzME43LA&s'
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProperties().subscribe((data) => {
      this.propertiesList = data.propertiesList;
    });
  }

}
