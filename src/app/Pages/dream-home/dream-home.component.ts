import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';

import { ICarouselConfig, AnimationConfig, CarouselService  } from 'angular4-carousel';

@Component({
  selector: 'dream-home',
  templateUrl: './dream-home.component.html',
  styleUrls: ['./dream-home.component.css']
})
export class DreamHomeComponent implements OnInit, AfterViewInit {

  public imageSources: string[] = [
    'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAx6AAAAJGRmZDRjNzMyLThmODQtNDljZi1iMWU2LWVmYTFjZWZhYjZjMg.jpg',
    'https://cdn.tinybuddha.com/wp-content/uploads/2015/06/Boy-Reaching-for-Stars.png',
    'https://az616578.vo.msecnd.net/files/2016/07/01/636029949024208563265850935_Dreeeamy.jpg'
  ];
  
  public imageWithHtmlSources = [
    { 
      src : 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAx6AAAAJGRmZDRjNzMyLThmODQtNDljZi1iMWU2LWVmYTFjZWZhYjZjMg.jpg',
      html: '<h3>Go Find God</h3><p>yes you should do that it will make you happy believe me i love you<br><br><a href="#">read more...</a></p>'
    },
    { 
      src : 'https://cdn.tinybuddha.com/wp-content/uploads/2015/06/Boy-Reaching-for-Stars.png',
      html:''
    },
    { 
      src : 'https://az616578.vo.msecnd.net/files/2016/07/01/636029949024208563265850935_Dreeeamy.jpg',
      html: '<h3>Trees</h3><p>r pretty :)</p>'
    },
    { 
      src : 'https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAx6AAAAJGRmZDRjNzMyLThmODQtNDljZi1iMWU2LWVmYTFjZWZhYjZjMg.jpg',
      html: '<h3>Carousel Upgrade</h3><p>I made some fixes, can be seen in <a target="_blank" href="https://github.com/bonjurmrfirst/angular4-carousel/issues/23">this issue request</a></p>'
    },
  ];
  
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.APPEAR,
    autoplay: true,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };
  

  constructor(private carouselSvc: CarouselService) {}

  @ViewChild('carousel', {read: ViewContainerRef}) carousel;
  
  ngOnInit() {}
  
  ngAfterViewInit() {
    this.carouselSvc.onImageLoad().subscribe(
      (src) => console.log(src + ' - loaded'),
      (src) => console.log(src + ' - error'),
      () => {
        console.log('all imgs loaded');
        let arrows = this.carousel.element.nativeElement.querySelectorAll('carousel-arrows i');
        arrows[0].innerHTML = '<i class="material-icons">keyboard_arrow_left</i>';
        arrows[1].innerHTML = '<i class="material-icons">keyboard_arrow_right</i>';

      }
    );//end onImageLoad
  }

}
