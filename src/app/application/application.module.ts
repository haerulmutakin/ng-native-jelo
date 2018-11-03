import { BmkgWeatherService } from './services/bmkg-weather.service';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ApplicationRoutingModule } from './application.routing';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ApplicationRoutingModule,
    NativeScriptHttpClientModule,
    HttpClientModule
  ],
  declarations: [HomeComponent, SearchComponent],
  providers: [ BmkgWeatherService ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ApplicationModule { }
