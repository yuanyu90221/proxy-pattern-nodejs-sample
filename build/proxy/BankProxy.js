"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BankService_1 = __importDefault(require("../bank/BankService"));
var BankProxy = /** @class */ (function () {
    function BankProxy() {
        this.bank = new BankService_1.default();
    }
    BankProxy.prototype.deposit = function (amount) {
        var result = this.bank.deposit(amount);
        console.log("deposit " + amount + " ... total: " + this.bank.total());
        return result;
    };
    BankProxy.prototype.withdraw = function (amount) {
        var isValid = this.bank.withdraw(amount);
        if (isValid) {
            console.log("withdraw " + amount + " ... total: " + this.bank.total());
        }
        else {
            console.log("failed to withdraw");
        }
        return isValid;
    };
    BankProxy.prototype.total = function () {
        var totalCash = this.bank.total();
        console.log("total cash: " + totalCash);
        return totalCash;
    };
    return BankProxy;
}());
exports.default = BankProxy;
