import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeComponent } from './home/home.component';
import { ApplicationRoutingModule } from './application.routing';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ApplicationRoutingModule
  ],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ApplicationModule { }
