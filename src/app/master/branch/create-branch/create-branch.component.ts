import { Component } from '@angular/core';

import { Validators, FormControl } from '@angular/forms';
import{Receiver}from'../../../../models/receiver';
import{BranchModel}from'../../../../models/branch-model';

import{BranchService}from '../../../../dataService/Branch/branch.service'
import{SuccessDialogComponent} from'../../../dialog/success-dialog/success-dialog.component';
import{NgForm} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent {

  branchModel: FormGroup;


  constructor(private _fb: FormBuilder,private router: Router,private BranchService:BranchService,private dialog: MatDialog) {

    this.branchModel = this._fb.group({
      id: '', 
      branchname :'',    
      branchcode:'',
      branchaddress:'',
      branchemployee:'',
      branchemail:'',
      branchphone:'',
             
    });
  } 
  
  branch:BranchModel = new BranchModel();
  msg:any = "";
  formData:any;
     
  onSubmit(data:any) {    
  this.formData=data
  console.log('we are in  taking data from ');
  this.BranchService.createBranch(this.formData).subscribe(
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
    this.router.navigate(['/branch/listbranch']); 

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
