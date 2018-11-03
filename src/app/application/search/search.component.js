"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bmkg_weather_service_1 = require("~/app/application/services/bmkg-weather.service");
var router_1 = require("@angular/router");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(router, bmgSvc) {
        this.router = router;
        this.bmgSvc = bmgSvc;
        this.cityData = [];
        this.cityDataTemp = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bmgSvc.getCity().subscribe(function (value) {
            var authorities = value.data;
            _this.cityData = authorities;
            _this.cityDataTemp = authorities;
        });
    };
    SearchComponent.prototype.onTextChanged = function ($event) {
        var searchBar = $event.object;
        var searchKeyword = searchBar.text.toLowerCase();
        var filteredSubject = [];
        if (!searchKeyword) {
            filteredSubject = this.cityDataTemp;
        }
        else {
            this.cityDataTemp.forEach(function (value) {
                if (String(value.name).toLowerCase().includes(searchKeyword)) {
                    filteredSubject.push(value);
                }
            });
        }
        this.cityData = filteredSubject;
    };
    SearchComponent.prototype.OnCitySelect = function ($event) {
        console.log($event.view.bindingContext.name);
        this.bmgSvc.setData($event.view.bindingContext.id);
        this.router.navigate(['/']);
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'ns-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.Router,
            bmkg_weather_service_1.BmkgWeatherService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsd0ZBQXFGO0FBRXJGLDBDQUF5QztBQVF6QztJQUtFLHlCQUNVLE1BQWMsRUFDZCxNQUEwQjtRQUQxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFMcEMsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUMxQixpQkFBWSxHQUFlLEVBQUUsQ0FBQztJQUsxQixDQUFDO0lBRUwsa0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUUsVUFBQSxLQUFLO1lBQ3BDLElBQU0sV0FBVyxHQUFlLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDM0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDNUIsS0FBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLE1BQU07UUFDbEIsSUFBSSxTQUFTLEdBQWMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUUsVUFBQSxLQUFLO2dCQUM5QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdELGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLE1BQU07UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQXRDVSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3JDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQU9rQixlQUFNO1lBQ04seUNBQWtCO09BUHpCLGVBQWUsQ0F3QzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCbWtnV2VhdGhlclNlcnZpY2UgfSBmcm9tICd+L2FwcC9hcHBsaWNhdGlvbi9zZXJ2aWNlcy9ibWtnLXdlYXRoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjaXR5RGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICBjaXR5RGF0YVRlbXA6IEFycmF5PGFueT4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYm1nU3ZjOiBCbWtnV2VhdGhlclNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJtZ1N2Yy5nZXRDaXR5KCkuc3Vic2NyaWJlKCB2YWx1ZSA9PiB7XG4gICAgICBjb25zdCBhdXRob3JpdGllczogQXJyYXk8YW55PiA9IHZhbHVlLmRhdGE7XG4gICAgICB0aGlzLmNpdHlEYXRhID0gYXV0aG9yaXRpZXM7XG4gICAgICB0aGlzLmNpdHlEYXRhVGVtcCA9IGF1dGhvcml0aWVzO1xuICAgIH0pO1xuICB9XG5cbiAgb25UZXh0Q2hhbmdlZCgkZXZlbnQpIHtcbiAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj4kZXZlbnQub2JqZWN0O1xuICAgIGNvbnN0IHNlYXJjaEtleXdvcmQgPSBzZWFyY2hCYXIudGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBmaWx0ZXJlZFN1YmplY3QgPSBbXTtcbiAgICBpZiAoIXNlYXJjaEtleXdvcmQpIHtcbiAgICAgIGZpbHRlcmVkU3ViamVjdCA9IHRoaXMuY2l0eURhdGFUZW1wO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNpdHlEYXRhVGVtcC5mb3JFYWNoICh2YWx1ZSA9PiB7XG4gICAgICAgIGlmIChTdHJpbmcodmFsdWUubmFtZSkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hLZXl3b3JkKSkge1xuICAgICAgICAgIGZpbHRlcmVkU3ViamVjdC5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY2l0eURhdGEgPSBmaWx0ZXJlZFN1YmplY3Q7XG4gIH1cblxuICBPbkNpdHlTZWxlY3QoJGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJGV2ZW50LnZpZXcuYmluZGluZ0NvbnRleHQubmFtZSk7XG4gICAgdGhpcy5ibWdTdmMuc2V0RGF0YSgkZXZlbnQudmlldy5iaW5kaW5nQ29udGV4dC5pZCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pO1xuICB9XG5cbn1cbiJdfQ==