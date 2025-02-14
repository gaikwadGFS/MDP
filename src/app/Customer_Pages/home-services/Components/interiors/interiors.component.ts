import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import{CarouselModule} from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from '../../../Core/Services/api.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-interiors',
  standalone: true,
  imports: [InputTextModule,CardModule,CommonModule,ButtonModule,CarouselModule,AccordionModule],
  providers:[ApiService],
  templateUrl: './interiors.component.html',
  styleUrl: './interiors.component.css'
})
export class InteriorsComponent {

  active: string = ''; 
  loading: boolean = false;


  interiorDesigns:any[]=[
    // { title: 'Modern Living Room', image: 'assets/constructions-1.jpg' },
    // { title: 'Classic Bedroom', image: 'assets/interior.jpg' },
    // { title: 'Minimalist Kitchen', image: 'assets/interior.jpg' }
    ];

  Hall:any[]=[]
   constructor(private apiService: ApiService) {}
  
    ngOnInit() {
      this.apiService.getAllInteriorDesign().subscribe((data) => {
        this.interiorDesigns = data;
        console.log(this.interiorDesigns)
      });
    }


   

  // Define the load() method
  load(): void {
    this.loading = true; // Start loading
    console.log('Load method triggered');

    // Simulate some asynchronous operation
    setTimeout(() => {
      this.loading = false; // Stop loading
    }, 2000);
  }




  


      

}
