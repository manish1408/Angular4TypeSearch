"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var broadcast_1 = require("../shared/broadcast/broadcast");
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent(broadcaster) {
        this.broadcaster = broadcaster;
        this.broadcaster.broadcast('NavbarStatus', false);
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'as-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [broadcast_1.Broadcaster])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTREO0FBQzVELHNDQUEwQztBQU8xQyxJQUFhLGFBQWE7SUFDdEIsdUJBQW1CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsV0FBVztLQUMzQixDQUFDO3FDQUVrQyx1QkFBVztHQURsQyxhQUFhLENBSXpCO0FBSlksc0NBQWEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm9hZGNhc3RlciB9IGZyb20gJy4uL3NoYXJlZC9icm9hZGNhc3QvYnJvYWRjYXN0JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXMtaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBicm9hZGNhc3RlcjogQnJvYWRjYXN0ZXIpIHtcbiAgICAgICAgdGhpcy5icm9hZGNhc3Rlci5icm9hZGNhc3QoJ05hdmJhclN0YXR1cycsIGZhbHNlKTtcbiAgICB9XG59XG4iXX0=
