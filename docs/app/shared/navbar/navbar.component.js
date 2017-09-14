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
var core_1 = require("@angular/core");
var broadcast_1 = require("../broadcast/broadcast");
var NavbarComponent = (function () {
    function NavbarComponent(broadcaster) {
        var _this = this;
        this.broadcaster = broadcaster;
        var self = this;
        this.showNavbar = true;
        this.broadcaster.on('NavbarStatus')
            .subscribe(function (status) {
            _this.showNavbar = status;
        });
    }
    NavbarComponent.prototype.changeNav = function (status) {
        console.log(status);
        this.showNavbar = status;
    };
    return NavbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NavbarComponent.prototype, "brand", void 0);
NavbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'as-navbar',
        templateUrl: 'navbar.html',
    }),
    __metadata("design:paramtypes", [broadcast_1.Broadcaster])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEU7QUFDMUUsb0RBQXFEO0FBTXJELElBQWEsZUFBZTtJQUd4Qix5QkFBbUIsV0FBd0I7UUFBM0MsaUJBT0M7UUFQa0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFVLGNBQWMsQ0FBQzthQUN2QyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLE1BQWU7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBZlk7SUFBUixZQUFLLEVBQUU7OzhDQUFlO0FBRGQsZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxhQUFhO0tBQzdCLENBQUM7cUNBSWtDLHVCQUFXO0dBSGxDLGVBQWUsQ0FnQjNCO0FBaEJZLDBDQUFlIiwiZmlsZSI6ImFwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvYWRjYXN0ZXIgfSBmcm9tICcuLi9icm9hZGNhc3QvYnJvYWRjYXN0JztcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcy1uYXZiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnbmF2YmFyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIGJyYW5kOiBzdHJpbmc7XG4gICAgcHVibGljIHNob3dOYXZiYXI6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IocHVibGljIGJyb2FkY2FzdGVyOiBCcm9hZGNhc3Rlcikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2hvd05hdmJhciA9IHRydWU7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0ZXIub248Ym9vbGVhbj4oJ05hdmJhclN0YXR1cycpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TmF2YmFyID0gc3RhdHVzO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlTmF2KHN0YXR1czogYm9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMpO1xuICAgICAgICAgdGhpcy5zaG93TmF2YmFyID0gc3RhdHVzO1xuICAgIH1cbn1cbiJdfQ==
