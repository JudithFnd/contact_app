import { Component, input, OnInit, viewChild } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatPaginator, MatTableModule, MatSortModule, MatLabel, MatFormField, MatInput],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})

export class GridComponent<T> implements OnInit { // <T>: It is a generic that allows GridComponent to work with any type of data, which makes it reusable.
                                                  // Implements OnInit to perform initialization logic when the component loads.

  displayedColumns = input.required<string[]>(); // Specifies which columns will be displayed in the table.
  data = input.required<T[]>();

  dataSource = new MatTableDataSource<T>();
  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);


  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();
  }

  applyFilter(event:Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
