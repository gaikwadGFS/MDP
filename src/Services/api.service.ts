import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private dbUrl = 'assets/db.json'; // Adjust path as needed
  
  constructor(private http: HttpClient) {}

  getProperties(): Observable<any> {
    return this.http.get<any>(this.dbUrl);
  }
}


