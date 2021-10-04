import { emiTable } from "./emiTable";
import { order } from "./order";

export class installment{
    emiId: number;
    amountPaid: number;
    installmentCount: number;
    paymentDate: string;
    paymentStatus: string;
    emiTable: emiTable;
    order: order;
}