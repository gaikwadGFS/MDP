import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


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
    { subject: 'Maharashtra Real Estate Regulatory Authority (General) (Amendment) Regulations, 2025', date: new Date(), documentName: 'Algebra.pdf', fileUrl: 'assets/docs/Algebra.pdf' },
    { subject: 'Maharashtra Real Estate Regulatory Authority ( General) (Amendment) Regulations, 2021', date: new Date(), documentName: 'Algebra.pdf', fileUrl: 'assets/docs/Algebra.pdf' },
    { subject: 'Maharashtra Real Estate Regulatory Authority ( General) (Amendment) Regulations, 2024', date: new Date(), documentName: 'Algebra.pdf', fileUrl: 'assets/docs/Algebra.pdf' },
    { subject: 'MahaRERA General (Second Amendment) Regulations 2019.	', date: new Date(), documentName: 'Algebra.pdf', fileUrl: 'assets/docs/Algebra.pdf' },
    { subject: 'MahaRERA General (Amendment) Regulations 2017.	', date: new Date(), documentName: 'Algebra.pdf', fileUrl: 'assets/docs/Algebra.pdf' },
    { subject: 'MahaRERA General Regulations 2017	', date: new Date(), documentName: 'Algebra.pdf', fileUrl: 'assets/docs/Algebra.pdf'},
    { subject: 'Maharashtra Real Estate Regulatory Authority (Recruitment and Conditions of Service of Employees) Regulations 2017	', date: new Date(),documentName: 'Algebra.pdf', fileUrl: 'assets/docs/Algebra.pdf' }

  ];

 
  searchText: string = '';
  filteredDocuments = [...this.documents];

  search() {
    this.filteredDocuments = this.documents.filter(doc =>
      doc.subject.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  reset() {
    this.searchText = '';
    this.filteredDocuments = [...this.documents];
  }

  }




