import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserDashService } from '../user-dash.service';
import { containercl } from './containercl';
import { customer } from './customer';
import { installment } from './installment';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private userDashService: UserDashService) { }

  ngOnInit(): void {
    this.loadCustomerById();

    sessionStorage.setItem("customerData",JSON.stringify(this.singleCust.cust));

  }

  x: number = 102;  
  singleCust: containercl;
  editMode: boolean = false; 
  updatedCust: containercl;
  payment: installment = new installment();

  editUser(){
    if(this.editMode==false)
      {this.editMode=true;}
    else
      {this.editMode=false;}
  }
  
  loadCustomerById() {
    console.log('loadCustomerById() invoking loadSingleCustomerService()');
    this.userDashService.loadSingleCustomerService(this.x).subscribe(
      (data: containercl)=> {  this.singleCust = data; 
        console.log(this.singleCust);
        this.updatedCust=data;
      }, 
      (err) => { console.log(err);}
    ); //end of subscribe 
  }

  updatePayment(payment: installment){
    console.log('updating Payment');
    this.userDashService.updatePaymentService(payment).subscribe(
      (data: installment)=>{
        this.payment=data;
        console.log(this.payment);
      },(err)=>{
        console.log(err);
      }
    );
  }

  updateCustomer(){
    console.log('updating Customer');
    this.userDashService.updateCustomerService(this.updatedCust).subscribe(
      (data: containercl)=>{
        this.updatedCust=data;
        console.log(this.updatedCust);
      },(err)=>{
        console.log(err);
      }
    );
  }

}
