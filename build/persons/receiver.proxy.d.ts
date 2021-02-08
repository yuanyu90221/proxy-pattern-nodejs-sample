import MoodListenable from "../interfaces/mood.interface";
import Receivable from "../interfaces/receiver.interface";
import Flower from "../proxyee/flower";
export default class ProxyReceiver implements Receivable {
    receiver: Receivable & MoodListenable;
    constructor(receiver: Receivable & MoodListenable);
    receiveFlower(flower: Flower): void;
}
