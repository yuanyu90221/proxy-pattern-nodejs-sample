"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.receiveFlower = function (flower) {
        console.log('收到花' + flower);
    };
    Receiver.prototype.listenGoodMood = function (fn) {
        setTimeout(function () {
            fn();
        }, 10000);
    };
    return Receiver;
}());
exports.default = Receiver;
