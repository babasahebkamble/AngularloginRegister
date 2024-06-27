import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './addComponent/login/login.component';
import {RegisterComponent} from './addComponent/register/register.component';
import{AdminComponent} from './dashboard/admin/admin.component';
import{CreatelocationComponent} from'./master/createlocation/createlocation.component';
import{ListlocationComponent} from'./master/listlocation/listlocation.component';
import{CreatelrComponent} from './lrcomponent/createlr/createlr.component';
import{ListlrComponent} from './lrcomponent/listlr/listlr.component';
import{LrviewComponent} from './lrcomponent/lrview/lrview.component';
import{ReceiverComponent} from './master/receiver/receiver.component';
import{ListReceiverComponent} from './master/list-receiver/list-receiver.component';
import{CreateShipperComponent} from'./master/shipper/create-shipper/create-shipper.component';
import{ListShipperComponent} from'./master/shipper/list-shipper/list-shipper.component';
import {CreateBranchComponent } from './master/branch/create-branch/create-branch.component';
import {ListBranchComponent } from './master/branch/list-branch/list-branch.component';
import{EditLrComponent} from './lrcomponent/edit-lr/edit-lr.component';
import {InvoiceComponent}from './lrcomponent/invoice/invoice.component';
import {ChratComponent}from './master/chrat/chrat.component';
import { HomeComponent } from './commonActivity/home/home.component';

const routes: Routes = 
[
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"chart",component:ChratComponent},
  {path:"admin",component:AdminComponent},
  {path:"home",component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }, // Wildcard route for a 404 page or default redirect

  {
    path:'location',
    children:[
      { path:"createlocation", component:CreatelocationComponent },
      { path:"listlocation", component:ListlocationComponent },
      //receiver
           
    
    ],
  
  },
    {path:'Reciver',
     children:[
    { path:"createreceiver", component:ReceiverComponent },
    {path:"listReciver",component:ListReceiverComponent}
    
  
  ],},
  {path:'shipper',
     children:[
    { path:"createshiper", component:CreateShipperComponent },
    {path:"listshiper",component:ListShipperComponent}
    
  
  ],},

    {
      path:'lr',
      children:[
        { path:"createlr", component:CreatelrComponent },
        { path:"listlr", component:ListlrComponent },
        { path:"editlr", component:EditLrComponent },        
        { path:"viewlr", component: LrviewComponent},
        { path:"invoicelr", component:InvoiceComponent }, 
        {path:"chart",component:ChratComponent}
         

      
      ],},
      {
        path:'branch',
        children:[
          { path:"createbranch", component:CreateBranchComponent},
          { path:"listbranch", component:ListBranchComponent },
        
  
        
        ],}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
