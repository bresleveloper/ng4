import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID } from '@angular/core'; 
import 'hammerjs';
import { MaterialArmadaModule } from './Modules/material.module';
import { ComponentsSwarmModule } from './Modules/components.module';
import { DreamRoutingModule } from './Modules/dream-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavigationComponent,  
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,

    
    MaterialArmadaModule,
    ComponentsSwarmModule,
    DreamRoutingModule,

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'he-IL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*

git add .
git commit -m ""
git push -u origin master
ng build --prod --base-href https://bresleveloper.github.io/ng4/
ngh


*/