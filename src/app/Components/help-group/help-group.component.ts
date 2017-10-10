import { Component, OnInit } from '@angular/core';

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { FirebaseListObservable } from 'angularfire2/database'
import { Firebase2Service } from '../../Services/firebase2.service';

@Component({
  selector: 'help-group',
  templateUrl: './help-group.component.html',
  styleUrls: ['./help-group.component.css']
})
export class HelpGroupComponent {
  displayedColumns = ['date', 'name', 'message'];
  dataSource = new fb2DataSource(this.fb2s);

  constructor(public fb2s:Firebase2Service) {}

  formatDate(d){
    return new Date(d).toLocaleString();
  }
}

export class fb2DataSource extends DataSource<any> {
  constructor(public fb2s:Firebase2Service) { super() }
  connect(): FirebaseListObservable<any[]> {
    return this.fb2s.itemsHelpRequests.map( items => items.sort((a, b) => b.date - a.date) ) as FirebaseListObservable<any[]>;
  }
  disconnect() {}
}
