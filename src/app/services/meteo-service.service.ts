import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MeteoServiceService {


  private apiurl = 'https://prevision-meteo.ch/services/json';
    

  constructor(private http: HttpClient, private router:Router) { 
   }
    
   get() {
    return this.http.get<any>(`${this.apiurl}/lyon`);
  }
  //GET all film
   getfilm() {
    return this.http.get<any[]>(this.apiurl);
  }
}
