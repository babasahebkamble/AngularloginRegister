import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{SuccessDialogComponent} from'../../dialog/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup,FormArray } from '@angular/forms';
import{LrService}from '../../../dataService/Lorryreceipt/lr.service';
import{Lorryreceipt} from '../../../models/lorryreceipt';
import{ServicelocationService}from '../../../dataService/location/servicelocation.service';
import { MatTableDataSource } from '@angular/material/table';


export interface RowData {
  name:string;
 // age: string;
}


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  id:number=0;
  lrno:number=0;
  
  lorryreceipt:Lorryreceipt=new Lorryreceipt();
  ngOnInit(): void {
    this.lrget();
  }
  constructor(
    private router:Router,
    private activeRouter:ActivatedRoute,
    private _fb: FormBuilder,
  private lservice:LrService,
  private fb: FormBuilder,
    //private ShipperService:ShipperService,
    //private receiverservice:ReceiverService,
    //private banchservice:BranchService,
   private locationservice:ServicelocationService,
    //private dialog: MatDialog
){
  this.myForm = this._fb.group({ 
    id:'',        
   // branchName:'',
    fromLocation:'',
    toLocation:'',
    //grossweight:'',
    //remark:'',
    //particular:'',
    //noofpackage:'',
    //gstpayableby:'',
    //nfreight:'',
    //shipmentMode:'',
    //shipperName:'',
    //servicetype:'',
    //receiverName:'', 
    lrno:'',    
    //lrdate:'', 
    //ewaybillno:'', 
   // transitdays:'', 
    //lrStatus:'',
  });
  // multile row
  this.myForm = this.fb.group({
    dynamicRows: this.fb.array([]) // Create an empty FormArray
  });
}
  lrget()
  {
    this.id=this.activeRouter.snapshot.params['id'];
    console.log("UPDATED ID ::"+this.id);
    this.lservice.findlr(this.id).subscribe(
      data=>{
        console.log("GETTING  A Record..");
        
        //alert(JSON.stringify(data));
        console.log(data.lrno)
///data.lrno.patchValue
        
        this.myForm.patchValue({
          lrno: data.lrno,
          id: data.id,
          email: data.email
        });
        
        
      },
      error=>{
        console.log("SOMETHING WENT WRONG DURING GETTING A CONTACT..");
        console.log(error);  
      }
    );  
  }
  myForm: FormGroup;
  
  
    // Add a new row to the FormArray
    addRow() {
      const newRow = this.fb.group({
        // Define form controls for each field in the row
        invoiceno: '',
        declairedval: 0,
        invoicedate:''
      });
      this.dynamicRows.push(newRow);
    }
  
    // Get a reference to the dynamicRows FormArray
    get dynamicRows() {
      return this.myForm.get('dynamicRows') as FormArray;
    }
  
    // Submit the form and send data to the API
    onSubmit() {
      const formData = this.myForm.value;
      // Send formData to your API
      console.log(formData);
      alert(JSON.stringify(formData));
    }
    removeRow()
    {}
}
