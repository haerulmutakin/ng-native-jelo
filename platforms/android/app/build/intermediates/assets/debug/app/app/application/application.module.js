"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var home_component_1 = require("./home/home.component");
var application_routing_1 = require("./application.routing");
var ApplicationModule = /** @class */ (function () {
    function ApplicationModule() {
    }
    ApplicationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                application_routing_1.ApplicationRoutingModule
            ],
            declarations: [home_component_1.HomeComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ApplicationModule);
    return ApplicationModule;
}());
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwbGljYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSx3REFBc0Q7QUFDdEQsNkRBQWlFO0FBVWpFO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFSN0IsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGlDQUF3QjtnQkFDeEIsOENBQXdCO2FBQ3pCO1lBQ0QsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcGxpY2F0aW9uLnJvdXRpbmcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgIEFwcGxpY2F0aW9uUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uTW9kdWxlIHsgfVxuIl19