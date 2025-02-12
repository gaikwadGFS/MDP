import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrlStartPoint:string="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  customerRegistration(obj:any):Observable<any>{
   return this.http.post(`${this.apiUrlStartPoint}customerRegister`,obj);
  }

  customerLogin(obj: any): Observable<any> {
    return this.http.post(`${this.apiUrlStartPoint}customerRegister`, obj);
  }

  getAllCustomers():Observable<any>{
    return this.http.get(`${this.apiUrlStartPoint}customerRegister`)
  }

  getAllCities():Observable<any>{
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

}
