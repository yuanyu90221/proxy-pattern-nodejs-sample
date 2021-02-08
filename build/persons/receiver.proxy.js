"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProxyReceiver = /** @class */ (function () {
    function ProxyReceiver(receiver) {
        this.receiver = receiver;
    }
    ProxyReceiver.prototype.receiveFlower = function (flower) {
        var receiver = this.receiver;
        receiver.listenGoodMood(function () {
            receiver.receiveFlower(flower);
        });
    };
    return ProxyReceiver;
}());
exports.default = ProxyReceiver;
