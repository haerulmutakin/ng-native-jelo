"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
// import { citylist } from '~/assets/city-list.json';
var BmkgWeatherService = /** @class */ (function () {
    function BmkgWeatherService(httpClient) {
        this.httpClient = httpClient;
        this.apiKey = '4264406ea2b5391e569606d2f9e73cef';
        this.baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
        this.jsonUrl = '~/assets/indonesian-city.json';
    }
    BmkgWeatherService.prototype.get = function (params) {
        var url = this.getEndpoint(params);
        return this.httpClient.get(url);
    };
    BmkgWeatherService.prototype.getEndpoint = function (city) {
        return this.baseUrl + '?id=' + city + '&units=metric&APPID=' + this.apiKey;
    };
    BmkgWeatherService.prototype.getCity = function () {
        return this.httpClient.get(this.jsonUrl);
    };
    BmkgWeatherService.prototype.setData = function (id) {
        this.savedCityID = id;
    };
    BmkgWeatherService.prototype.unsetData = function () {
        this.savedCityID = null;
    };
    BmkgWeatherService.prototype.getData = function () {
        return this.savedCityID;
    };
    BmkgWeatherService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BmkgWeatherService);
    return BmkgWeatherService;
}());
exports.BmkgWeatherService = BmkgWeatherService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm1rZy13ZWF0aGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJibWtnLXdlYXRoZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFFbEQsc0RBQXNEO0FBS3REO0lBU0UsNEJBQ1UsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVJoQyxXQUFNLEdBQUcsa0NBQWtDLENBQUM7UUFDNUMsWUFBTyxHQUFHLGdEQUFnRCxDQUFDO1FBRTNELFlBQU8sR0FBRywrQkFBK0IsQ0FBQztJQU10QyxDQUFDO0lBRUwsZ0NBQUcsR0FBSCxVQUFJLE1BQVk7UUFDZCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLElBQVM7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxHQUFHLElBQUksR0FBRyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdFLENBQUM7SUFFRCxvQ0FBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsb0NBQU8sR0FBUCxVQUFRLEVBQUU7UUFDUixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxvQ0FBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQXBDVSxrQkFBa0I7UUFIOUIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBV3NCLGlCQUFVO09BVnJCLGtCQUFrQixDQXFDOUI7SUFBRCx5QkFBQztDQUFBLEFBckNELElBcUNDO0FBckNZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vLyBpbXBvcnQgeyBjaXR5bGlzdCB9IGZyb20gJ34vYXNzZXRzL2NpdHktbGlzdC5qc29uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQm1rZ1dlYXRoZXJTZXJ2aWNlIHtcblxuICBhcGlLZXkgPSAnNDI2NDQwNmVhMmI1MzkxZTU2OTYwNmQyZjllNzNjZWYnO1xuICBiYXNlVXJsID0gJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXInO1xuXG4gIGpzb25VcmwgPSAnfi9hc3NldHMvaW5kb25lc2lhbi1jaXR5Lmpzb24nO1xuXG4gIHB1YmxpYyBzYXZlZENpdHlJRDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnRcbiAgKSB7IH1cblxuICBnZXQocGFyYW1zPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldEVuZHBvaW50KHBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQodXJsKTtcbiAgfVxuXG4gIGdldEVuZHBvaW50KGNpdHk/OmFueSkge1xuICAgIHJldHVybiB0aGlzLmJhc2VVcmwgKyAnP2lkPScgKyBjaXR5ICsgJyZ1bml0cz1tZXRyaWMmQVBQSUQ9JyArIHRoaXMuYXBpS2V5OyBcbiAgfVxuXG4gIGdldENpdHkoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldCh0aGlzLmpzb25VcmwpO1xuICB9XG5cbiAgc2V0RGF0YShpZCkge1xuICAgIHRoaXMuc2F2ZWRDaXR5SUQgPSBpZDtcbiAgfVxuXG4gIHVuc2V0RGF0YSgpIHtcbiAgICB0aGlzLnNhdmVkQ2l0eUlEID0gbnVsbDtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZWRDaXR5SUQ7XG4gIH1cbn1cbiJdfQ==