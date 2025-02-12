import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';


export interface Advocate {
  id: number;
  name: string;
  cityId: number;
  specialization: string;
  rating: number;
  fee: number;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchAPIService {

  private dbUrl = 'http://localhost:3000/advocates'; // Path to your db.json file

  constructor(private http: HttpClient) {}

  getAdvocates(): Observable<Advocate[]> {
    return this.http.get<{ advocates: Advocate[] }>(this.dbUrl).pipe(
        map(data => data?.advocates),
        catchError(err => {
          console.error("Error fetching advocates:", err);
          return of([]); // Return an empty array on error
        })
    );
}

  filterAdvocates(
    advocates: Advocate[],
    city?: string,
    specialization?: string,
    rating?: number,
    feeMin?: number,
    feeMax?: number
  ): Advocate[] {
    return advocates.filter(advocate => {
      let cityMatch = true;
      let specializationMatch = true;
      let ratingMatch = true;
      let feeMatch = true;

      if (city) {
        cityMatch = advocate.city.toLowerCase() === city.toLowerCase(); // Direct comparison with city name
      }

      if (specialization) {
        specializationMatch = advocate.specialization.toLowerCase() === specialization.toLowerCase(); //Direct comparison with specialization
      }

      if (rating) {
        ratingMatch = advocate.rating >= rating;
      }

      if (feeMin !== undefined && feeMax !== undefined) {
        feeMatch = advocate.fee >= feeMin && advocate.fee <= feeMax;
      } else if (feeMin !== undefined) {
        feeMatch = advocate.fee >= feeMin;
      } else if (feeMax !== undefined) {
        feeMatch = advocate.fee <= feeMax;
      }

      return cityMatch && specializationMatch && ratingMatch && feeMatch;
    });
  }
}
