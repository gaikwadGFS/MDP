import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-most-popular',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.css'
})
export class MostPopularComponent {
  properties = [
    { image: 'https://via.placeholder.com/300x200?text=Property+1', name: 'Modern 2BHK Flat', price: '₹45,00,000', description: 'Spacious 2BHK flat in a prime location.' },
    { image: 'https://via.placeholder.com/300x200?text=Property+2', name: 'Luxury 3BHK Apartment', price: '₹75,00,000', description: 'Luxury 3BHK apartment with modern amenities.' },
    { image: 'https://via.placeholder.com/300x200?text=Property+3', name: 'Commercial Office Space', price: '₹1,50,00,000', description: 'Well-located office space in a business hub.' },
    // Add more properties as needed
  ];

  propertyImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7BlPQnpAmVTuhPN2UsvfgkxGVNzfsHZwlg&s',
    'https://3.imimg.com/data3/QF/VC/MY-11005443/princetown.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFlyQWxv72erCxTodjvHGPFEUbWmzME43LA&s'
  ];

}
