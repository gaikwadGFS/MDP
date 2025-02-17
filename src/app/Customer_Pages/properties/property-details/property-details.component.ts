import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Core/Services/api.service';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
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
  propertyId!: string;
  property: any = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.propertyId = params.get('id')!; // Get property ID from the route
      if (this.propertyId) {
        this.apiService.getPropertyById(this.propertyId).subscribe(
          data => {
            this.property = data;
          },
          error => {
            console.error("Error fetching property details:", error);
          }
        );
      }
    });
  }
}