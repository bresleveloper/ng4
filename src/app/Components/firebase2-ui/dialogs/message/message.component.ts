import { Component, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'firebase-ui-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class FireBaseUIMessageDialog  {

  constructor(
    public dialogRef: MatDialogRef<FireBaseUIMessageDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEnter(msg): void {
    this.dialogRef.close(msg);
  }
    
}
