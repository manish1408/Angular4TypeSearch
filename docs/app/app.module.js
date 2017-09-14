"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_providers_1 = require("./app.providers");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var shared_1 = require("./shared");
var home_module_1 = require("./home/home.module");
var broadcast_1 = require("./shared/broadcast/broadcast");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            shared_1.NavbarModule,
            home_module_1.HomeModule,
            ngx_bootstrap_1.ModalModule.forRoot(),
            app_routing_1.routing
        ],
        providers: [app_providers_1.APP_PROVIDERS, app_routing_1.appRoutingProviders, broadcast_1.Broadcaster],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUUxRCxpREFBZ0Q7QUFDaEQsaURBQStDO0FBQy9DLDZDQUE2RDtBQUM3RCxtQ0FBd0M7QUFDeEMsa0RBQWdEO0FBQ2hELDBEQUEyRDtBQUMzRCwrQ0FBNEM7QUFnQjVDLElBQWEsU0FBUztJQUF0QjtJQUNBLENBQUM7SUFBRCxnQkFBQztBQUFELENBREEsQUFDQyxJQUFBO0FBRFksU0FBUztJQWRyQixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDViw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsZ0NBQWE7WUFDYixxQkFBWTtZQUNaLHdCQUFVO1lBQ1YsMkJBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDckIscUJBQU87U0FDVjtRQUNELFNBQVMsRUFBRSxDQUFFLDZCQUFhLEVBQUUsaUNBQW1CLEVBQUUsdUJBQVcsQ0FBQztRQUM3RCxTQUFTLEVBQUUsQ0FBRSw0QkFBWSxDQUFFO0tBQzlCLENBQUM7R0FDVyxTQUFTLENBQ3JCO0FBRFksOEJBQVMiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBBUFBfUFJPVklERVJTIH0gZnJvbSAnLi9hcHAucHJvdmlkZXJzJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBhcHBSb3V0aW5nUHJvdmlkZXJzLCByb3V0aW5nIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQgeyBOYXZiYXJNb2R1bGUgfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IEJyb2FkY2FzdGVyIH0gZnJvbSAnLi9zaGFyZWQvYnJvYWRjYXN0L2Jyb2FkY2FzdCc7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgTmF2YmFyTW9kdWxlLFxuICAgICAgICBIb21lTW9kdWxlLFxuICAgICAgICBNb2RhbE1vZHVsZS5mb3JSb290KCksXG4gICAgICAgIHJvdXRpbmdcbiAgICBdLFxuICAgIHByb3ZpZGVyczogWyBBUFBfUFJPVklERVJTLCBhcHBSb3V0aW5nUHJvdmlkZXJzLCBCcm9hZGNhc3Rlcl0sXG4gICAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=
