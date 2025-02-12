import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class ApiService {

  private dbUrl = 'assets/db.json'; // Adjust path as needed
  apiUrlStartPoint:string="http://localhost:3000/"

  constructor(private http: HttpClient) { }

  // Fetch all properties
  getProperties(): Observable<any> {
    return this.http.get<any>(this.dbUrl);
  }

  customerRegistration(obj:any):Observable<any>{
   return this.http.post(`${this.apiUrlStartPoint}customerRegister`,obj);
  }

  customerLogin(obj: any): Observable<any> {
    return this.http.post(`${this.apiUrlStartPoint}customerRegister`, obj);
  }

  getAllCustomers():Observable<any>{
    return this.http.get(`${this.apiUrlStartPoint}customerRegister`)
  }

  getAllInteriorDesign():Observable<any>{
    return this.http.get(`${this.apiUrlStartPoint}interior`)
  }


    }
}
