import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'dream-clock',
  templateUrl: './dream-clock.component.html',
  styleUrls: ['./dream-clock.component.css']
})
export class DreamClockComponent implements OnDestroy {
  Hrs;
  Mins;
  Secs;
  interval;

  ngOnDestroy() {
    //console.log('DreamClockComponent destroy');
    clearInterval(this.interval);
  }

  constructor() {
    var d = new Date();
    this.Hrs = d.getHours();
    this.Mins = d.getMinutes();
    this.Secs = d.getSeconds();

    this.interval = setInterval(() => {  
      console.log('tick'); // just testing if it is working

      if ( ++this.Secs > 59){
        this.Secs = 0;
        if ( ++this.Mins > 59){
          this.Mins = 0;
          if ( ++this.Hrs >23){
            this.Hrs = 0;
          }//end if hrs
        }//end if mins          
      }//end if secs
    }, 1000);//end set intervals
  }//end ctor
}//end class

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'zero'})
export class ZeroPipe implements PipeTransform {
  transform(value: any): any {
    let intVal = parseInt(value, 10);
    return intVal < 10 ? '0' + value : value;
  }
}