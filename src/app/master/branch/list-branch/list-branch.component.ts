import { Component ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import{Location} from '../../../../models/location';
import {BranchService} from '../../../../dataService/Branch/branch.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import{EditLocationComponent} from'../../../master/edit-location/edit-location.component';

@Component({
  selector: 'app-list-branch',
  templateUrl: './list-branch.component.html',
  styleUrls: ['./list-branch.component.css']
})
export class ListBranchComponent {
  dataSource!: MatTableDataSource<any>;
  constructor(
    private _dialog: MatDialog,
    private BranchService: BranchService,
    //private _coreService: CoreService
  ) {}
  
  displayedColumns: string[] = ['id', 'Name', 'Contact' ,'actions'];
  //dataSource = new MatTableDataSource(this.items);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    // You can fetch data from an API here and update the dataSource
    this.loadBranchList();
    //this.dataSource.sort = this.sort;

  }
  loadBranchList( )
{
  console.log(" load branch data")
     this.BranchService.getBranchList().subscribe({
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
