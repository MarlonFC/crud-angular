import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadModelSchematicsDataSource, ProductReadModelSchematicsItem } from './product-read-model-schematics-datasource';

@Component({
  selector: 'app-product-read-model-schematics',
  templateUrl: './product-read-model-schematics.component.html',
  styleUrls: ['./product-read-model-schematics.component.css']
})
export class ProductReadModelSchematicsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProductReadModelSchematicsItem>;
  dataSource: ProductReadModelSchematicsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ProductReadModelSchematicsDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
