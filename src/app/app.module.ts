import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LOCALE_ID } from '@angular/core'; 
import { ComponentsSwarmModule } from './Modules/components.module';
import { DreamRoutingModule } from './Modules/dream-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    ComponentsSwarmModule,
    DreamRoutingModule,
    HttpModule
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