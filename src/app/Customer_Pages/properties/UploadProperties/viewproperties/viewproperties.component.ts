import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { RatingModule } from 'primeng/rating';



@Component({
  selector: 'app-viewproperties',
  standalone: true,
  imports: [CardModule,ButtonModule,GalleriaModule,RatingModule,ButtonModule],
  templateUrl: './viewproperties.component.html',
  styleUrl: './viewproperties.component.css'
})
export class ViewpropertiesComponent {
  
}
