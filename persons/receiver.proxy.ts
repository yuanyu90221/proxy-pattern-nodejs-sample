import MoodListenable from "../interfaces/mood.interface";
import Receivable from "../interfaces/receiver.interface";
import Flower from "../proxyee/flower";

export default class ProxyReceiver implements Receivable {
    receiver: Receivable&MoodListenable;
    constructor(receiver: Receivable&MoodListenable) {
        this.receiver = receiver;
    }
    receiveFlower(flower: Flower) {
        const receiver = this.receiver;
        receiver.listenGoodMood(function(){
            receiver.receiveFlower(flower)    
        })
    }
}