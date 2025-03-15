import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountryLookupService {

  private apiUrl = 'https://api.worldbank.org/v2/country/';
  
  constructor(private http: HttpClient) { }
  
  // This method gets data for each country from the API link provided by the World Bank
  fetchCountryInfo (countryCode: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${countryCode}?format=json`);
  }
}

