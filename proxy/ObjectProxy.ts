import KeyValue from "../interfaces/keyValue.interface";

export default class ObserveProxy {
  observeObj: KeyValue;
  constructor(obj: KeyValue, observeFn:Function) {
    this.observeObj = new Proxy(obj, {
      set(target:KeyValue, prop:string, value) {
        observeFn({[prop]: value});
        return (target[prop] = value);
      }
    });
  }
  getObserveObj() {
    return this.observeObj;
  }

}