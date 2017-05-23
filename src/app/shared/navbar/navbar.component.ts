import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Broadcaster } from '../broadcast/broadcast';
@Component({
    moduleId: module.id,
    selector: 'as-navbar',
    templateUrl: 'navbar.html',
})
export class NavbarComponent {
    @Input() brand: string;
    public showNavbar: boolean;
    constructor(public broadcaster: Broadcaster) {
        let self = this;
        this.showNavbar = true;
        this.broadcaster.on<boolean>('NavbarStatus')
            .subscribe(status => {
                this.showNavbar = status;
            });
    }

    changeNav(status: boolean) {
        console.log(status);
         this.showNavbar = status;
    }
}
