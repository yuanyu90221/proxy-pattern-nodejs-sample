"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var flower_1 = __importDefault(require("../proxyee/flower"));
var Sender = /** @class */ (function () {
    function Sender() {
    }
    Sender.prototype.sendFlower = function (target) {
        var flower = new flower_1.default('康乃馨');
        target.receiveFlower(flower);
    };
    return Sender;
}());
exports.default = Sender;
