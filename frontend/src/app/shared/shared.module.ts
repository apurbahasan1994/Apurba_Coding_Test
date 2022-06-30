import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldModalComponent } from './hello-world-modal/hello-world-modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    HelloWorldModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
