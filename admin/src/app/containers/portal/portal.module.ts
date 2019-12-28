import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalComponent} from './portal.component';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [PortalComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [PortalComponent],
})
export class PortalModule {}
