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
  documents = [
    { subject: 'Math', date: new Date(), uploadedFile: null },
    { subject: 'Science', date: new Date(), uploadedFile: null },
    { subject: 'History', date: new Date(), uploadedFile: null }
  ];

  onUpload(event: any, doc: any) {
    const file = event.files[0];
    doc.uploadedFile = file;
  }

}
