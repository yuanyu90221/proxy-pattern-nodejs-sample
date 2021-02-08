"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankService = /** @class */ (function () {
    function BankService() {
        this.cash = 0;
    }
    BankService.prototype.deposit = function (amount) {
        this.cash += amount;
        return this.cash;
    };
    BankService.prototype.withdraw = function (amount) {
        var isValid = amount <= this.cash;
        if (isValid) {
            this.cash -= amount;
        }
        return isValid;
    };
    BankService.prototype.total = function () {
        return this.cash;
    };
    return BankService;
}());
exports.default = BankService;
