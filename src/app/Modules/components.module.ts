import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//npm modules
import { NgPipesModule } from 'ngx-pipes';
import { NgxCarouselModule } from 'ngx-carousel';
import { CarouselModule } from 'angular4-carousel'

//my dream app modules
import { MaterialArmadaModule } from '../Modules/material.module';
import { Firebase2Module } from '../Modules/firebase2.module';

//my dream app services
import { MsdnProductsService } from '../Services/msdn-products-extends.service';
import { Firebase2Service } from '../Services/firebase2.service';

//my dream app pages
import { DreamHomeComponent } from '../Pages/dream-home/dream-home.component';
import { DreamAboutComponent } from '../Pages/dream-about/dream-about.component';

//my dream app components
import { DreamClockComponent, ZeroPipe } from '../Components/dream-clock/dream-clock.component';
import { MaterialDatepickerComponent } from '../Components/material-datepicker/material-datepicker.component';
import { MsdnProductsAppComponent } from '../Components/msdn-products-app/msdn-products-app.component';
import { ComponentWrapperComponent } from '../Components/component-wrapper/component-wrapper.component';
import { JobOffersComponent } from '../Components/job-offers/job-offers.component';
import { HelpGroupComponent } from '../Components/help-group/help-group.component';
import { Firebase2UiComponent, FireBaseUILoginDialog } from '../Components/firebase2-ui/firebase2-ui.component';
import { FireBaseUIMessageDialog } from '../Components/firebase2-ui/dialogs/message/message.component';


@NgModule({
  declarations:[
    //pages
    DreamHomeComponent,
    DreamAboutComponent,

    //components
    DreamClockComponent, ZeroPipe,
    MaterialDatepickerComponent,
    MsdnProductsAppComponent,
    ComponentWrapperComponent,
    JobOffersComponent, 
    HelpGroupComponent,
    Firebase2UiComponent, FireBaseUILoginDialog,FireBaseUIMessageDialog

  ],

  entryComponents: [FireBaseUILoginDialog,FireBaseUIMessageDialog],

  imports:[
    BrowserModule, 
    FormsModule, 
    MaterialArmadaModule, 
    Firebase2Module,

    NgPipesModule,
    NgxCarouselModule,
    CarouselModule,
  ],

  providers:[
    MsdnProductsService, 
    Firebase2Service
  ],

})
export class ComponentsSwarmModule { }