import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import{Shipper}from'../../../../models/shipper';
import{ShipperService}from '../../../../dataService/shipper/shipper.service';
import{SuccessDialogComponent} from'../../../dialog/success-dialog/success-dialog.component';
import{NgForm} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-create-shipper',
  templateUrl: './create-shipper.component.html',
  styleUrls: ['./create-shipper.component.css']
})
export class CreateShipperComponent {
  lrshipper: FormGroup;


  constructor(private _fb: FormBuilder,private router: Router,private shiperservice:ShipperService,private dialog: MatDialog) {

    this.lrshipper = this._fb.group({
      id: '', 
      shippername :'',    
      saddress:'',
      spin: '',
      stelno: '',
      sgstno:'',
      sstate:'',
      scity:'',
      sconuntry:'',
         
    });
  } 
  
  receiverModel:Shipper = new Shipper();
  msg:any = "";
  formData:any;
  state: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal ', 
  ];

  onSubmit(data:any) {    
  this.formData=data;
  this.shiperservice.createshiper(this.formData).subscribe(
    data=>{
      console.log("SUCCESSFULL........");
      console.log(data);
      this.openSuccessDialog();//cal to pop
      this.redirectToReceiverList();
    },
    error=>{
      console.log("FAILED........");
      console.log(error);
    
    }
  );
  
  //console.log(data);
  //alert(this.formData);
   
   }
   //for redirect the page

   redirectToReceiverList(){
    //this.router.navigate(['admin']);
    this.router.navigate(['/shipper/listshiper']); 

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
