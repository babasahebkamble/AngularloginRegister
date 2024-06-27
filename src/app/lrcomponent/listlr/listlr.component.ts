import { Component ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import{Lorryreceipt} from '../../../models/lorryreceipt';
import {LrService} from '../../../dataService/Lorryreceipt/lr.service';
import {CommanService} from '../../../dataService/CommonService/comman.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import{EditLocationComponent} from'../../master/edit-location/edit-location.component';
import{SuccessDialogComponent} from'../../dialog/success-dialog/success-dialog.component';
import { timeInterval } from 'rxjs';



@Component({
  selector: 'app-listlr',
  templateUrl: './listlr.component.html',
  styleUrls: ['./listlr.component.css']
})
export class ListlrComponent {
  displayedColumns: string[] = [
    'lr_number',
    'branchName',
    'fromLocation',
    'toLocation',
    'shipperName',
    'receiverName',
    'lrStatus',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    private _dialog: MatDialog,
    private lService: LrService,
    private commanservice: CommanService,
    private dialog: MatDialog
    
    //private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    
    this.getLrList();
  }
  //getrecord
  getLrList()
  {
    console.log(" in getLr function")
     this.lService.getLorryReceipt().subscribe({
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
  lrid:number=0;
  deletelorry(id: number)
  {
    this.lrid=id;
console.log(" lrid ====>"+this.lrid);
this.lService.deleteLr(id).subscribe({
  next: (res) => {   
   
   console.log(" record is  deleted");
   location.reload();   
  },
  error: console.log,
});
console.log(" record is  deleted=====>"+ this.lrid);
this.openSuccessDialog();//cal to pop
this.redirectToLRList();
location.reload();
  }
      
//editrecord
id1:number=0;
Editlorry(id:number)
{
this.id1=id;
console.log(" Edit function"+this.id1)
this.router.navigate(['lr/editlr',id]);
}
id2:number=0;
invoicelorry(id:number)
{
this.id2=id;
console.log(" invoice function"+this.id2);
this.router.navigate(['lr/invoicelr',id]);
}
//filterrecord
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
 //for redirect the page

 redirectToLRList(){
  //this.router.navigate(['admin']);
  this.router.navigate(['/lr/listlr']); 
  this.commanservice.refreshpage();}

// for dialog
openSuccessDialog() {
  //console.log("pop");
  const dialogRef = this.dialog.open(SuccessDialogComponent, {
    data: { message: 'Record   Deleted successfully' },
  });


}
}