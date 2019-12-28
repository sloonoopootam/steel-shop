import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import { SubmenuDirective } from './header/submenu.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SubmenuDirective
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class ComponentsModule {}
