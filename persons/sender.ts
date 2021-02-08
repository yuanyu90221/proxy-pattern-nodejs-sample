import Receivable from "../interfaces/receiver.interface";
import Sendable from "../interfaces/sender.interface";
import Flower from "../proxyee/flower";

export default class Sender implements Sendable {
  sendFlower(target: Receivable) {
    const flower = new Flower('康乃馨');
    target.receiveFlower(flower)
  }
}