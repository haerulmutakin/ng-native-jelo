import { BmkgWeatherService } from '~/app/application/services/bmkg-weather.service';
import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent { 
    constructor(
        private weatherSvc: BmkgWeatherService
    ){
        // this.weatherSvc.setData();
    }
}
