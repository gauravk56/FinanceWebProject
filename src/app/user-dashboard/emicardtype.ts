import { customer } from "./customer";
import { emiTable } from "./emiTable";

export class emicardtype{
    cardtype: string;
    cardLimit: number;
    costOfCard: number;
    customers: customer[];
    emiTables: emiTable[];
}