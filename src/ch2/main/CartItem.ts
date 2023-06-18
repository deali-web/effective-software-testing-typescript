import hash from 'object-hash';

export class CartItem {
	constructor(
		private readonly product: string,
		private readonly quantity: number,
		private readonly unitPrice: number,
	) {
		this.product = product;
		this.quantity = quantity;
		this.unitPrice = unitPrice;
	}

	getProduct(): string {
		return this.product;
	}

	getQuantity(): number {
		return this.quantity;
	}

	getUnitPrice(): number {
		return this.unitPrice;
	}

	public equals(item: unknown): boolean {
		if (this === item) {
			return true;
		}
		if (!(item instanceof CartItem)) {
			return false;
		}

		return (
			this.product === item.getProduct() &&
			this.quantity === item.getQuantity() &&
			this.unitPrice === item.getUnitPrice()
		);
	}

	public hashCode(): string {
		return hash({
			product: this.product,
			quantity: this.quantity,
			unitPrice: this.unitPrice,
		});
	}
}

export const CartItemFunc = (
	product: string,
	quantity: number,
	unitPrice: number,
) => {
	const getProduct = () => product;
	const getQuantity = () => quantity;
	const getUnitPrice = () => unitPrice;

	const equals = (item: unknown) => {
		if (!(item instanceof CartItem)) {
			return false;
		}

		return (
			product === item.getProduct() &&
			quantity === item.getQuantity() &&
			unitPrice === item.getUnitPrice()
		);
	};

	const hashCode = () => {
		return hash({
			product,
			quantity,
			unitPrice,
		});
	};

	return {
		getProduct,
		getQuantity,
		getUnitPrice,
		equals,
		hashCode,
	};
};
