import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import{Location}from'../../../models/location';
import{ServicelocationService}from '../../../dataService/location/servicelocation.service';
import{SuccessDialogComponent} from'../../dialog/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrls: ['./createlocation.component.css']
})
export class CreatelocationComponent {
  //location: FormGroup;
  //Location: any[] = [];

  //locationName:string=""

  constructor(private router: Router,private lservice:ServicelocationService,private dialog: MatDialog) { }
  location:Location = new Location();
  msg:any = "";

  onSubmit() {    
 this.savelocation();

}
savelocation()
{
this.lservice.createLocation(this.location).subscribe(
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
        this.router.navigate(['/location/listlocation']); 

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