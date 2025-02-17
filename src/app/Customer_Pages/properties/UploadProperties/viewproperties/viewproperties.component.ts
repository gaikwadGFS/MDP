import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { RatingModule } from 'primeng/rating';
import { ApiService } from '../../../Core/Services/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-viewproperties',
  standalone: true,
  imports: [CardModule,ButtonModule,GalleriaModule,RatingModule,ButtonModule],
  templateUrl: './viewproperties.component.html',
  styleUrl: './viewproperties.component.css'
})
export class ViewpropertiesComponent {
  
  list:any[]=[];
  constructor(private apiSrv:ApiService,private route:Router){
    this.properties();
  }


    properties(){
      this.apiSrv.getProperties().subscribe((res:any)=>{
        this.list=res;
      })
    }


    onEdit(id:any){
      alert(id)
      this.route.navigate(['properties/uploadProperties/',id]);
    }
}
