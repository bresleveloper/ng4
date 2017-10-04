import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-wrapper',
  templateUrl: './component-wrapper.component.html',
  styleUrls: ['./component-wrapper.component.css']
})
export class ComponentWrapperComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
