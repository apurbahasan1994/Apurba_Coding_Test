import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldModalComponent } from './hello-world-modal/hello-world-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    HelloWorldModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  entryComponents:[HelloWorldModalComponent],
  exports:[HelloWorldModalComponent,MatTableModule],

})
export class SharedModule { }
