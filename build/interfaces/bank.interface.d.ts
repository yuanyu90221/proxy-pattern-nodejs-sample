export interface Bank {
    deposit: (amount: number) => number;
    withdraw: (amount: number) => boolean;
    total: () => number;
}
