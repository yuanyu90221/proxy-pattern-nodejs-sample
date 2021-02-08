import MoodListenable from "../interfaces/mood.interface";
import Receivable from "../interfaces/receiver.interface";
import Flower from "../proxyee/flower";
export default class Receiver implements Receivable, MoodListenable {
    receiveFlower(flower: Flower): void;
    listenGoodMood(fn: Function): void;
}
