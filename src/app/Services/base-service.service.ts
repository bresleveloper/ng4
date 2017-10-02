import { ReflectiveInjector } from '@angular/core';

import { Http, Response, Headers, RequestOptions, ResponseOptions } from '@angular/http';
import { XHRBackend, ConnectionBackend, BrowserXhr, XSRFStrategy, BaseResponseOptions, CookieXSRFStrategy, BaseRequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise'

export class BaseDreamService {

  private http:Http;
  constructor(private apiBaseUrl) {
    this.http =  ReflectiveInjector.resolveAndCreate([
      Http, BrowserXhr, 
      { provide: ConnectionBackend, useClass: XHRBackend },
      { provide: ResponseOptions, useClass: BaseResponseOptions },
      { provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy },
      { provide: RequestOptions, useClass: BaseRequestOptions }
    ]).get(Http);
  } 

  Get(url = ""){
    url = this.apiBaseUrl + url;
    var promise = new Promise ((resolve, reject) => {
      this.http.get(url)
        .toPromise()
        .then(function MsdnProductsService_Get_Success(res) { // Success
          console.log('Get (' + url + ') Success');
          console.log(res.json());
          resolve(res.json());
        },    
        function MsdnProductsService_Get_Error(msg) { // Error
          console.error('Get (' + url + ') Error');
          console.error(msg.json().Message);
          reject(msg.json().Message);
        });
    });
    return promise;
  }//end Get


}

  
