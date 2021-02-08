import { Bank } from "../interfaces/bank.interface";
export default class BankService implements Bank {
    private cash;
    deposit(amount: number): number;
    withdraw(amount: number): boolean;
    total(): number;
}
