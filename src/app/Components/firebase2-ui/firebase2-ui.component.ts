import { Component, OnInit, Input, Inject } from '@angular/core';

import { Firebase2Service } from '../../Services/firebase2.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FireBaseUIMessageDialog } from './dialogs/message/message.component';

/*
I've made both dialog component as an individual comp. and both as a part of this .ts, just to practice both ways
*/

@Component({
  selector: 'firebase2-ui',
  templateUrl: './firebase2-ui.component.html',
  styleUrls: ['./firebase2-ui.component.css']
})
export class Firebase2UiComponent implements OnInit {
  @Input() public mode: string;

  name: string;
  
  constructor(public fb2s:Firebase2Service, public dialog: MatDialog) {}
  
  ngOnInit() { 
    console.log('fb2 mode: ' + this.mode);
    if (!this.name){
      this.fb2s.logout();
    }
  }
  
  login(): void {
    let dialogRef = this.dialog.open(FireBaseUILoginDialog, {
      width: '250px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'No') {
        console.log('The dialog was canceled');
        return;
      }
      this.name = result;
      console.log('The dialog was closed, login, name: ' + this.name);
      this.fb2s.login();
    });
  }

  message(): void {
    let dialogRef = this.dialog.open(FireBaseUIMessageDialog, {
      width: '250px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'No') {
        console.log('The dialog was canceled');
        return;
      }
      console.log('The dialog was closed, message (' + result + ')');
      this.fb2s.SendHelpRequest(this.name, result);
      console.log('message was sent');
    });
  }
}


@Component({
  selector: 'firebase-ui-login',
  templateUrl: './dialogs/login/login.component.html',
  styleUrls: ['./dialogs/login/login.component.css']
})
export class FireBaseUILoginDialog  {

  constructor(
    public dialogRef: MatDialogRef<FireBaseUILoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close('No');
  }

  onEnter(name): void {
    this.dialogRef.close(name);
  }
    
}

