import { Component } from '@angular/core';
import { Broadcaster } from '../shared/broadcast/broadcast';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'as-login',
    templateUrl: 'login.html'
})
export class LoginComponent {
  constructor (public broadcaster: Broadcaster) {
    this.broadcaster.broadcast('NavbarStatus', false);
  }

  toggleNav() {
    this.broadcaster.broadcast('NavbarStatus', false);
  }
  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
  }
}
