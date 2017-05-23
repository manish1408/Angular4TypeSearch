import { Component } from '@angular/core';
import { Broadcaster } from '../shared/broadcast/broadcast';

@Component({
    moduleId: module.id,
    selector: 'as-pages',
    templateUrl: 'pages.html'
})
export class PagesComponent {
    constructor(public broadcaster: Broadcaster) {
        this.broadcaster.broadcast('NavbarStatus', true);
    }
}
