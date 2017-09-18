import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialArmadaModule} from './Modules/material.module';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { DreamClockComponent } from './Components/dream-clock/dream-clock.component';
import { MaterialDatepickerComponent } from './Components/material-datepicker/material-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    DreamClockComponent,
    MaterialDatepickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialArmadaModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'he-IL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
