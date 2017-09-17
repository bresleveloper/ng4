import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DreamClockComponent } from './Components/dream-clock/dream-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    DreamClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
