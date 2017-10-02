import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialArmadaModule } from '../Modules/material.module';

import { DreamHomeComponent } from '../Pages/dream-home/dream-home.component';
import { DreamAboutComponent } from '../Pages/dream-about/dream-about.component';

import { MsdnProductsAppComponent } from '../Components/msdn-products-app/msdn-products-app.component';
import { DreamClockComponent } from '../Components/dream-clock/dream-clock.component';
import { MaterialDatepickerComponent } from '../Components/material-datepicker/material-datepicker.component';

import { MsdnProductsService } from '../Services/msdn-products-extends.service';

@NgModule({
  declarations:[
    //pages
    DreamHomeComponent,
    DreamAboutComponent,

    //components
    MsdnProductsAppComponent,
    DreamClockComponent,
    MaterialDatepickerComponent,
  
  ],

  imports:[MaterialArmadaModule, BrowserModule],

  providers:[
    MsdnProductsService
  ],

})
export class ComponentsSwarmModule { }