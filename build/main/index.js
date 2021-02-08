"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var receiver_1 = __importDefault(require("../persons/receiver"));
var sender_1 = __importDefault(require("../persons/sender"));
var receiver_proxy_1 = __importDefault(require("../persons/receiver.proxy"));
var BankProxy_1 = __importDefault(require("../proxy/BankProxy"));
var Xiaoming = new sender_1.default();
var A = new receiver_1.default();
var B = new receiver_proxy_1.default(A);
Xiaoming.sendFlower(B);
console.log('BankProxy examples:');
var bankProxy = new BankProxy_1.default();
bankProxy.deposit(4000);
bankProxy.withdraw(500);
bankProxy.deposit(300);
bankProxy.total();
