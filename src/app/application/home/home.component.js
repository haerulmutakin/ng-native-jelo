"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bmkg_weather_service_1 = require("./../services/bmkg-weather.service");
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("@angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page, router, bmkgSvc) {
        this.page = page;
        this.router = router;
        this.bmkgSvc = bmkgSvc;
        // this.page.actionBarHidden = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var cityId = this.bmkgSvc.getData();
        console.log(cityId);
        var params;
        if (cityId === undefined) {
            params = '1642911';
        }
        else {
            params = cityId;
        }
        this.getWeather(params);
    };
    HomeComponent.prototype.getWeather = function (id) {
        var _this = this;
        this.bmkgSvc.get(id).subscribe(function (items) {
            _this.location = items;
            _this.data = items.main;
            _this.cuaca = items.weather;
            console.log(_this.cuaca);
        });
    };
    HomeComponent.prototype.onSearchTap = function () {
        this.router.navigate(['/search']);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'ns-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.Router,
            bmkg_weather_service_1.BmkgWeatherService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJFQUF3RTtBQUN4RSxzQ0FBa0Q7QUFFbEQsaURBQWdEO0FBQ2hELDBDQUF5QztBQVF6QztJQU1FLHVCQUNVLElBQVUsRUFDVixNQUFjLEVBQ2QsT0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUVuQyxvQ0FBb0M7SUFDdEMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxNQUFNLENBQUM7UUFDWCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxFQUFPO1FBQWxCLGlCQU9DO1FBTkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFFLFVBQUEsS0FBSztZQUNuQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQXJDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQVFnQixXQUFJO1lBQ0YsZUFBTTtZQUNMLHlDQUFrQjtPQVQxQixhQUFhLENBdUN6QjtJQUFELG9CQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbWtnV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2Jta2ctd2VhdGhlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB3ZWF0aGVyTW9kZWwsIHBsYWNlLCBjdWFjYSB9IGZyb20gJ34vYXBwL2FwcGxpY2F0aW9uL2hvbWUvd2VhdGVoZXIubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGF0YTogd2VhdGhlck1vZGVsO1xuICBjdWFjYTogY3VhY2E7XG4gIGxvY2F0aW9uOiBwbGFjZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGJta2dTdmM6IEJta2dXZWF0aGVyU2VydmljZVxuICApIHtcbiAgICAvLyB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGNpdHlJZCA9IHRoaXMuYm1rZ1N2Yy5nZXREYXRhKCk7XG4gICAgY29uc29sZS5sb2coY2l0eUlkKTtcbiAgICBsZXQgcGFyYW1zO1xuICAgIGlmIChjaXR5SWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zID0gJzE2NDI5MTEnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXMgPSBjaXR5SWQ7XG4gICAgfVxuICAgIHRoaXMuZ2V0V2VhdGhlcihwYXJhbXMpO1xuICB9XG5cbiAgZ2V0V2VhdGhlcihpZD86YW55KSB7XG4gICAgdGhpcy5ibWtnU3ZjLmdldChpZCkuc3Vic2NyaWJlKCBpdGVtcyA9PiB7XG4gICAgICB0aGlzLmxvY2F0aW9uID0gaXRlbXM7XG4gICAgICB0aGlzLmRhdGEgPSBpdGVtcy5tYWluO1xuICAgICAgdGhpcy5jdWFjYSA9IGl0ZW1zLndlYXRoZXI7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1YWNhKVxuICAgIH0pXG4gIH1cblxuICBvblNlYXJjaFRhcCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zZWFyY2gnXSk7XG4gIH1cblxufVxuIl19