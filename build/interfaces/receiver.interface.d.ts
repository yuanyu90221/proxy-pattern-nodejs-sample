import Flower from '../proxyee/flower';
export default interface Receivable {
    receiveFlower: (flower: Flower) => void;
}
