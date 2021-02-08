import { Bank } from "../interfaces/bank.interface";
export default class BankProxy implements Bank {
    private bank;
    constructor();
    deposit(amount: number): number;
    withdraw(amount: number): boolean;
    total(): number;
}
