import Receivable from "../interfaces/receiver.interface";
import Sendable from "../interfaces/sender.interface";
export default class Sender implements Sendable {
    sendFlower(target: Receivable): void;
}
