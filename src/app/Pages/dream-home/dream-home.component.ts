import { Component, OnInit } from '@angular/core';

import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'dream-home',
  templateUrl: './dream-home.component.html',
  styleUrls: ['./dream-home.component.css']
})
export class DreamHomeComponent implements OnInit {
  constructor() {
    var w = window.innerWidth;
    var b = window.document.body.offsetWidth;
    this.marginLeftSliderValue = ((w-b)/2.25)*-1;
  }

  public carouselBannerItems: Array<any>;
  public carouselBanner: NgxCarousel;

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  public marginLeftSliderValue;

  marginLeftSlider(){
    var w = window.innerWidth;
    var b = window.document.body.offsetWidth;
    return ((w-b)/2.25)*-1;
  }

  marginLeftSliderStyle(){
    return "'margin-left:" + this.marginLeftSlider() + "'";
  }

  ngOnInit(){

    /* ***** Main Slider ***** */

    //this.carouselBannerItems = [0, 1, 2, 3, 4];
    this.carouselBannerItems = [
      'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAx6AAAAJGRmZDRjNzMyLThmODQtNDljZi1iMWU2LWVmYTFjZWZhYjZjMg.jpg',
      'https://cdn.tinybuddha.com/wp-content/uploads/2015/06/Boy-Reaching-for-Stars.png',
      'https://az616578.vo.msecnd.net/files/2016/07/01/636029949024208563265850935_Dreeeamy.jpg'
    ];

    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: true,
      load: 2,
      loop: true,
      custom: 'banner',
      touch: true,
      dynamicLength:false
    }


    /* ***** Birthdays ***** */
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: true,
      load: 2,
      touch: true,
      easing: 'ease',
      dynamicLength:false
      
    }

  }

  public carouselBannerLoad(evt: any) {

    /*const len = this.carouselBannerItems.length
    if (len <= 10) {
      for (let i = len; i < len + 10; i++) {
        this.carouselBannerItems.push(i);
      }
    }*/

  }


}
