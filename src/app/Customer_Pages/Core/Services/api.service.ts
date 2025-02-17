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

  getPropertyById(id:any): Observable<any> {
    return this.http.get(`${this.apiUrlStartPoint}propertiesList/${id}`);
  }

  updateProperty(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrlStartPoint}propertiesList/${id}`, user); // PUT for updating the user
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
  getAllInteriorDesign():Observable<any>{
    return this.http.get(`${this.apiUrlStartPoint}interiorDesign`)
  }

  propertyUpload(obj: any): Observable<any> {
    return this.http.post(`${this.apiUrlStartPoint}propertiesList`, obj);
  }
  // uploadDocuments(userId: number, files: any[]): Observable<any> {
  //   return this.http.patch(`${this.apiUrlStartPoint}/${userId}`, { documents: files });
  // }
  getUserDocuments(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrlStartPoint}/${userId}`);
  }

  propertyRegistratation(obj: any): Observable<any> {
    return this.http.post(`${this.apiUrlStartPoint}propertyRegister`, obj);
  }

}
