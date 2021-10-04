import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { customer } from './user-dashboard/customer';
import { installment } from './user-dashboard/installment';
import { containercl } from './user-dashboard/containercl';

@Injectable({
  providedIn: 'root'
})
export class UserDashService {

  baseUrl: string = "http://localhost:8085/";

  constructor(private myHttp: HttpClient) { }

  loadSingleCustomerService(custno: number) {
    console.log('loading single department from spring');
    return this.myHttp.get<containercl>(this.baseUrl+"getCustomer/"+custno);
}

  updatePaymentService(inst: installment){
    console.log('updating payment');
    return this.myHttp.post(this.baseUrl+"updatePayment",inst);
  }

  updateCustomerService(updtCust:containercl){
    console.log('updating Customer from spring');
    return this.myHttp.post(this.baseUrl+"updateCustomer",updtCust);
  }
}
