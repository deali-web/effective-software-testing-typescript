import { IProduct } from './types.ts';

class Product implements IProduct {
	readonly name;
	readonly price;

	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
	}
	getPrice() {
		return this.price;
	}

	toString() {
		return `Product{name='${this.name}', price=${this.price}}`;
	}

	equals(other: object) {
		if (this === other) return true;
		else if (!(other instanceof Product)) return false;
		return this.name === other.name && this.price === other.price;
	}
}

export default Product;
