import { Component, input, OnInit } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatPaginator, MatTableModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent<T> implements OnInit { // <T>: It is a generic that allows GridComponent to work with any type of data, which makes it reusable.
                                                  // the class implements the OnInit interface, which makes it necessary to define the ngOnInit method.
  displayedColumns = input.required<string[]>();
  data = input.required<T[]>();

  dataSource = new MatTableDataSource<T>();

  ngOnInit(): void {
    this.dataSource.data = this.data();
  }

}
