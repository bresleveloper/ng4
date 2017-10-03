import { Component, OnInit } from '@angular/core';

import { MsdnProductsService } from '../../Services/msdn-products-extends.service';
//import { MsdnProductsService } from '../../Services/msdn-products/msdn-products-manager.service';

@Component({
  selector: 'msdn-products-app',
  templateUrl: './msdn-products-app.component.html',
  styleUrls: ['./msdn-products-app.component.css'],
  //providers: [MsdnProductsService]
})
export class MsdnProductsAppComponent implements OnInit {

  l = console.log.bind(console);

  constructor(public svc:MsdnProductsService) { }

  ngOnInit() {
    this.l('MsdnProductsAppComponent init');
  }

  SeachById(pid){

    //var self = this;

    this.svc.Get(pid)
      .then( (p) => {
        
      })
  }

}
