"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
var core_1 = require("@angular/core");
var router_2 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, router, activatedRoute) {
        this.page = page;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isLoginPage = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('this is login');
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.onSignUpTap = function () {
        this.isLoginPage = !this.isLoginPage;
    };
    LoginComponent.prototype.onSubmit = function () {
        this.router.navigate(['application'], { relativeTo: this.activatedRoute });
        console.log('login is touched');
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_2.Router,
            router_1.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQWlEO0FBQ2pELGlEQUFnRDtBQUNoRCxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBUXpDO0lBR0Usd0JBQ1UsSUFBVSxFQUNWLE1BQWMsRUFDZCxjQUE4QjtRQUY5QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUx4QyxnQkFBVyxHQUFHLElBQUksQ0FBQztJQU1mLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBQyxDQUFDLENBQUM7UUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFyQlUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FLZ0IsV0FBSTtZQUNGLGVBQU07WUFDRSx1QkFBYztPQU43QixjQUFjLENBdUIxQjtJQUFELHFCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0xvZ2luUGFnZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyBsb2dpbicpO1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgb25TaWduVXBUYXAoKSB7XG4gICAgdGhpcy5pc0xvZ2luUGFnZSA9ICF0aGlzLmlzTG9naW5QYWdlO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhcHBsaWNhdGlvbiddLCB7IHJlbGF0aXZlVG86IHRoaXMuYWN0aXZhdGVkUm91dGV9KTtcbiAgICBjb25zb2xlLmxvZygnbG9naW4gaXMgdG91Y2hlZCcpO1xuICB9XG5cbn1cbiJdfQ==