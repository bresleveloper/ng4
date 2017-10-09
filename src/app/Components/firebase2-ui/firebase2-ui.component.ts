import { Component, OnInit, Input } from '@angular/core';

import { Firebase2Service } from '../../Services/firebase2.service';

@Component({
  selector: 'firebase2-ui',
  templateUrl: './firebase2-ui.component.html',
  styleUrls: ['./firebase2-ui.component.css']
})
export class Firebase2UiComponent implements OnInit {

  @Input() public mode: string;

  constructor(fb2s:Firebase2Service) {}

  ngOnInit() {
    console.log('fb2 mode: ' + this.mode)
  }

}
