import { Component } from '@angular/core';
import { Broadcaster } from '../shared/broadcast/broadcast';

@Component({
    moduleId: module.id,
    selector: 'as-userdetails',
    templateUrl: 'userdetails.html'
})
export class UserdetailsComponent {
    constructor(public broadcaster: Broadcaster) {
        this.broadcaster.broadcast('NavbarStatus', true);
    }
}
