import { Broadcaster } from '../shared/broadcast/broadcast';
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
declare var jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'as-home',
    templateUrl: 'home.html'
})
export class HomeComponent implements AfterViewInit {
    constructor(public broadcaster: Broadcaster, public http: Http, public elementRef: ElementRef) {
        this.broadcaster.broadcast('NavbarStatus', true);
    }

     ngAfterViewInit() {
        // jQuery('#dataContainer').load(
        //      'http://52.166.75.236/api/adminsettings/pagesource?Url=https://www.expedia.co.in', function() {
        //     console.log( 'Load was performed.' );
        // });
        console.log(jQuery('#dataContainer').html());
    }

}
