import { Component } from '@angular/core';

import { Validators, FormControl } from '@angular/forms';
import{Receiver}from'../../../models/receiver';
import{ReceiverService}from '../../../dataService/receiver/receiver.service'
import{SuccessDialogComponent} from'../../dialog/success-dialog/success-dialog.component';
import{NgForm} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';



@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent {
  lrreceiver: FormGroup;


  constructor(private _fb: FormBuilder,private router: Router,private receiverservice:ReceiverService,private dialog: MatDialog) {

    this.lrreceiver = this._fb.group({
      id: '', 
      receivername :'',    
      raddress:'',
      rpin: '',
      rtelno: '',
      rgstno:'',
      rstate:'',
      rcity:'',
      rconuntry:'',
         
    });
  } 
  
  receiverModel:Receiver = new Receiver();
  msg:any = "";
  formData:any;
     
  onSubmit(data:any) {    
  this.formData=data;
  this.receiverservice.createReceiver(this.formData).subscribe(
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
  
  console.log(data);
  //alert(this.formData);
   
   }
   //for redirect the page

   redirectToReceiverList(){
    //this.router.navigate(['admin']);
    this.router.navigate(['/Reciver/listReciver']); 

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
