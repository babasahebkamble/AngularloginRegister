import { Component ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import{Shipper} from '../../../../models/shipper';
import {ShipperService} from '../../../../dataService/shipper/shipper.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-list-shipper',
  templateUrl: './list-shipper.component.html',
  styleUrls: ['./list-shipper.component.css']
})
export class ListShipperComponent {
  dataSource!: MatTableDataSource<any>;
  constructor(
    private _dialog: MatDialog,
    private shipperservice: ShipperService,
    //private _coreService: CoreService
  ) {}
  
  displayedColumns: string[] = ['id', 'Name', 'Contact','GST' ,'actions'];
  //dataSource = new MatTableDataSource(this.items);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    // You can fetch data from an API here and update the dataSource
    this.loadShipperList();
    //this.dataSource.sort = this.sort;

  }
  loadShipperList( )
{
  console.log(" in getlocation function")
     this.shipperservice.getShipperList().subscribe({
     next: (res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
     console.log(res);
     },
   error: console.log,
    });

}

 //filterrecord
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
