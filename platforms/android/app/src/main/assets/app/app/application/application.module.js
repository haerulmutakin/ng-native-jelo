"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bmkg_weather_service_1 = require("./services/bmkg-weather.service");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var http_client_1 = require("nativescript-angular/http-client");
var http_1 = require("@angular/common/http");
var home_component_1 = require("./home/home.component");
var application_routing_1 = require("./application.routing");
var search_component_1 = require("./search/search.component");
var ApplicationModule = /** @class */ (function () {
    function ApplicationModule() {
    }
    ApplicationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                application_routing_1.ApplicationRoutingModule,
                http_client_1.NativeScriptHttpClientModule,
                http_1.HttpClientModule
            ],
            declarations: [home_component_1.HomeComponent, search_component_1.SearchComponent],
            providers: [bmkg_weather_service_1.BmkgWeatherService],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ApplicationModule);
    return ApplicationModule;
}());
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwbGljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0VBQXFFO0FBQ3JFLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsZ0VBQWdGO0FBQ2hGLDZDQUF3RDtBQUN4RCx3REFBc0Q7QUFDdEQsNkRBQWlFO0FBQ2pFLDhEQUE0RDtBQWE1RDtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBWDdCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7Z0JBQ3hCLDhDQUF3QjtnQkFDeEIsMENBQTRCO2dCQUM1Qix1QkFBZ0I7YUFDakI7WUFDRCxZQUFZLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLGtDQUFlLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUUseUNBQWtCLENBQUU7WUFDakMsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQSxBQUFsQyxJQUFrQztBQUFyQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbWtnV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Jta2ctd2VhdGhlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi5yb3V0aW5nJztcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgIEFwcGxpY2F0aW9uUm91dGluZ01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSG9tZUNvbXBvbmVudCwgU2VhcmNoQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbIEJta2dXZWF0aGVyU2VydmljZSBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Nb2R1bGUgeyB9XG4iXX0=