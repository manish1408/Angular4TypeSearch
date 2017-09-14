"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var index_1 = require("./index");
var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    core_1.NgModule({
        declarations: [
            index_1.NavbarComponent
        ],
        imports: [
            router_1.RouterModule, platform_browser_1.BrowserModule
        ],
        exports: [
            index_1.NavbarComponent
        ]
    })
], NavbarModule);
exports.NavbarModule = NavbarModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLDhEQUEwRDtBQUMxRCxpQ0FBMEM7QUFhMUMsSUFBYSxZQUFZO0lBQXpCO0lBQ0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFEWSxZQUFZO0lBWHhCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLHVCQUFlO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wscUJBQVksRUFBRSxnQ0FBYTtTQUM5QjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFlO1NBQ2xCO0tBQ0osQ0FBQztHQUNXLFlBQVksQ0FDeEI7QUFEWSxvQ0FBWSIsImZpbGUiOiJhcHAvc2hhcmVkL25hdmJhci9uYXZiYXIubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTmF2YmFyQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZSwgQnJvd3Nlck1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOYXZiYXJDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhck1vZHVsZSB7XG59XG4iXX0=
