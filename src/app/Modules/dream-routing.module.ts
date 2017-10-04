import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

//pages components
import { DreamHomeComponent } from '../Pages/dream-home/dream-home.component';
import { DreamAboutComponent } from '../Pages/dream-about/dream-about.component';
import { MsdnProductsAppComponent } from '../Components/msdn-products-app/msdn-products-app.component';

const appRoutes: Routes = [
  //{ path: '**', component: PageNotFoundComponent },
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: DreamHomeComponent },
  { path: 'About', component: DreamAboutComponent },
  { path: 'msdn-product-app', component: MsdnProductsAppComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class DreamRoutingModule { }
