import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private dbUrl = 'assets/db.json'; // Adjust path as needed

  constructor(private http: HttpClient) { }

  // Fetch all properties
  getProperties(): Observable<any> {
    return this.http.get<any>(this.dbUrl);
  }

  // Search properties based on criteria
  searchProperties(criteria: any): Observable<any> {
    return this.http.get<any>(this.dbUrl).pipe(
      map(data => {
        return data.propertiesList.filter((property: any) => {
          return (!criteria.city || property.location?.toLowerCase().includes(criteria.city.toLowerCase())) &&
                 (!criteria.area || property.location?.toLowerCase().includes(criteria.area.toLowerCase())) &&
                 (!criteria.pincode || property.location?.toLowerCase().includes(criteria.pincode.toLowerCase())) &&
                 (!criteria.propertyType || property.bhk?.toLowerCase().includes(criteria.propertyType.toLowerCase())) &&
                 (!criteria.budget || property.rent <= parseInt((criteria.budget || '').replace(/,/g, ''), 10));
        });
      })
    ); // ✅ **Closing `)` added correctly**
  }
}
