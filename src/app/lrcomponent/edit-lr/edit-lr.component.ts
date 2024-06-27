import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{LrService}from '../../../dataService/Lorryreceipt/lr.service';
import{Lorryreceipt} from '../../../models/lorryreceipt';
import { FormBuilder, FormGroup } from '@angular/forms';
import{ServicelocationService}from '../../../dataService/location/servicelocation.service';
import{ReceiverService}from '../../../dataService/receiver/receiver.service';
import {ShipperService} from '../../../dataService/shipper/shipper.service';
import {BranchService} from '../../../dataService/Branch/branch.service';
import{SuccessDialogComponent} from'../../dialog/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-lr',
  templateUrl: './edit-lr.component.html',
  styleUrls: ['./edit-lr.component.css']
})
export class EditLrComponent {
  lrForm:FormGroup
  id:number=0;
  myData:any={};
  apiData:any;
  apiDataReceiver:any;
 apiDataShipper:any;
 apiDataBranch:any;

  //lrForm:FormGroup;

  lorryreceipt:Lorryreceipt=new Lorryreceipt();
  // for edit
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
  // end  edit

  
  ngOnInit(): void {
this.getlr();
this.locationNamelist();
 this.receiverNamelist();
 this.shipperNamelist();
 this.branchNamelist();
 
   // this.lrForm.patchValue(this.lorryreceipt); 
  }
  constructor(
    private router:Router,private activeRouter:ActivatedRoute,
    private lservice:LrService,private _fb: FormBuilder,
    private ShipperService:ShipperService,
    private receiverservice:ReceiverService,
    private banchservice:BranchService,
    private locationservice:ServicelocationService,
    private dialog: MatDialog
    
    ) {
      this.lrForm = this._fb.group({ 
        id:'',        
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

  getlr(){
    this.id=this.activeRouter.snapshot.params['id'];
    console.log("UPDATED ID ::"+this.id);
    this.lservice.findlr(this.id).subscribe(
      data=>{
        console.log("GETTING  A Record..");
        console.log(data);
        this.lorryreceipt=data;
        console.log(this.lorryreceipt);
        this.lrForm.patchValue(this.lorryreceipt);// assign the value  to form
      },
      error=>{
        console.log("SOMETHING WENT WRONG DURING GETTING A CONTACT..");
        console.log(error);  
      }
    );
  }
//  api data
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
 // update the Records
 myData1:any={};
  onSubmit(data:any) {    
    //console.log(" user input.......");  
    this.myData1=data;
    console.log("Entered data "+this.myData1.values);
    this.lservice.updatelr(this.myData1).subscribe(
      data=>{
        console.log("SUCCESSFULLY updated........");
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
      data: { message: 'Record  updated successfully' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog closed with result: ${result}`);
      // Add any code to execute after the dialog is closed, if needed
    });
  }
// end  dialog


  }

