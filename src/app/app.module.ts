import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './addComponent/login/login.component';
import { RegisterComponent } from './addComponent/register/register.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { ListlocationComponent } from './master/listlocation/listlocation.component';
import { CreatelocationComponent } from './master/createlocation/createlocation.component';
import { CreatelrComponent } from './lrcomponent/createlr/createlr.component';
import { ListlrComponent } from './lrcomponent/listlr/listlr.component';
import { LrviewComponent } from './lrcomponent/lrview/lrview.component';
import { SuccessDialogComponent } from './dialog/success-dialog/success-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { EditLocationComponent } from './master/edit-location/edit-location.component';

//lib
import {MatSelectModule} from '@angular/material/select';

// import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReceiverComponent } from './master/receiver/receiver.component';
import { ListReceiverComponent } from './master/list-receiver/list-receiver.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CreateShipperComponent } from './master/shipper/create-shipper/create-shipper.component';
import { ListShipperComponent } from './master/shipper/list-shipper/list-shipper.component';
import { CreateBranchComponent } from './master/branch/create-branch/create-branch.component';
import { ListBranchComponent } from './master/branch/list-branch/list-branch.component';
import { EditLrComponent } from './lrcomponent/edit-lr/edit-lr.component';
import { CreatestatusComponent } from './master/lrstatus/createstatus/createstatus.component';
import { ListlrstatusComponent } from './master/lrstatus/listlrstatus/listlrstatus.component';
import { InvoiceComponent } from './lrcomponent/invoice/invoice.component';
import { ChratComponent } from './master/chrat/chrat.component';
import { HeaderComponent } from './commonActivity/header/header.component';
import { FooterComponent } from './commonActivity/footer/footer.component';
import { HomeComponent } from './commonActivity/home/home.component';

















@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
   
    ListlocationComponent,
        CreatelocationComponent,
        CreatelrComponent,
        ListlrComponent,
        LrviewComponent,
        SuccessDialogComponent,
        EditLocationComponent,      
        ReceiverComponent,
        ListReceiverComponent,
        CreateShipperComponent,
        ListShipperComponent,
        CreateBranchComponent,
        ListBranchComponent,
        EditLrComponent,
        CreatestatusComponent,
        ListlrstatusComponent,
        InvoiceComponent,
        ChratComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
      
        
        
        
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
MatDatepickerModule,




   
  

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
