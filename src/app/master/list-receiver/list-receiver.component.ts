import { Component ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import{Location} from '../../../models/location';
import {ReceiverService} from '../../../dataService/receiver/receiver.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import{EditLocationComponent} from'../../master/edit-location/edit-location.component';





@Component({
  selector: 'app-list-receiver',
  templateUrl: './list-receiver.component.html',
  styleUrls: ['./list-receiver.component.css']
})
export class ListReceiverComponent {
  dataSource!: MatTableDataSource<any>;
  constructor(
    private _dialog: MatDialog,
    private receiverservice: ReceiverService,
    //private _coreService: CoreService
  ) {}
  
  displayedColumns: string[] = ['id', 'Name', 'Contact','GST' ,'actions'];
  //dataSource = new MatTableDataSource(this.items);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    // You can fetch data from an API here and update the dataSource
    this.loadReceiverList();
    //this.dataSource.sort = this.sort;

  }
  loadReceiverList( )
{
  console.log(" in getlocation function")
     this.receiverservice.getReceiverList().subscribe({
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
