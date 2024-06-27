import { Component,OnInit } from '@angular/core';
import{Lorryreceipt} from'../../../models/lorryreceipt'

//common service
import{LrService}from '../../../dataService/Lorryreceipt/lr.service';
import{ServicelocationService}from '../../../dataService/location/servicelocation.service';
import{ReceiverService}from '../../../dataService/receiver/receiver.service';
import {ShipperService} from '../../../dataService/shipper/shipper.service';
import {BranchService} from '../../../dataService/Branch/branch.service';

import{SuccessDialogComponent} from'../../dialog/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';






@Component({
  selector: 'app-createlr',
  templateUrl: './createlr.component.html',
  styleUrls: ['./createlr.component.css']
})
export class CreatelrComponent implements OnInit{
 // drop down
 lrForm: FormGroup;
 apiData:any;
 apiDataReceiver:any;
 apiDataShipper:any;
 apiDataBranch:any;

  lrstatus: string[] = [
    'INTRANSIT',
    'DELIVERED',
    'HOLD',
    'DELAYED',
    'OUT FOR DELIVERY',
    'CANCLED'
  ];
  
  ShipmentMode: string[] = [
    'SURFACE',
    'RAIL',
    'AIR',
    'SEA',
  ];
  gstpayableby: string[] = [
    'CONSIGNEE',
    'CONSIGNOR',
    'TRANSPORTER',    
  ];
  nfreight: string[] = [
    'TO BE BILLED',
    'TO PAY',
    'PAID',
    
  ];
  servicetype:string[]=[
    'LCL EXPRESS PLUS',
    'LCL EXPRESS',
    'LCL ECONOMY',
    'FTL/ODC/OTHER'
  ];
  company:string[]=[
    'HEf',
    'kargokart',
    'A',
    'B'
  ];
  lrmodel:Lorryreceipt = new Lorryreceipt();
  msg:any = "";

  constructor(private router: Router,
    private lservice:LrService,
    private _fb: FormBuilder,
    private locationservice:ServicelocationService,
    private ShipperService:ShipperService,
    private receiverservice:ReceiverService,
    private banchservice:BranchService,
      private dialog: MatDialog)
     { 
    this.lrForm = this._fb.group({         
      branchName:'',
      fromLocation:'',
      toLocation:'',
      grossweight:'',
      remark:'',
      particular:'',
      noofpackage:'',
      gstpayableby:'',
      nfreight:'',
      shipmentMode:'',
      shipperName:'',
      servicetype:'',
      receiverName:'', 
      lrno:'',    
      lrdate:'', 
      ewaybillno:'', 
      transitdays:'',
      lrStatus:'', 
    });
  }
  //dropdownDataloction=Location:new Location();
  
 // for intialize

 
  ngOnInit() {
 this.locationNamelist();
 this.receiverNamelist();
 this.shipperNamelist();
 this.branchNamelist();
 
  }
  dropdownData:any;
  // load receiver data
  shipperNamelist()
 {
  console.log(" =========================get shiperName  from Api==========================");
  this.ShipperService.getShipperList().subscribe({
    next: (res) => {
      this.apiDataShipper = res;
    
     //this.dataSource = res;
     //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    console.log("shipper data====>"+res);
    },
  error: console.log,
   });

 }
 
 // load receiver data
 receiverNamelist()
 {
  console.log(" =========================get ReceiverName  from Api==========================");
  this.receiverservice.getReceiverList().subscribe({
    next: (res) => {
      this.apiDataReceiver = res;
    
     //this.dataSource = res;
     //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    console.log("Receiver data====>"+res);
    },
  error: console.log,
   });

 }
   //load location name
  locationNamelist()
  {
    console.log("=========================get location  from Api==========================");    
    this.locationservice.getlocationList().subscribe({
    next: (res) => {
      this.apiData = res;

     //this.dataSource = res;
     //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    console.log("Location data=======>"+res);
    },
  error: console.log,
   });
 // form handeling
 
 }   
 //load location name
 branchNamelist()
 {
   console.log("=========================get Branch  from Api==========================");    
   this.banchservice.getBranchList().subscribe({
   next: (res) => {
     this.apiDataBranch = res;

    console.log("Branch data=======>"+res);
   },
 error: console.log,
  });
// form handeling

} 
 
 myData:any={};
  onSubmit(data:any) {    
    //console.log(" user input.......");  
    this.myData=data;
    console.log("Entered data "+this.myData.values);
    this.lservice.newLorryReceipt(this.myData).subscribe(
      data=>{
        console.log("SUCCESSFULL........");
        console.log(data);
        this.openSuccessDialog();//cal to pop
        this.redirectToContactList();
      },
      error=>{
        console.log("FAILED........");
        console.log(error);
      
      }
    );
       
 }
   
  //for redirect the page

  redirectToContactList(){
    //this.router.navigate(['admin']);
    this.router.navigate(['/lr/listlr']); 

  }

  // for dialog
  openSuccessDialog() {
    //console.log("pop");
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      data: { message: 'Record added successfully' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog closed with result: ${result}`);
      // Add any code to execute after the dialog is closed, if needed
    });
  }
// end  dialog

}
