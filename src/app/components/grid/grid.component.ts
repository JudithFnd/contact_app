import { Component, effect, input, OnInit, signal, viewChild } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInput} from '@angular/material/input';
import { FilterComponent } from './filter/filter.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatPaginator, MatTableModule, MatSortModule, FilterComponent, MatButtonModule, MatIconModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})

export class GridComponent<T> implements OnInit { // <T>: It is a generic that allows GridComponent to work with any type of data, which makes it reusable.
                                                  // Implements OnInit to perform initialization logic when the component loads.

  displayedColumns = input.required<string[]>(); // Specifies which columns will be displayed in the table.
  data = input.required<T[]>(); // Holds the table data.
  sortableColumns = input<string[]>([]);

  dataSource = new MatTableDataSource<T>();
  valueToFilter = signal(''); // Stores the current filter value.
  private readonly _sort = viewChild.required<MatSort>(MatSort); // Reference to table sorting.
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator); // Reference to table pagination.


  constructor() {
    effect(()=> {
      if(this.valueToFilter()) {
        this.dataSource.filter = this.valueToFilter(); // Applies the filter whenever the value changes
      } else {
        this.dataSource.filter = "";
      }
    }, {allowSignalWrites: true} ) // Allows updating signal values within the effect.
  }

  ngOnInit(): void {
    this.dataSource.data = this.data(); // Sets the table's data source with the provided data.
    this.dataSource.sort = this._sort(); // Sets up sorting for the data source.
    this.dataSource.paginator = this._paginator(); // Sets up pagination for the data source.

  }

  applyFilter(event:Event): void {
    const filterValue = (event.target as HTMLInputElement).value; // Retrieves the input value from the event.
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase(); // Applies the filter after trimming and converting to lowercase.
  }

}
