import { Bank } from "../interfaces/bank.interface";

export default class BankService implements Bank{
    private cash: number = 0;
    deposit(amount: number) {
      this.cash += amount;
      return this.cash;
  }

    withdraw(amount: number) {
      const isValid = amount <= this.cash;
      if (isValid) {
          this.cash -= amount;
      }
      return isValid;
    }

    total() {
      return this.cash;
    }
}