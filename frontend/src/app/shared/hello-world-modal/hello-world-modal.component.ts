import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-hello-world-modal',
  templateUrl: './hello-world-modal.component.html',
  styleUrls: ['./hello-world-modal.component.scss']
})
export class HelloWorldModalComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<HelloWorldModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }

}

export interface DialogData {
  message:string
}
