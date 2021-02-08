const Cryptr = require('cryptr');
interface KeyValue {
  [key: string]: any;
}
export default class CryptrProxy {
  private encObj: KeyValue = { value: null };
  private decObj: KeyValue = { value: null };

  encrypt(obj: KeyValue, secretKey: string) {
    const enCryptr = new Cryptr(secretKey);
    this.encObj = {};
    for (const prop of Object.keys(obj)) {
      this.encObj[prop] = enCryptr.encrypt(obj[prop]);
    }
    const encObj = this.encObj;
    return new Proxy(encObj, {
      set(encObj: KeyValue, prop: string, value) {
        return (encObj[prop] = enCryptr.encrypt(value))
      },
      get(encObj: KeyValue, prop: string) {
        return encObj[prop];
      }
    });
  }
  decrypt(obj: KeyValue, secretKey: string) {
    const deCryptr = new Cryptr(secretKey);
    this.decObj = {};
    for (const prop of Object.keys(obj)) {
      this.decObj[prop] = deCryptr.decrypt(obj[prop]);
    }
    const decObj = this.decObj;
    return new Proxy(decObj, {
      set() {
        throw new Error('This a read-only object');
      },
      get(decObj:KeyValue, prop: string) {
        return decObj[prop];
      }
    })
  }
}