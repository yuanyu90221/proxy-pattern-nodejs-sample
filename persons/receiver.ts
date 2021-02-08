import MoodListenable from "../interfaces/mood.interface";
import Receivable from "../interfaces/receiver.interface";
import Flower from "../proxyee/flower";

export default class Receiver implements Receivable, MoodListenable {
  receiveFlower(flower: Flower) {
    console.log('收到花' + flower)
  }
  listenGoodMood(fn: Function) {
    setTimeout(function () {
      fn();
    }, 10000)
  }
}