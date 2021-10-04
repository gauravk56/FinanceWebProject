import { customer } from "./customer";
import { emicardtype } from "./EMICardType";
import { installment } from "./installment";

export class emiTable{
    emicardno: number;
    cardStatus: string;
    remainingBalance: number;
    validTill: string;
    emicardtype: emicardtype;
    installments: installment[];
    customer: customer;
}