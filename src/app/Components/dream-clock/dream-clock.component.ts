import { Component } from '@angular/core';

@Component({
  selector: 'dream-clock',
  templateUrl: './dream-clock.component.html',
  styleUrls: ['./dream-clock.component.css']
})
export class DreamClockComponent  {
  Hrs;
  Mins;
  Secs;

  constructor() {
    var d = new Date();
    this.Hrs = d.getHours();
    this.Mins = d.getMinutes();
    this.Secs = d.getSeconds();

    setInterval(() => {         //replaced function() by ()=>
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
