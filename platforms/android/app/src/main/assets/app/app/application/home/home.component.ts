import { BmkgWeatherService } from './../services/bmkg-weather.service';
import { Component, OnInit } from '@angular/core';
import { weatherModel, place, cuaca } from '~/app/application/home/weateher.model';
import { Page } from 'tns-core-modules/ui/page';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {

  data: weatherModel;
  cuaca: cuaca;
  location: place;

  constructor(
    private page: Page,
    private router: Router,
    private bmkgSvc: BmkgWeatherService
  ) {
    // this.page.actionBarHidden = true;
  }

  ngOnInit() {
    const cityId = this.bmkgSvc.getData();
    console.log(cityId);
    let params;
    if (cityId === undefined) {
      params = '1642911';
    } else {
      params = cityId;
    }
    this.getWeather(params);
  }

  getWeather(id?:any) {
    this.bmkgSvc.get(id).subscribe( items => {
      this.location = items;
      this.data = items.main;
      this.cuaca = items.weather;
      console.log(this.cuaca)
    })
  }

  onSearchTap() {
    this.router.navigate(['/search']);
  }

}
