import { Component } from '@angular/core';
import { Broadcaster } from '../shared/broadcast/broadcast';

@Component({
    moduleId: module.id,
    selector: 'as-theme',
    templateUrl: 'theme.html'
})
export class ThemeComponent {
    constructor(public broadcaster: Broadcaster) {
        this.broadcaster.broadcast('NavbarStatus', true);
    }
}
