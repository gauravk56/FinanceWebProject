import { customer } from "./customer";
import { installment } from "./installment";
import { product } from "./product";

export class order{
    orderid: number;
    dateoforder: string;
    emischeme: number;
    installments: installment[];
    customer: customer;
    product: product;
}