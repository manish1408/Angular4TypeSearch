import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ThemeModule } from './theme/theme.module';
import { UserdetailsModule } from './userdetails/userdetails.module';
import { SettingsModule } from './settings/settings.module';
import { TodolistModule } from './todolist/todolist.module';
import { ScanReportModule } from './scanReport/scanReport.module';
import { PagesModule } from './pages/pages.module';
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
        LoginModule,
        TodolistModule,
        UserdetailsModule,
        SettingsModule,
        ScanReportModule,
        PagesModule,
        ThemeModule,
        ModalModule.forRoot(),
        routing
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders, Broadcaster],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
