import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { Broadcaster } from './shared/broadcast/broadcast';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NavbarModule,
        HomeModule,
        ModalModule.forRoot(),
        routing
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders, Broadcaster],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
