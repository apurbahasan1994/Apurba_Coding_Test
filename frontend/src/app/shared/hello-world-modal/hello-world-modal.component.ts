import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-hello-world-modal',
  templateUrl: './hello-world-modal.component.html',
  styleUrls: ['./hello-world-modal.component.scss']
})
export class HelloWorldModalComponent implements OnInit {
  displayedColumns: string[] = ['Search Type', 'Keyword', 'Date',];
  dataSource = new MatTableDataSource(ELEMENT_DATA) ;
  length = 100;
  pageSize = 10;
  pageLength=100;
  currentPage=1;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  @ViewChild(MatSort) sort: MatSort;

  constructor( public dialogRef: MatDialogRef<HelloWorldModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
  pageChangeEvent(event:any) {}

}

export interface DialogData {
  message:string
}

export interface PeriodicElement {
  searchType: string;
  keyword: string;
  date: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {searchType: "Exact", keyword: 'garlic press, garlic mincer, garlic press stainless steel, stainless steel garlic presser, garlic crushe, garlic presser, oxo garlic press, garlic press rocker, stainless steel garlic press, zyliss garlic press, triturador de ajo garlic smasher garlic presser stainless steel', date:'Apr 22, 2022 11:45am'},
  {searchType: "Exact", keyword: 'garlic press,', date:'Apr 22, 2022 11:45am'},
  {searchType: "Exact", keyword: 'garlic press, garlic mincer, ', date:'Apr 22, 2022 11:45am'},
  {searchType: "Exact", keyword: 'garlic press, garlic mincer, ', date:'Apr 22, 2022 11:45am'},
  {searchType: "Exact", keyword: 'garlic press,', date:'Apr 22, 2022 11:45am'},
  {searchType: "Exact", keyword: 'garlic ', date:'Apr 22, 2022 11:45am'},

];
