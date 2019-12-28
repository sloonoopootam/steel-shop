import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() signOut = new EventEmitter<Event>();
  @Output() signIn = new EventEmitter<Event>();
  @Output() keyboardInput = new EventEmitter<KeyboardEvent>();

  @Input() userName: string;
  @Input() isLoggedIn: boolean;

  onKeyEv() {
    this.keyboardInput.emit();
  }

  logOutEv() {
    this.signOut.emit();
  }

  logInEv() {
    this.signIn.emit();
  }
}
