import BankService from "../bank/BankService";
import { Bank } from "../interfaces/bank.interface";

export default class BankProxy implements Bank {
  private bank: Bank;
  constructor() {
    this.bank = new BankService();
  }

  deposit(amount: number) {
    const result = this.bank.deposit(amount);
    console.log(`deposit ${amount} ... total: ${this.bank.total()}`);
    return result;
  }

  withdraw(amount: number) {
    const isValid = this.bank.withdraw(amount);
    if (isValid) {
      console.log(`withdraw ${amount} ... total: ${this.bank.total()}`);
    } else {
      console.log(`failed to withdraw`);
    }
    return isValid;
  }

  total() {
    const totalCash = this.bank.total();
    console.log(`total cash: ${totalCash}`);
    return totalCash;
  }
}