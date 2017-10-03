import { Injectable } from '@angular/core';

import { BaseDreamService } from './base-service.service';

@Injectable()
export class MsdnProductsService extends BaseDreamService {

  products:any = [];

  constructor(){
    super('https://my-dream-app-server.apphb.com/api/products/');
    console.log('MsdnProductsService CTOR');
    this.GetAllProducts(); 
  }

  //TODO: private the products arr and here if it, if it exists, return it, otherwise ajax and return then a copy
  GetAllProducts() {
    console.info('GetAllProducts ');
    var self = this;
    
    this.Get().then( function GetAllProducts_then(productsJson) {
      console.log('GetAllProducts then');
      self.products = productsJson;
    }).catch( function GetAllProducts_catch(errorMsg) {
      console.error('GetAllProducts catch, errorMsg: ' + errorMsg);
    });
  }

}
