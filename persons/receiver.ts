import  Receivable  from "../interfaces/receiver.interface";
import Flower from "../proxyee/flower";

export default class Receiver implements Receivable {
    receiveFlower(flower: Flower) {
        console.log('收到花' + flower)
    }
}