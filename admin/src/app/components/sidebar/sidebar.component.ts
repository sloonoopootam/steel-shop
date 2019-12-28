import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input()
  sideBarElements: string[];
  selected: any;
  startItem = 0;
  itemLimit = 3;

  showMoreItems() {
    this.itemLimit = this.itemLimit + 3;
  }

  showLessItems() {
    this.itemLimit = this.itemLimit - 3;
  }

  select(item) {
    this.selected = item;
  }

  isActive(item) {
    return this.selected === item;
  }
}
