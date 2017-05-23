import { NgModule } from '@angular/core';
import { LoginComponent } from './index';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule, FormsModule, ReactiveFormsModule
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {
}
