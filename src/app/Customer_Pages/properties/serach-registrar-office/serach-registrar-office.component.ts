import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-serach-registrar-office',
  standalone: true,
  imports: [CardModule,DropdownModule,TableModule,FormsModule,Select,ButtonModule,RatingModule],
  templateUrl: './serach-registrar-office.component.html',
  styleUrl: './serach-registrar-office.component.css'
})
export class SerachRegistrarOfficeComponent {





  cities:any[]=['', '', ''];






  products : any = [{   id: '1',
    srnumber: '1',
    Officename: 'Registrar Office Hinjawadi',
    Address: ' HPWM+2R6, Hinjawadi Village, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra',
    contact: '8446755298',
    SiteOfficeLink: "click here",
    Rating: '4.5',
    },
    {   id: '2',
      srnumber: '2',
      Officename: 'Registrar Office Hinjawadi',
      Address: ' HPWM+2R6, Hinjawadi Village, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra',
      contact: '8446755298',
      SiteOfficeLink: "click here",
      Rating: '4',
      },
      {   id: '3',
        srnumber: '3',
        Officename: 'Registrar Office Hinjawadi',
        Address: ' HPWM+2R6, Hinjawadi Village, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra',
        contact: '8446755298',
        SiteOfficeLink: "click here",
        Rating: '5',
        },
        {   id: '4',
          srnumber: '4',
          Officename: 'Registrar Office Hinjawadi',
          Address: ' HPWM+2R6, Hinjawadi Village, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra',
          contact: '8446755298',
          SiteOfficeLink: "click here",
          Rating: '5',
          },
          {   id: '5',
            srnumber: '5',
            Officename: 'Registrar Office Hinjawadi',
            Address: ' HPWM+2R6, Hinjawadi Village, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra',
            contact: '8446755298',
            SiteOfficeLink: "click here",
            Rating: '3.5',
            },
  
  
  
  
  
  
  
  
  
  
  
  ];
propertyType: any;
}
