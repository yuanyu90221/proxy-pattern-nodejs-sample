import Receiver from '../persons/receiver';
import Sender from '../persons/sender'
import ProxyReceiver from '../persons/receiver.proxy';
import BankProxy from '../proxy/BankProxy';
import CryptrProxy from '../proxy/CryptrProxy';
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
const crtptrProxy = new CryptrProxy();
const secretKey = 'grokonez.com';
const obj = {
  title: 'grokonez',
  age: 2,
  domain: 'grokonez.com',
  country: 'US'
};
const encObj = crtptrProxy.encrypt(obj, secretKey);
console.log(encObj);
encObj.description = 'Programing Tutorials';
console.log(encObj);
const decObj = crtptrProxy.decrypt(encObj, secretKey);
console.log(decObj);