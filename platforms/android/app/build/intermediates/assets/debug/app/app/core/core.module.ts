import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './authentication/login/login.component';
import { CoreRoutingModule } from './core.routing';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    CoreRoutingModule
  ],
  declarations: [LoginComponent, CoreComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule { }
