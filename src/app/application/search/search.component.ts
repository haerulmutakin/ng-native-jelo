import { Component, OnInit } from '@angular/core';
import { BmkgWeatherService } from '~/app/application/services/bmkg-weather.service';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Router } from '@angular/router';

@Component({
  selector: 'ns-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  moduleId: module.id,
})
export class SearchComponent implements OnInit {

  cityData: Array<any> = [];
  cityDataTemp: Array<any> = [];

  constructor(
    private router: Router,
    private bmgSvc: BmkgWeatherService
  ) { }

  ngOnInit() {
    this.bmgSvc.getCity().subscribe( value => {
      const authorities: Array<any> = value.data;
      this.cityData = authorities;
      this.cityDataTemp = authorities;
    });
  }

  onTextChanged($event) {
    let searchBar = <SearchBar>$event.object;
    const searchKeyword = searchBar.text.toLowerCase();
    let filteredSubject = [];
    if (!searchKeyword) {
      filteredSubject = this.cityDataTemp;
    } else {
      this.cityDataTemp.forEach (value => {
        if (String(value.name).toLowerCase().includes(searchKeyword)) {
          filteredSubject.push(value);
        }
      });
    }
    this.cityData = filteredSubject;
  }

  OnCitySelect($event) {
    console.log($event.view.bindingContext.name);
    this.bmgSvc.setData($event.view.bindingContext.id);
    this.router.navigate(['/']);
  }

}
