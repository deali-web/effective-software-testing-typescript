export interface IProduct {
	name: string;
	price: bigint;
	getPrice(): number;
	toString(): string;
	equals(o: object): boolean;
	hashCode(): number;
}
