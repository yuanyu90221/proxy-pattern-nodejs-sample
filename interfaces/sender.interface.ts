import Receiver from "./receiver.interface";

export default interface Sendable {
  sendFlower: (receiver: Receiver) => void;
}