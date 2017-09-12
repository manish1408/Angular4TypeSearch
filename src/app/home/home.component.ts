import { Broadcaster } from '../shared/broadcast/broadcast';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'as-home',
    templateUrl: 'home.html'
})
export class HomeComponent {
    constructor(public broadcaster: Broadcaster) {
        this.broadcaster.broadcast('NavbarStatus', false);
    }
}
