import { emicardtype } from "./EMICardType";
import { emiTable } from "./emiTable";
import { order } from "./order";


export class customer{
    custid: number;
    accountNo: number;
    address: string;
    approvalStatus: string;
    bankName: string;
    birthdate: string;
    cibil: number;
    email: string;
    ifscCode: string;
    pancard: string;
    password: string;
    phoneNo: number;
    username: string;
    emicardtype: emicardtype;
    emicardno: number;
    orders: order[];
    emiTable: emiTable;
}