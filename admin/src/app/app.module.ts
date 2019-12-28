import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PortalModule} from './containers/portal/portal.module';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
