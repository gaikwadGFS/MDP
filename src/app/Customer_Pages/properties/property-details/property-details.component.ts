import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Core/Services/api.service';
import { CommonModule } from '@angular/common'; // Import for *ngFor
import { CardModule } from 'primeng/card'; // Import PrimeNG Card
import { TagModule } from 'primeng/tag'; // Import PrimeNG Tag
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, ButtonModule, CarouselModule],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  property: any = null; // Store only one property

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProperties().subscribe((data) => {
      if (data.length > 0) {
        this.property = data[0]; // Assign only the first property
      }
    });
  }
}