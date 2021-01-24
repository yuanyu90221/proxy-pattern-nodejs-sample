import Receiver from '../persons/receiver';
import Sender from '../persons/sender'
import ProxyReceiver from '../persons/receiver.proxy'
const Xiaoming = new Sender();
const A = new Receiver();
const B = new ProxyReceiver(A);

Xiaoming.sendFlower(B);