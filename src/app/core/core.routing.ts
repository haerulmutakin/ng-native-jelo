import { CoreComponent } from './core.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [

    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CoreRoutingModule { }