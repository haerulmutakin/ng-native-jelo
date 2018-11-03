"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var search_component_1 = require("./search/search.component");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'search',
        component: search_component_1.SearchComponent
    }
];
var ApplicationRoutingModule = /** @class */ (function () {
    function ApplicationRoutingModule() {
    }
    ApplicationRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ApplicationRoutingModule);
    return ApplicationRoutingModule;
}());
exports.ApplicationRoutingModule = ApplicationRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24ucm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uLnJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4REFBNEQ7QUFDNUQsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSx3REFBc0Q7QUFFdEQsSUFBTSxNQUFNLEdBQVc7SUFFbkI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSw4QkFBYTtLQUMzQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsa0NBQWU7S0FDN0I7Q0FDSixDQUFDO0FBTUY7SUFBQTtJQUF3QyxDQUFDO0lBQTVCLHdCQUF3QjtRQUpwQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLHdCQUF3QixDQUFJO0lBQUQsK0JBQUM7Q0FBQSxBQUF6QyxJQUF5QztBQUE1Qiw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcblxuICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnc2VhcmNoJyxcbiAgICAgICAgY29tcG9uZW50OiBTZWFyY2hDb21wb25lbnRcbiAgICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Sb3V0aW5nTW9kdWxlIHsgfSJdfQ==