import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private dbUrl = 'assets/db.json'; // Path to local JSON data
  private apiUrlStartPoint: string = "http://localhost:3000/"; // Base API URL

  constructor(private http: HttpClient) {}

  // Fetch all properties
  getProperties(): Observable<any> {
    return this.http.get<any>(this.dbUrl);
  }
}
