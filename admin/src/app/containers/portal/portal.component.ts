import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent {
  userName = 'Anonim';
  isLoggedIn = true;
  sideBarElements: string[] = ['Dashboard', 'Orders', 'Products', 'Customers', 'Reports'];

  logOut($event: Event) {
    this.isLoggedIn = false;
    this.userName = 'Anonim';
    alert('You have successfully logged out');
  }

  logIn($event: Event) {
    this.isLoggedIn = true;
  }

  onKey($event: KeyboardEvent) {
    this.userName = $event.code;
  }
}
