import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { FormControl } from '@angular/forms'; 
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-maha-rera',
  standalone: true,
  imports: [TableModule,FileUploadModule,ButtonModule,CalendarModule,FormsModule,CommonModule],
  templateUrl: './check-maha-rera.component.html',
  styleUrl: './check-maha-rera.component.css'
})
export class CheckMahaReraComponent {
  loading: boolean = false;
  
  documents = [
    { subject: 'Maharashtra Real Estate Regulatory Authority (General) (Amendment) Regulations, 2025', date: new Date(), uploadedFile: null },
    { subject: 'Maharashtra Real Estate Regulatory Authority ( General) (Amendment) Regulations, 2021', date: new Date(), uploadedFile: null },
    { subject: 'Maharashtra Real Estate Regulatory Authority ( General) (Amendment) Regulations, 2024', date: new Date(), uploadedFile: null },
    { subject: 'MahaRERA General (Second Amendment) Regulations 2019.	', date: new Date(), uploadedFile: null },
    { subject: 'MahaRERA General (Amendment) Regulations 2017.	', date: new Date(), uploadedFile: null },
    { subject: 'MahaRERA General Regulations 2017	', date: new Date(), uploadedFile: null },
    { subject: 'Maharashtra Real Estate Regulatory Authority (Recruitment and Conditions of Service of Employees) Regulations 2017	', date: new Date(), uploadedFile: null }

  ];

  onUpload(event: any, doc: any) {
    const file = event.files[0];
    doc.uploadedFile = file;
  }



  load(): void {
    this.loading = true; // Start loading
    console.log('Load method triggered');

    // Simulate some asynchronous operation
    setTimeout(() => {
      this.loading = false; // Stop loading
    }, 2000);
  }


  // myForm = new FormGroup({
  //   search: new FormControl(''),
  // });

  // search() {
  //   console.log('Searching for:', this.myForm.value.search);
  // }

  // resetForm() {
  //   this.myForm.reset(); // Clears the input field
  // }


}
