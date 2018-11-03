import { SearchComponent } from './search/search.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';

const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ApplicationRoutingModule { }