import { order } from "./order";

export class product{
    productid: string;
    productcost: number;
    productdetails: string;
    productname: string;
    orders: order[];
}