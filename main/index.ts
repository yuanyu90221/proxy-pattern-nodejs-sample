import Receiver from '../persons/receiver';
import Sender from '../persons/sender'
import ProxyReceiver from '../persons/receiver.proxy';
import BankProxy from '../proxy/BankProxy';
const Xiaoming = new Sender();
const A = new Receiver();
const B = new ProxyReceiver(A);

Xiaoming.sendFlower(B);

console.log('BankProxy examples:');
const bankProxy = new BankProxy();
bankProxy.deposit(4000);
bankProxy.withdraw(500);
bankProxy.deposit(300);
bankProxy.total();