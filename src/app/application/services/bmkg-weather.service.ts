import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { citylist } from '~/assets/city-list.json';

@Injectable({
  providedIn: 'root'
})
export class BmkgWeatherService {

  apiKey = '4264406ea2b5391e569606d2f9e73cef';
  baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

  jsonUrl = '~/assets/indonesian-city.json';

  public savedCityID;

  constructor(
    private httpClient: HttpClient
  ) { }

  get(params?: any): Observable<any> {
    const url = this.getEndpoint(params);
    return this.httpClient.get(url);
  }

  getEndpoint(city?:any) {
    return this.baseUrl + '?id=' + city + '&units=metric&APPID=' + this.apiKey; 
  }

  getCity(): Observable<any> {
    return this.httpClient.get(this.jsonUrl);
  }

  setData(id) {
    this.savedCityID = id;
  }

  unsetData() {
    this.savedCityID = null;
  }

  getData() {
    return this.savedCityID;
  }
}
