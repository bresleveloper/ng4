import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NgPipesModule } from 'ngx-pipes';
import { CarouselModule } from 'angular4-carousel';

import { MaterialArmadaModule } from '../Modules/material.module';

import { DreamHomeComponent } from '../Pages/dream-home/dream-home.component';
import { DreamAboutComponent } from '../Pages/dream-about/dream-about.component';

import { DreamClockComponent } from '../Components/dream-clock/dream-clock.component';
import { MaterialDatepickerComponent } from '../Components/material-datepicker/material-datepicker.component';
import { MsdnProductsAppComponent } from '../Components/msdn-products-app/msdn-products-app.component';
import { JobOffersComponent } from '../Components/job-offers/job-offers.component';
import { ComponentWrapperComponent } from '../Components/component-wrapper/component-wrapper.component';

import { MsdnProductsService } from '../Services/msdn-products-extends.service';

@NgModule({
  declarations:[
    //pages
    DreamHomeComponent,
    DreamAboutComponent,

    //components
    DreamClockComponent,
    MaterialDatepickerComponent,
    MsdnProductsAppComponent,
    JobOffersComponent, 
    ComponentWrapperComponent,
  ],

  imports:[
    BrowserModule, 
    FormsModule, 
    MaterialArmadaModule, 
    NgPipesModule,
    CarouselModule,
  ],

  providers:[
    MsdnProductsService
  ],

})
export class ComponentsSwarmModule { }