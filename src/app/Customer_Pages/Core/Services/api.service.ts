import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  private dbUrl = 'assets/db.json'; // Adjust path as needed
  apiUrlStartPoint: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  // Fetch all properties
  getProperties(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/propertiesList");
  }

  customerRegistration(obj: any): Observable<any> {
    return this.http.post(`${this.apiUrlStartPoint}customerRegister`, obj);
  }
 

  customerLogin(obj: any): Observable<any> {
    return this.http.post(`${this.apiUrlStartPoint}customerRegister`, obj);
  }

  getAllCustomers(): Observable<any> {
    return this.http.get(`${this.apiUrlStartPoint}customerRegister`)
  }

  getAllCities(): Observable<any> {
    return this.http.get(`${this.apiUrlStartPoint}cities`)
  }

  // searchCities(name: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrlStartPoint}cities?name_like=${name}`);
  // }

  // getAdvocatesByCity(cityId: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrlStartPoint}advocates?cityId=${cityId}`);
  // }
  searchCities(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlStartPoint}cities?name_like=${name}`);
  }

  getAdvocatesByCity(cityId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlStartPoint}advocates?cityId=${cityId}`);
  }
<<<<<<< HEAD
  getAllInteriorDesign():Observable<any>{
    return this.http.get(`${this.apiUrlStartPoint}interiorDesign`)
=======
  getAllInteriorDesign(): Observable<any> {
    return this.http.get(`${this.apiUrlStartPoint}interior`)
>>>>>>> e81ddf5b0cd868409b8740399cfa3efdfd7ed320
  }

  propertyUpload(obj: any): Observable<any> {
    return this.http.post(`${this.apiUrlStartPoint}propertiesList`, obj);
  }

}
