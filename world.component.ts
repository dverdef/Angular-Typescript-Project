import { Component } from '@angular/core';
import { CountryLookupService } from '../country-lookup.service';

interface CountryInformation {
  CountryName: string;
  CountryCapital: string;
  WorldRegion: string;
  incomeLevel: string;
  latitude: string;
  longitude: string;
}

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrl: './world.component.css',
})


export class WorldComponent{
  private apiUrl = 'https://api.worldbank.org/v2/country/';
  countryInfo: CountryInformation = {} as CountryInformation;
  
  constructor(private countrylookupService: CountryLookupService){ }
  data: any;
  selectCountryId: string = '';
  countryName: string = '';
  hoverCountryId: string = '';

  onCountryFloat({ target }: MouseEvent) {
    const countryId = (target as SVGPathElement)?.id;
    if (countryId) this.getCountryInfo(countryId);
  }

  
  onCountryExit(): void {
    this.countryInfo = {} as CountryInformation;
  }

  // This method fetches data from each country in the API
  private getCountryInfo(countryCode: string): void {
    this.countrylookupService.fetchCountryInfo(countryCode).subscribe({
      next: (response) => {
        const data = response?.[1]?.[0];
        if (data) {
          this.countryInfo = {
            CountryName: data.name,
            CountryCapital: data.capitalCity,
            WorldRegion: data.region.value,
            incomeLevel: data.incomeLevel.value,
            latitude: data.latitude,
            longitude: data.longitude
          };
        }
      },
      error: (error) => console.error('Cannot get country data! Please try again:', error)
    });
  }
}
