import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Note } from '../../models/note';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() notes:Note[];

  displayedColumns: string[] = ['id', 'title', 'date'];
  dataSource:MatTableDataSource<Note>;

  constructor() { }

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue=filterValue.toLowerCase();
    this.dataSource.filter=filterValue;
  }
  ngOnInit() {
    this.dataSource=new  MatTableDataSource<Note>(this.notes);
  }

}
