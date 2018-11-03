"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bmkg_weather_service_1 = require("~/app/application/services/bmkg-weather.service");
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(weatherSvc) {
        this.weatherSvc = weatherSvc;
        // this.weatherSvc.setData();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            moduleId: module.id,
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [bmkg_weather_service_1.BmkgWeatherService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3RkFBcUY7QUFDckYsc0NBQTBDO0FBTzFDO0lBQ0ksc0JBQ1ksVUFBOEI7UUFBOUIsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFFdEMsNkJBQTZCO0lBQ2pDLENBQUM7SUFMUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtTQUN0QyxDQUFDO3lDQUcwQix5Q0FBa0I7T0FGakMsWUFBWSxDQU14QjtJQUFELG1CQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbWtnV2VhdGhlclNlcnZpY2UgfSBmcm9tICd+L2FwcC9hcHBsaWNhdGlvbi9zZXJ2aWNlcy9ibWtnLXdlYXRoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHdlYXRoZXJTdmM6IEJta2dXZWF0aGVyU2VydmljZVxuICAgICl7XG4gICAgICAgIC8vIHRoaXMud2VhdGhlclN2Yy5zZXREYXRhKCk7XG4gICAgfVxufVxuIl19