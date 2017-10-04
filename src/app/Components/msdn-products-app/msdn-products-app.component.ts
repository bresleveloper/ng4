import { Component, OnInit } from '@angular/core';

import { MsdnProductsService } from '../../Services/msdn-products-extends.service';

@Component({
  selector: 'msdn-products-app',
  templateUrl: './msdn-products-app.component.html',
  styleUrls: ['./msdn-products-app.component.css'],
})
export class MsdnProductsAppComponent implements OnInit {

  l = console.log.bind(console);
  PID;
  pfilter;
  searchedProduct;

  constructor(public svc:MsdnProductsService) { }

  ngOnInit() {
    this.l('MsdnProductsAppComponent init');
  }

  SeachById(pid){
    //var self = this;
    this.svc.Get(pid)
      .then( p => {
        this.searchedProduct = p;
      })
      .catch( err => {
        this.searchedProduct = { Name:"Not Found" };
      })
  }

}
