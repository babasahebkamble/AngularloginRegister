import { Component ,ViewChild} from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import{Location} from '../../../models/location';
import {ServicelocationService} from '../../../dataService/location/servicelocation.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import{EditLocationComponent} from'../../master/edit-location/edit-location.component';


@Component({
  selector: 'app-listlocation',
  templateUrl: './listlocation.component.html',
  styleUrls: ['./listlocation.component.css']
})
export class ListlocationComponent {
 
  displayedColumns: string[] = [
    'locatiodId',
    'locationName',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private lService: ServicelocationService,
    //private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    
    this.getlocationList();
  }
  //getrecord
  getlocationList()
  {
    console.log(" in getlocation function")
     this.lService.getlocationList().subscribe({
     next: (res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
     console.log(res);
     },
   error: console.log,
    });
  
  } 

  //deleterecord
  deletelocation(id: number)
  {

  }
//editrecord
editLocation(data: any)
{

}
//filterrecord
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
openEditForm()
{
  const dialogRef = this._dialog.open(EditLocationComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getlocationList();
        }
      },
    }); 
}

  }
