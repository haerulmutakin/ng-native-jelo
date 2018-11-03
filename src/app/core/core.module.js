"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var login_component_1 = require("./authentication/login/login.component");
var core_routing_1 = require("./core.routing");
var core_component_1 = require("./core.component");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                core_routing_1.CoreRoutingModule
            ],
            declarations: [login_component_1.LoginComponent, core_component_1.CoreComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsMEVBQXdFO0FBQ3hFLCtDQUFtRDtBQUNuRCxtREFBaUQ7QUFVakQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQVJ0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCO2dCQUN4QixnQ0FBaUI7YUFDbEI7WUFDRCxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLDhCQUFhLENBQUM7WUFDN0MsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3JlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY29yZS5yb3V0aW5nJztcbmltcG9ydCB7IENvcmVDb21wb25lbnQgfSBmcm9tICcuL2NvcmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICBDb3JlUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMb2dpbkNvbXBvbmVudCwgQ29yZUNvbXBvbmVudF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHsgfVxuIl19