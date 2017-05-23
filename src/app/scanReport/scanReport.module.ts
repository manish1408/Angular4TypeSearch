import { NgModule } from '@angular/core';
import { ScanReportComponent } from './index';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    declarations: [
        ScanReportComponent
    ],
      imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
        ModalModule
    ],
    exports: [
        ScanReportComponent
    ]
})
export class ScanReportModule {
}
