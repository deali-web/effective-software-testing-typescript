import type { CartItem } from './CartItem.ts';

export class ShoppingCart {
	private items: Array<CartItem> = [];

	public add(item: CartItem) {
		this.items.push(item);
	}

	public totalPrice() {
		let totalPrice = 0;
		for (const item of this.items) {
			totalPrice += item.getUnitPrice() * item.getQuantity();
		}
		return totalPrice;
	}
}

export const ShoppingCartFunc = () => {
	const items: Array<CartItem> = [];

	const add = (item: CartItem) => {
		items.push(item);
	};

	const totalPrice = () => {
		// totalPrice 함수와 같은 이름으로 변수를 사용할 수 없어서 이름을 totalPriceValue 로 변경했습니다.
		let totalPriceValue = 0;
		for (const item of items) {
			totalPriceValue += item.getUnitPrice() * item.getQuantity();
		}
		return totalPriceValue;
	};

	return {
		add,
		totalPrice,
	};
};
